import { Minus, Plus, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { EXTRAS } from '../data/menu'
import { useCart } from '../context/CartContext'

export default function ProductModal({ item, onClose }) {
  const { addToCart } = useCart()
  const [qty, setQty] = useState(1)
  const [extras, setExtras] = useState([])

  useEffect(() => {
    setQty(1)
    setExtras([])
  }, [item])

  const extraTotal = extras.reduce((sum, id) => {
    const extra = EXTRAS.find((e) => e.id === id)
    return sum + (extra?.price || 0)
  }, 0)

  const unitPrice = useMemo(() => (item ? item.price + extraTotal : 0), [item, extraTotal])

  if (!item) return null

  function toggleExtra(id) {
    setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function add() {
    addToCart({
      id: item.id,
      title: item.title,
      quantity: qty,
      extras,
      unitPrice,
    })
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/55 backdrop-blur-sm md:items-center">
      <button className="absolute inset-0" aria-label="Kapat" onClick={onClose} type="button" />
      <div className="relative z-[81] mb-0 max-h-[88dvh] w-full max-w-lg overflow-y-auto rounded-t-[1.6rem] border border-[var(--border)] bg-[var(--surface)] pb-[max(1.5rem,env(safe-area-inset-bottom))] shadow-[var(--shadow)] md:rounded-[var(--radius)]">
        <div className="relative h-52 overflow-hidden">
          <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] to-transparent" />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-black/45 p-2 text-white"
            aria-label="Kapat"
          >
            <X size={18} />
          </button>
        </div>
        <div className="px-5 pb-6">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
            </div>
            <p className="shrink-0 text-lg font-semibold text-[var(--accent)]">₺{item.price}</p>
          </div>

          <div className="mt-5">
            <h3 className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--muted)]">
              Ekstralar
            </h3>
            <div className="space-y-2">
              {EXTRAS.map((extra) => {
                const checked = extras.includes(extra.id)
                return (
                  <button
                    key={extra.id}
                    type="button"
                    onClick={() => toggleExtra(extra.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                      checked
                        ? 'border-[var(--accent)] bg-[var(--accent-soft)]'
                        : 'border-[var(--border)] bg-[var(--bg)]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-4 w-4 items-center justify-center rounded border ${
                          checked
                            ? 'border-[var(--accent)] bg-[var(--accent)]'
                            : 'border-[var(--muted)]'
                        }`}
                      >
                        {checked ? (
                          <span className="block h-2 w-2 rounded-sm bg-[var(--accent-text)]" />
                        ) : null}
                      </span>
                      {extra.label}
                    </span>
                    <span className="text-sm text-[var(--muted)]">+₺{extra.price}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg)] px-2 py-1">
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Azalt"
              >
                <Minus size={16} />
              </button>
              <span className="w-5 text-center font-medium">{qty}</span>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-full"
                onClick={() => setQty((q) => q + 1)}
                aria-label="Artır"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              type="button"
              onClick={add}
              className="flex-1 rounded-full bg-[var(--accent)] py-3.5 text-sm font-semibold text-[var(--accent-text)] transition hover:opacity-90"
            >
              Sepete Ekle · ₺{unitPrice * qty}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
