---
title: "Por que o tokenizer do meu GPT-2 caseiro demorava 5 minutos, e como C resolveu em 3 segundos"
description: "Voltando para as raizes codando em C"
date: "2026-03-18"
tags: ["AI", "Python", "C"]
---


# Por que o tokenizer do meu GPT-2 caseiro demorava 5 minutos, e como C resolveu em 3 segundos

## Tokenizer: o tradutor que ninguém presta atenção

Modelos de linguagem não leem texto. Leem números. Alguém precisa fazer essa conversão, e esse alguém é o tokenizer.

O GPT-2 usa BPE (Byte Pair Encoding). Começa com os 256 bytes possíveis e vai fundindo os pares mais frequentes do corpus até montar um vocabulário. Depois de uns milhares de merges, o vocabulário captura pedaços úteis da língua: sílabas, palavras comuns, sufixos. O tamanho do vocabulário importa porque define a resolução com que o modelo enxerga o texto. Se o tokenizer fragmenta demais, o modelo gasta capacidade juntando pedaços. Se comprime bem, sobra capacidade pra entender o que está escrito.

No Gepeto-2 (meu mini GPT-2 educacional), implementei o BPE do zero em Python. Byte-level, mesma regex de pré-tokenização do GPT-2 original, vocabulário de 8192 tokens. Funciona. Só que demora.

## O problema na prática

Antes de treinar o modelo, preciso encodar o corpus inteiro: pegar todos os textos do JSONL e converter em sequências de token IDs. O corpus tem ~1800 artigos da Wikipedia, ~27 milhões de caracteres.

100 artigos levavam 326 segundos em Python. O corpus inteiro levaria mais de uma hora. E toda vez que eu quisesse trocar o corpus (e eu pretendo treinar com vários), ia ter que esperar de novo.

O gargalo tem nome: `_apply_merges`. Pra cada palavra do texto, o tokenizer aplica ~7900 merges em sequência. Cada merge varre a lista de tokens procurando pares adjacentes pra fundir. Loop dentro de loop, multiplicado por centenas de milhares de palavras.

O que acontece por baixo do Python nesse loop é meio doloroso de pensar. Cada `tokens[j]` não é um acesso à memória. É uma indireção via ponteiro pra um objeto `int` que mora no heap. Cada iteração passa por resolução de referências, type checking dinâmico, e o garbage collector tá ali rondando. São milhões de iterações, e cada uma carrega todo esse overhead.

## O que muda em C

Em C, o array de tokens é um bloco contíguo de `int`. Acessar `tokens[j]` é somar um offset num ponteiro. Acabou. Sem interpretador, sem type checking em runtime, sem GC, sem objetos. O compilador ainda otimiza por cima: desenrola loops, aloca registradores, dá hints de branch prediction. Nada disso existe no mundo Python.

Eu gosto de Python. É minha linguagem do dia a dia. Mas pra um loop apertado varrendo arrays de inteiros milhões de vezes, a diferença entre interpretado e compilado aparece. E não é sutíl.

A implementação em C ficou com umas 80 linhas. Duas funções: `apply_merges` (um chunk) e `apply_merges_batch` (vários de uma vez, pra amortizar o custo das chamadas via ctypes). O algoritmo é o mesmo do Python, linha por linha. A diferença é toda na execução.

## Como ficou

Criei um módulo C e um wrapper Python com ctypes. O `.c` compila sozinho na primeira importação. Se o gcc não estiver disponível, volta pro Python puro sem quebrar nada.

Quando chamo o tokenizer na hora de treinar, se o backend C carregou, usa ele. Senão, usa a implementação Python de sempre. O resto do tokenizer (regex, special tokens, decode) continua em Python porque não são gargalo.

Benchmark com 100 artigos (1.5M chars):

| Backend | Tempo   | Tokens    |
|---------|---------|-----------|
| Python  | 326.2s  | 344,620   |
| C       | 3.6s    | 344,620   |

89.5x mais rápido. Mesma saída, token por token. O corpus inteiro (~27M chars) agora encoda em cerca de 1 minuto.

## Valeu o trabalho?

Sim e não. Eu já tinha um cache em disco: encoda uma vez, salva como `.pt`, e depois carrega direto. Isso resolve se você roda o mesmo corpus sempre. Mas eu quero testar corpus diferentes, e pra cada corpus novo, o primeiro encoding levava mais de uma hora. Agora leva 1 minuto.

Escrever o módulo C não foi um projeto grande. Foram umas 80 linhas de C e umas 80 de wrapper. O algoritmo já existia em Python, era traduzir pra `int*` e expor via ctypes.

Se o corpus crescer pra GBs, dá pra jogar OpenMP. Os chunks são independentes, então um `#pragma omp parallel for` no batch cairia sem atrito. Mas 89x single-threaded tá mais que suficiente por enquanto.

No fim, o que me fez pensar foi perceber que "encodar o texto" não é uma etapa burocrática. São milhões de caracteres passando por milhares de merges, e cada merge é um loop sobre a sequência inteira. Em Python, cada iteração desse loop carrega o peso do interpretador. Em C, é uma soma de ponteiro. Multiplicado por uns bilhões de iterações, isso vira a diferença entre 5 minutos e 3 segundos.
