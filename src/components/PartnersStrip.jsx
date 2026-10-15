const partners = ['BKASH', 'NAGAD', 'MASTERCARD', 'AAMARPAY', 'ROCKET', 'GLAFIT']

export default function PartnersStrip() {
  return (
    <div
      className="py-8 sm:py-11 overflow-hidden border-y transition-colors duration-500"
      style={{ background: 'var(--sec-black)', borderColor: 'var(--border-subtle)' }}
    >
      <div className="flex gap-10 sm:gap-14 md:gap-20 animate-marquee-scroll-partners whitespace-nowrap w-max">
        {[...partners, ...partners].map((partner, index) => (
          <span
            key={index}
            className="font-display text-[18px] sm:text-[22px] md:text-[28px] font-normal tracking-[0.08em] transition-opacity duration-300 hover:opacity-100"
            style={{ color: 'var(--partner-text)', opacity: 'var(--partner-opacity)' }}
          >
            {partner}
          </span>
        ))}
      </div>
    </div>
  )
}