import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const THEMES = [
  { id: 'minimal', label: 'Minimal', hint: 'Sade ve net' },
  { id: 'premium', label: 'Premium', hint: 'Lüks altın' },
  { id: 'coffee', label: 'Coffee/Dark', hint: 'Varsayılan' },
  { id: 'light', label: 'Light', hint: 'Aydınlık krem' },
]

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('kd-theme') || 'coffee')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('kd-theme', theme)
    const meta = document.querySelector('meta[name="theme-color"]')
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim()
    if (meta && bg) meta.setAttribute('content', bg)
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
