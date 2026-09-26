import { Clock, MapPinned, MessageCircle, Phone, MapPin } from 'lucide-react'
import { SHOP } from '../data/menu'
import InstagramIcon from '../components/InstagramIcon'

export default function Contact() {
  return (
    <div className="page-enter px-5 pb-8 pt-16">
      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">İletişim</p>
      <h1 className="font-display mt-1 text-3xl">Bize ulaşın</h1>

      <ul className="mt-6 space-y-3">
        <ContactRow icon={MapPin} label="Adres" value={SHOP.address} href={SHOP.mapsUrl} />
        <ContactRow icon={Phone} label="Telefon" value={SHOP.phoneDisplay} href={`tel:${SHOP.phoneTel}`} />
        <ContactRow icon={MessageCircle} label="WhatsApp" value="Mesaj gönder" href={SHOP.whatsapp} />
        <ContactRow icon={InstagramIcon} label="Instagram" value="@kahveduragi" href={SHOP.instagram} />
      </ul>

      <section className="mt-6 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-5">
        <div className="mb-3 flex items-center gap-2 text-[var(--accent)]">
          <Clock size={16} />
          <h2 className="text-sm font-medium uppercase tracking-widest">Çalışma Saatleri</h2>
        </div>
        <ul className="space-y-3">
          {SHOP.hours.map((row) => (
            <li key={row.days} className="flex items-center justify-between text-sm">
              <span className="text-[var(--muted)]">{row.days}</span>
              <span className="font-medium">{row.time}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
        <div className="relative h-40 bg-[linear-gradient(135deg,#2a241c,#1a1814_40%,#3a2f22)]">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,#c5a059_1px,transparent_1.5px),radial-gradient(circle_at_70%_60%,#c5a059_1px,transparent_1.5px)] [background-size:28px_28px]" />
          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-[var(--accent)]">
            <MapPinned size={32} />
            <p className="mt-1 text-xs text-[var(--muted)]">Gaziantep, Şehitkamil</p>
          </div>
        </div>
        <div className="p-4">
          <a
            href={SHOP.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-[var(--accent)] py-3 text-sm font-semibold text-[var(--accent-text)]"
          >
            Haritada Aç
          </a>
        </div>
      </section>
    </div>
  )
}

function ContactRow({ icon: Icon, label, value, href }) {
  const inner = (
    <div className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-[11px] uppercase tracking-widest text-[var(--muted)]">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
  return (
    <li>
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
        {inner}
      </a>
    </li>
  )
}
