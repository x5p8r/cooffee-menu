import { Coffee, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { SHOP } from '../data/menu'

const QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=c5a059&bgcolor=18181b&data=${encodeURIComponent(
  'https://kahveduragi.menu',
)}`

export default function QRMenu() {
  return (
    <div className="page-enter flex min-h-[70vh] flex-col items-center px-5 pb-8 pt-16 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent)]">
        <Coffee size={30} />
      </div>
      <h1 className="font-display text-3xl">{SHOP.name}</h1>
      <p className="mt-1 text-sm text-[var(--muted)]">{SHOP.tagline}</p>

      <div className="mt-8 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow)]">
        <div className="rounded-2xl bg-[var(--bg)] p-4">
          <img src={QR_SRC} alt="Menü QR kodu" className="mx-auto h-52 w-52 rounded-xl" />
        </div>
      </div>

      <p className="mt-6 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
        Menümüzü görmek için QR kodu okutun
      </p>

      <div className="mt-8 grid w-full max-w-sm grid-cols-3 gap-2">
        <Badge icon={Zap} label="Hızlı" />
        <Badge icon={Sparkles} label="Kolay" />
        <Badge icon={ShieldCheck} label="Temassız" />
      </div>
    </div>
  )
}

function Badge({ icon: Icon, label }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-4 text-xs text-[var(--muted)]">
      <Icon size={16} className="text-[var(--accent)]" />
      {label}
    </div>
  )
}
