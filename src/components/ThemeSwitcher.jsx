import { Palette, X } from 'lucide-react'
import { useState } from 'react'
import { THEMES, useTheme } from '../context/ThemeContext'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed top-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] shadow-[var(--shadow)] transition hover:scale-105 md:right-[calc(50%-240px+16px)]"
        aria-label="Tema değiştir"
      >
        <Palette size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm md:items-center">
          <div className="w-full max-w-md rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">Tema</p>
                <h2 className="font-display text-xl">Görünümü seç</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-[var(--muted)]"
                aria-label="Kapat"
              >
                <X size={18} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id)
                    setOpen(false)
                  }}
                  className={`rounded-2xl border p-4 text-left transition ${
                    theme === t.id
                      ? 'border-[var(--accent)] bg-[var(--accent-soft)]'
                      : 'border-[var(--border)] bg-[var(--bg)]'
                  }`}
                >
                  <p className="font-medium">{t.label}</p>
                  <p className="mt-1 text-xs text-[var(--muted)]">{t.hint}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
