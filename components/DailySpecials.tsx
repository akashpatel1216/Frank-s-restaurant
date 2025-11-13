export const dynamic = 'force-dynamic'

import { getSupabaseServerClient } from '@/lib/supabaseClient'

type DailySpecialRecord = {
  title: string
  description: string
  price_cents: number
  currency_code: string
  emoji: string | null
  highlights: string[] | null
}

type DisplaySpecial = {
  title: string
  description: string
  price: string
  highlights: string[]
  emoji: string
}

const fallbackSpecial: DisplaySpecial = {
  title: "Chef Tony's Bone-In Ribeye",
  description:
    'Dry-aged 18oz ribeye finished with roasted garlic butter and served with truffle mash.',
  price: '$29.99',
  highlights: [
    'Aged 32 days in-house',
    'Served with charred asparagus',
    "Pairs beautifully with our barrel-aged Manhattan",
  ],
  emoji: '🥩',
}

const formatPrice = (amountInCents: number, currencyCode: string) => {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode || 'USD',
    }).format(amountInCents / 100)
  } catch (error) {
    console.error('Failed to format currency', error)
    return `$${(amountInCents / 100).toFixed(2)}`
  }
}

async function fetchTodaySpecial(): Promise<DisplaySpecial | null> {
  const supabase = getSupabaseServerClient()
  if (!supabase) {
    return null
  }

  const todayIso = new Date().toISOString().split('T')[0]

  const { data, error } = await supabase
    .from('daily_specials')
    .select('title, description, price_cents, currency_code, emoji, highlights')
    .eq('special_date', todayIso)
    .maybeSingle<DailySpecialRecord>()

  if (error) {
    if (error.code !== 'PGRST116') {
      console.error('Error fetching daily special:', error.message)
    }
    return null
  }

  if (!data) return null

  return {
    title: data.title,
    description: data.description,
    price: formatPrice(data.price_cents, data.currency_code),
    highlights: Array.isArray(data.highlights) && data.highlights.length > 0 ? data.highlights : [],
    emoji: data.emoji ?? '🍽️',
  }
}

export default async function DailySpecials() {
  const todayName = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(new Date())

  const special = (await fetchTodaySpecial()) ?? fallbackSpecial

  return (
    <section
      id="specials"
      className="py-16 bg-gradient-to-b from-white via-diner-cream/40 to-white relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(229,57,70,0.3), transparent 60%)',
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-diner-yellow text-diner-dark px-8 py-4 transform rotate-1 shadow-2xl border-4 border-diner-dark">
              <h2 className="text-4xl md:text-5xl font-display font-bold">Today&apos;s Special at Frank&apos;s</h2>
            </div>
            <p className="mt-6 text-diner-dark/70 text-lg max-w-2xl mx-auto">
              From chef-driven plates to handcrafted cocktails, every night brings a new reason to stop by the
              bar.
            </p>
          </div>

          <div className="bg-white border-4 border-diner-dark shadow-2xl p-8 mx-auto max-w-3xl relative overflow-hidden">
            <div className="absolute -top-3 -right-3 bg-diner-red text-white px-4 py-2 font-bold transform rotate-6 shadow-lg border-2 border-white">
              {todayName.toUpperCase()}
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-6xl">{special.emoji}</div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-diner-dark/60">Chef&apos;s Feature</p>
                <h3 className="text-3xl font-display font-bold text-diner-dark mt-2">{special.title}</h3>
              </div>
            </div>
            <p className="text-lg text-diner-dark/80 mb-4">{special.description}</p>
            <div className="inline-block bg-diner-blue text-white px-6 py-2 font-bold text-lg transform -rotate-2 shadow-lg">
              {special.price}
            </div>
            {special.highlights.length > 0 && (
              <ul className="mt-6 space-y-3 text-sm text-diner-dark/70">
                {special.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-diner-red font-bold mt-1">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
