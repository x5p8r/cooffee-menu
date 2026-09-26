import { useMemo, useState } from 'react'
import { CATEGORIES, MENU_ITEMS } from '../data/menu'
import ProductModal from '../components/ProductModal'

export default function Menu() {
  const [category, setCategory] = useState('all')
  const [selected, setSelected] = useState(null)

  const items = useMemo(
    () => (category === 'all' ? MENU_ITEMS : MENU_ITEMS.filter((i) => i.category === category)),
    [category],
  )

  return (
    <div className="page-enter px-5 pb-6">
      <header className="pt-16">
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">Menü</p>
        <h1 className="font-display mt-1 text-3xl">Bugün ne içmek istersin?</h1>
      </header>

      <div className="no-scrollbar -mx-5 mt-5 flex gap-2 overflow-x-auto px-5 pb-2">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
              category === c.id
                ? 'bg-[var(--accent)] font-medium text-[var(--accent-text)]'
                : 'border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)]'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              className="flex w-full items-center gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-3 text-left shadow-sm transition hover:border-[var(--accent)]"
            >
              <img
                src={item.image}
                alt=""
                className="h-16 w-16 shrink-0 rounded-2xl object-cover"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="truncate font-medium">{item.title}</h2>
                  <span className="shrink-0 font-semibold text-[var(--accent)]">₺{item.price}</span>
                </div>
                <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <ProductModal item={selected} onClose={() => setSelected(null)} />
    </div>
  )
}
