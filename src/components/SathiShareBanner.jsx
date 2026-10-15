export default function SathiShareBanner() {
  return (
    <section
      className="py-16 sm:py-20 md:py-[110px] text-center relative overflow-hidden transition-colors duration-500"
      style={{ background: 'var(--sec-night)' }}
      id="insights"
    >
      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6">
        <div className="reveal">
          <div
            className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6 relative z-[1]"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
            <span className="lang-en">Coming Soon</span>
            <span className="lang-bn">শীঘ্রই আসছে</span>
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
          </div>

          <h2
            className="font-display text-[clamp(24px,4.5vw,58px)] font-light leading-[1.15] tracking-[-0.025em] max-w-[950px] mx-auto mb-5 sm:mb-6 relative z-[1]"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Sathi Share — One platform for buses, rentals, and shared travel across Bangladesh.
            </span>
            <span className="lang-bn">
              সাথী শেয়ার — সারাদেশের বাস, রেন্টাল ও শেয়ার্ড ট্রাভেল{' '}
              <span className="italic font-light">এক প্ল্যাটফর্মে</span>
            </span>
          </h2>

          <p
            className="font-body text-base sm:text-lg leading-[1.75] max-w-[600px] mx-auto mb-8 sm:mb-10 relative z-[1]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              One platform for buses, rentals, and shared travel across Bangladesh.
            </span>
            <span className="lang-bn">
              সারাদেশের বাস, রেন্টাল এবং শেয়ার্ড ভ্রমণের জন্য একটি প্ল্যাটফর্ম।
            </span>
          </p>

          <a
            href="#"
            className="button-4 relative z-[1]"
            style={{ borderColor: 'var(--gold-deep)', color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Learn More</span>
            <span className="lang-bn">আরও জানুন</span>
          </a>
        </div>
      </div>
    </section>
  )
}