import { useEffect, useRef } from 'react'

export default function SwapSection() {
  const swapVideoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (swapVideoRef.current) {
        const rect = swapVideoRef.current.parentElement.getBoundingClientRect()
        const rate = (rect.top + window.pageYOffset) * 0.06
        swapVideoRef.current.style.transform = `translateY(${rate}px) scale(1.1)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative py-16 sm:py-20 md:py-0 md:min-h-[85vh] flex items-center overflow-hidden transition-colors duration-500"
      style={{ background: 'var(--bg-primary)' }}
      id="how"
    >
      <video
        ref={swapVideoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        style={{ opacity: 'var(--video-opacity)' }}
      >
        <source src="https://www.emaar.com/cms-media/uploads/valia_89d943758d.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to right, var(--bg-overlay-dark) 0%, var(--bg-overlay-mid) 60%, var(--bg-overlay-light) 100%)',
        }}
      />

      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6 relative z-[2] grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-20 items-center">
        <div className="reveal">
          <div
            className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
            <span className="lang-en">Battery Swapping</span>
            <span className="lang-bn">ব্যাটারি সোয়াপিং</span>
          </div>

          <h2
            className="font-display text-[clamp(28px,5vw,60px)] font-light leading-[1.08] tracking-[-0.025em] mb-5 sm:mb-6"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Never Stop Moving
              <br />
              <span className="italic font-light">with Sathi Swap</span>
            </span>
            <span className="lang-bn">
              কখনও থামবেন না
              <br />
              <span className="italic font-light">সাথী সোয়াপের সাথে</span>
            </span>
          </h2>

          <p
            className="font-body text-base sm:text-lg leading-[1.75] mb-8 sm:mb-10 max-w-[500px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Swap your depleted battery for a fully charged one in under 2 minutes at any Our Sathi
              station. No more charging downtime, just pure performance.
            </span>
            <span className="lang-bn">
              যেকোনো আওয়ার সাথী স্টেশনে ২ মিনিটেরও কম সময়ে আপনার শেষ ব্যাটারি সম্পূর্ণ চার্জযুক্ত একটি দিয়ে
              সোয়াপ করুন। আর চার্জিং ডাউনটাইম নেই, শুধু খাঁটি পারফরম্যান্স।
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div>
              <div
                className="font-display text-[40px] sm:text-[48px] md:text-[56px] font-light leading-none tracking-[-0.03em] mb-2.5"
                style={{ color: 'var(--gold-deep)' }}
              >
                100%
              </div>
              <div
                className="font-heading text-[11px] font-bold tracking-[0.2em] uppercase"
                style={{ color: 'var(--text-soft)' }}
              >
                <span className="lang-en">Zero Emission</span>
                <span className="lang-bn">শূন্য নির্গমন</span>
              </div>
            </div>
            <div>
              <div
                className="font-display text-[40px] sm:text-[48px] md:text-[56px] font-light leading-none tracking-[-0.03em] mb-2.5"
                style={{ color: 'var(--gold-deep)' }}
              >
                2 Min
              </div>
              <div
                className="font-heading text-[11px] font-bold tracking-[0.2em] uppercase"
                style={{ color: 'var(--text-soft)' }}
              >
                <span className="lang-en">Fast Swapping</span>
                <span className="lang-bn">দ্রুত সোয়াপিং</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal reveal-delay-1 flex justify-center items-center">
          <img
            src="https://www.oursathi.com/assets/battery-swap.jpg"
            alt="Battery Swap"
            className="w-full max-w-[440px] rounded transition-transform duration-[800ms] hover:scale-105"
          />
        </div>
      </div>
    </section>
  )
}