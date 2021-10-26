import { useState, useEffect } from 'react'

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'auto')
  const rootClassList = document.documentElement.classList

  useEffect(() => {
    if (
      theme === 'dark' ||
      (theme === 'auto' &&
        window.matchMedia('(prefers-color-scheme: dark').matches)
    ) {
      rootClassList.add('dark')
    } else {
      rootClassList.remove('dark')
    }

    localStorage.setItem('theme', theme)
  }, [theme, rootClassList])

  return { theme, setTheme }
}
