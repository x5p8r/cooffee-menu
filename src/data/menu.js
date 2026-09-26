export const CATEGORIES = [
  { id: 'all', label: 'Tümü' },
  { id: 'kahve', label: 'Kahveler' },
  { id: 'soguk', label: 'Soğuk İçecekler' },
  { id: 'tatli', label: 'Tatlılar' },
  { id: 'kahvalti', label: 'Kahvaltı' },
]

export const EXTRAS = [
  { id: 'vanilla', label: 'Vanilya', price: 10 },
  { id: 'caramel', label: 'Karamel', price: 10 },
  { id: 'almond', label: 'Badem Sütü', price: 10 },
]

export const MENU_ITEMS = [
  {
    id: 'turk-kahvesi',
    title: 'Türk Kahvesi',
    category: 'kahve',
    price: 70,
    description: 'Geleneksel cezvede pişirilmiş, köpüklü ve yoğun aromalı Türk kahvesi.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'espresso',
    title: 'Espresso',
    category: 'kahve',
    price: 65,
    description: 'Yoğun, kadifemsi crema ile kısa ve güçlü bir shot.',
    image:
      'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'latte',
    title: 'Latte',
    category: 'kahve',
    price: 70,
    description: 'Espresso ve buharlanmış sütün dengeli buluşması, hafif latte art ile.',
    image:
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cappuccino',
    title: 'Cappuccino',
    category: 'kahve',
    price: 70,
    description: 'Eşit oranlarda espresso, süt ve kadifemsi köpük.',
    image:
      'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'americano',
    title: 'Americano',
    category: 'kahve',
    price: 60,
    description: 'Espresso üzerine sıcak su; sade, net ve uzun içimli.',
    image:
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'filtre',
    title: 'Filtre Kahve',
    category: 'kahve',
    price: 65,
    description: 'Taze çekilmiş çekirdeklerden hazırlanan günlük filtre kahve.',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cold-brew',
    title: 'Cold Brew',
    category: 'soguk',
    price: 80,
    description: '12 saat soğuk demleme; düşük asidite, yumuşak ve ferahlatıcı.',
    image:
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'iced-latte',
    title: 'Ice Latte',
    category: 'soguk',
    price: 75,
    description: 'Buzlu süt ve espresso; yaz günleri için klasik soğuk latte.',
    image:
      'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'iced-mocha',
    title: 'Ice Mocha',
    category: 'soguk',
    price: 85,
    description: 'Çikolata, espresso ve buzlu süt; tatlı ve serin bir molalık.',
    image:
      'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'limonata',
    title: 'Ev Yapımı Limonata',
    category: 'soguk',
    price: 55,
    description: 'Taze limon, nane ve biraz bal ile ferah ev limonatası.',
    image:
      'https://images.unsplash.com/photo-1523677011783-c91d1bbe2fdc?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cheesecake',
    title: 'San Sebastian',
    category: 'tatli',
    price: 95,
    description: 'Karamelize yüzeyli, içi akışkan Bask usulü cheesecake.',
    image:
      'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'brownie',
    title: 'Sıcak Brownie',
    category: 'tatli',
    price: 90,
    description: 'Yoğun çikolatalı brownie, vanilyalı dondurma ile servis edilir.',
    image:
      'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cookie',
    title: 'Çikolatalı Cookie',
    category: 'tatli',
    price: 45,
    description: 'Kenarı çıtır, içi yumuşak ev usulü cookie.',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'serpme',
    title: 'Serpme Kahvaltı',
    category: 'kahvalti',
    price: 280,
    description: 'Peynir tabağı, zeytin, yumurta, reçel ve taze demleme çay.',
    image:
      'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'avokado',
    title: 'Avokado Toast',
    category: 'kahvalti',
    price: 140,
    description: 'Ekşi maya ekmek, ezilmiş avokado, pul biber ve limon.',
    image:
      'https://images.unsplash.com/photo-1541519227354-08fa27c21fc6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'menemen',
    title: 'Menemen',
    category: 'kahvalti',
    price: 120,
    description: 'Domates, biber ve yumurta; taze otlar ile sahan servisi.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80',
  },
]

export const SHOP = {
  name: 'Kahve Durağı',
  tagline: 'İyi Kahve Güzel Anlar',
  address: 'Gaziantep, Şehitkamil',
  phoneDisplay: '+90 5XX XXX XX XX',
  phoneTel: '+905XXXXXXXXX',
  whatsapp: 'https://wa.me/905000000000',
  instagram: 'https://instagram.com/kahveduragi',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gaziantep+Sehitkamil',
  hours: [
    { days: 'Pazartesi – Cuma', time: '07:00 – 23:00' },
    { days: 'Cumartesi – Pazar', time: '08:00 – 00:00' },
  ],
}
