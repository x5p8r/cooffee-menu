import { Home, LayoutGrid, QrCode, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Ana Sayfa', icon: Home, end: true },
  { to: '/menu', label: 'Menü', icon: LayoutGrid },
  { to: '/qr', label: 'QR Menu', icon: QrCode },
  { to: '/iletisim', label: 'İletişim', icon: Phone },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-30 w-full max-w-[520px] -translate-x-1/2 border-t border-[var(--border)] bg-[var(--nav-bg)] px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl md:max-w-[480px]">
      <ul className="grid grid-cols-4">
        {links.map(({ to, label, icon: Icon, end }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 rounded-2xl py-2 text-[11px] transition ${
                  isActive
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--muted)] hover:text-[var(--text)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${
                      isActive ? 'bg-[var(--accent-soft)]' : ''
                    }`}
                  >
                    <Icon size={20} strokeWidth={isActive ? 2.4 : 1.8} />
                  </span>
                  {label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
