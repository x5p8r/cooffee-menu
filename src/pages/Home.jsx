import { ArrowRight, Coffee, MapPin, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SHOP } from '../data/menu'
import InstagramIcon from '../components/InstagramIcon'

const HERO_IMG =
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80'
const ABOUT_IMG =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80'

export default function Home() {
  return (
    <div className="page-enter pb-8">
      <section className="relative h-[68vh] min-h-[420px] overflow-hidden rounded-b-[2rem]">
        <img src={HERO_IMG} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'var(--hero)' }} />
        <div className="relative flex h-full flex-col justify-end px-5 pb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
            Gaziantep · Şehitkamil
          </p>
          <h1 className="font-display text-4xl leading-tight md:text-5xl">{SHOP.name}</h1>
          <p className="mt-2 font-display text-xl italic text-[var(--accent)]">{SHOP.tagline}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Taze çekilmiş çekirdekler, sakin bir köşe ve günün en güzel molası. Kahveni yavaş iç,
            anı uzat.
          </p>
          <Link
            to="/menu"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--accent-text)] transition hover:opacity-90"
          >
            Menüyü İncele
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <div className="mx-5 mt-5 grid grid-cols-3 gap-3">
        <a
          href={SHOP.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-4 text-xs text-[var(--muted)] transition hover:border-[var(--accent)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            <MapPin size={18} />
          </span>
          Konum
        </a>
        <a
          href={SHOP.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-4 text-xs text-[var(--muted)] transition hover:border-[var(--accent)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            <MessageCircle size={18} />
          </span>
          WhatsApp
        </a>
        <a
          href={SHOP.instagram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] px-3 py-4 text-xs text-[var(--muted)] transition hover:border-[var(--accent)]"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
            <InstagramIcon size={18} />
          </span>
          Instagram
        </a>
      </div>

      <section className="mx-5 mt-8 overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow)]">
        <img src={ABOUT_IMG} alt="Kahve Durağı" className="h-44 w-full object-cover" />
        <div className="p-5">
          <div className="mb-2 flex items-center gap-2 text-[var(--accent)]">
            <Coffee size={16} />
            <p className="text-xs uppercase tracking-[0.22em]">Hakkımızda</p>
          </div>
          <h2 className="font-display text-2xl">Küçük dükkân, büyük molalar</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
            Kahve Durağı, Gaziantep Şehitkamil’de sade bir durak. Her fincanı özenle hazırlıyor,
            misafirlerimizi evlerindeki gibi ağırlıyoruz. İyi kahve, güzel anlar için buradayız.
          </p>
        </div>
      </section>
    </div>
  )
}
