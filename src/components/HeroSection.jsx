import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      if (videoRef.current && scrolled < window.innerHeight) {
        videoRef.current.style.transform = `translateY(${scrolled * 0.25}px) scale(1.05)`
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ background: 'var(--bg-primary)' }}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://www.oursathi.com/assets/hero-ev.jpg"
        style={{ opacity: 'var(--hero-video-opacity)' }}
      >
        <source
          src="https://www.emaar.com/emaar-v3/assets/discover-v12/videos/banner.mp4?v=9"
          type="video/mp4"
        />
      </video>

      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, var(--bg-overlay-light) 0%, var(--bg-overlay-mid) 35%, var(--bg-overlay-dark) 100%)',
        }}
      />

      <div className="relative z-[2] text-center px-5 sm:px-6 max-w-[1100px]">
        <div
          className="hero-mark inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.35em] uppercase mb-6 sm:mb-10 animate-hero-mark-fade opacity-0"
          style={{ color: 'var(--gold-deep)' }}
        >
          <span className="w-8 sm:w-10 h-px bg-current opacity-60 hidden sm:block" />
          <span className="lang-en">Powering Bangladesh's Next Economy</span>
          <span className="lang-bn">বাংলাদেশের পরবর্তী অর্থনীতিকে শক্তি জোগাচ্ছে</span>
          <span className="w-8 sm:w-10 h-px bg-current opacity-60 hidden sm:block" />
        </div>

        <h1
          className="font-display text-[clamp(36px,8vw,104px)] font-light leading-[1.05] tracking-[-0.03em] mb-6 sm:mb-8 animate-hero-mark-fade-delay-1 opacity-0"
          style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
        >
          <span className="lang-en">
            One app. Every essential.
            <br />
            <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
              Built for Bangladesh.
            </span>
          </span>
          <span className="lang-bn">
            একটি অ্যাপ। সব প্রয়োজনীয়।
            <br />
            <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
              বাংলাদেশের জন্য তৈরি।
            </span>
          </span>
        </h1>

        <p
          className="font-body text-base sm:text-lg font-normal leading-[1.7] max-w-[640px] mx-auto mb-8 sm:mb-12 animate-hero-mark-fade-delay-2 opacity-0"
          style={{ color: 'var(--text-soft)' }}
        >
          <span className="lang-en">
            Our Sathi is Bangladesh's all-in-one super app that helps you move, earn, shop, and grow —
            now powering the country's shift to electric vehicles and battery-swap infrastructure.
          </span>
          <span className="lang-bn">
            আওয়ার সাথী বাংলাদেশের সর্ব-ইন-ওয়ান সুপার অ্যাপ যা আপনাকে চলাচল, উপার্জন, কেনাকাটা এবং বৃদ্ধি
            করতে সহায়তা করে — এখন দেশের বৈদ্যুতিক যানবাহন এবং ব্যাটারি-সোয়াপ অবকাঠামোর দিকে পরিবর্তনকে শক্তি
            জোগাচ্ছে।
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full sm:w-auto animate-hero-mark-fade-delay-3 opacity-0">
          <a
            href="#download"
            className="button-4 w-full sm:w-auto"
            style={{ borderColor: 'var(--gold-deep)', color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Download App</span>
            <span className="lang-bn">অ্যাপ ডাউনলোড করুন</span>
          </a>
          <a href="#services" className="button-4 w-full sm:w-auto">
            <span className="lang-en">Explore Services</span>
            <span className="lang-bn">সেবা দেখুন</span>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-3 animate-scroll-pulse"
        style={{ color: 'var(--text-soft)' }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase font-heading font-semibold">
          <span className="lang-en">Scroll</span>
          <span className="lang-bn">স্ক্রল</span>
        </span>
        <div
          className="w-px h-10 sm:h-14"
          style={{ background: 'linear-gradient(to bottom, var(--gold-deep), transparent)' }}
        />
      </div>
    </section>
  )
}