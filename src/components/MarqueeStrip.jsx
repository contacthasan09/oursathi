export default function MarqueeStrip() {
  const items = [
    { en: 'Secure Payments', bn: 'নিরাপদ পেমেন্ট' },
    { en: 'EV Ready', bn: 'ইভি প্রস্তুত' },
    { en: '10M+ Network', bn: '১০ মিলিয়ন+ নেটওয়ার্ক' },
  ]

  return (
    <div
      className="overflow-hidden py-6 sm:py-8 border-y transition-colors duration-500"
      style={{ background: 'var(--sec-black)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="flex gap-8 sm:gap-12 md:gap-16 animate-marquee-scroll whitespace-nowrap w-max">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-display text-[18px] sm:text-[24px] md:text-[32px] font-normal italic tracking-[-0.02em] flex items-center gap-8 sm:gap-12 md:gap-16"
            style={{ color: 'var(--marquee-text)', opacity: 'var(--marquee-text-opacity)' }}
          >
            <span className="lang-en">{item.en}</span>
            <span className="lang-bn">{item.bn}</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--gold-deep)', opacity: 0.6 }} />
          </span>
        ))}
      </div>
    </div>
  )
}