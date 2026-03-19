export const useDarkMode = () => {
  const isDark = useState('darkMode', () => false)

  const toggle = () => {
    isDark.value = !isDark.value
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
    }
  }

  const init = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('darkMode')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = stored === 'dark' || (stored === null && prefersDark)
      document.documentElement.classList.toggle('dark', isDark.value)
    }
  }

  return { isDark, toggle, init }
}
