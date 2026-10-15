export default function IntroSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-[110px] relative overflow-hidden transition-colors duration-500"
      style={{ background: 'var(--sec-night)' }}
    >
      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6">
        <div className="reveal max-w-[900px] relative z-[1]">
          <div
            className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
            <span className="lang-en">Our Sathi EV</span>
            <span className="lang-bn">আওয়ার সাথী ইভি</span>
          </div>

          <h2
            className="font-display text-[clamp(28px,5vw,60px)] font-light leading-[1.08] tracking-[-0.025em] mb-5 sm:mb-7"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Powering Bangladesh's
              <br />
              <span className="italic font-light">Next Economy</span>
            </span>
            <span className="lang-bn">
              বাংলাদেশের পরবর্তী
              <br />
              <span className="italic font-light">অর্থনীতিকে শক্তি</span>
            </span>
          </h2>

          <p
            className="font-body text-base sm:text-lg font-normal leading-[1.7] tracking-[-0.01em] mb-8 sm:mb-10 max-w-[720px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Our Sathi provides EMI-based financial tools, digital business solutions, and essential
              services to empower service providers, retailers, and consumers — driving growth without
              financial barriers.
            </span>
            <span className="lang-bn">
              আওয়ার সাথী EMI-ভিত্তিক আর্থিক সরঞ্জাম, ডিজিটাল ব্যবসায়িক সমাধান এবং প্রয়োজনীয় সেবা প্রদান
              করে সেবা প্রদানকারী, খুচরা বিক্রেতা এবং ভোক্তাদের ক্ষমতায়ন করতে — আর্থিক বাধা ছাড়াই প্রবৃদ্ধি
              চালিত করে।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {[
              { en: 'Secure Payments', bn: 'নিরাপদ পেমেন্ট' },
              { en: 'EV Ready', bn: 'ইভি প্রস্তুত' },
              { en: '10M+ Network', bn: '১০ মিলিয়ন+ নেটওয়ার্ক' },
            ].map((badge, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2.5 py-3 px-5 border rounded-full font-heading text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:-translate-y-0.5 self-start"
                style={{ borderColor: 'var(--border-medium)', color: 'var(--text-soft)', background: 'transparent' }}
              >
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--gold-deep)' }} />
                <span className="lang-en">{badge.en}</span>
                <span className="lang-bn">{badge.bn}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}