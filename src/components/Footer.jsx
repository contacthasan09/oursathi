import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()
  const goldColor = theme === 'dark' ? '#c5b396' : '#a98e63'

  const socialLinks = [
    { label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
    { label: 'Twitter', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
    { label: 'TikTok', path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
    { label: 'LinkedIn', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
    { label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  ]

  const footerCols = [
    {
      titleEn: 'Company',
      titleBn: 'কোম্পানি',
      links: [
        { to: '/about', en: 'About Us', bn: 'আমাদের সম্পর্কে' },
        { to: '/help', en: 'Help', bn: 'সহায়তা' },
        { to: '/legal', en: 'Legal', bn: 'আইনি' },
        { to: '/blog', en: 'Blog', bn: 'ব্লগ' },
      ],
    },
    {
      titleEn: 'Links',
      titleBn: 'লিঙ্ক',
      links: [
        { to: '/#', en: 'Support team', bn: 'সাপোর্ট টিম' },
        { to: '/#', en: 'Ride Sharing Policy', bn: 'রাইড শেয়ারিং নীতি' },
        { to: '/#', en: 'Road Safety', bn: 'সড়ক নিরাপত্তা' },
        { to: '/#', en: 'Driver Partner Benefits', bn: 'ড্রাইভার পার্টনার সুবিধা' },
        { to: '/#', en: 'Upzila Entrepreneur', bn: 'উপজেলা উদ্যোক্তা' },
        { to: '/support', en: 'Support team', bn: 'সাপোর্ট টিম' },
      ],
    },
  ]

  return (
    <footer
      className="pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-10 relative transition-colors duration-500"
      style={{ background: 'var(--sec-footer)', color: 'var(--text-soft)' }}
      id="sathibook"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(197, 179, 150, 0.2), transparent)' }}
      />

      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-12 sm:mb-16">
          <div className="lg:col-span-1">
            <img
              src="https://www.oursathi.com/oursathi_logo_regular.png"
              alt="Our Sathi"
              className="h-8 sm:h-9 w-auto mb-5 sm:mb-6"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <p
              className="text-[14px] sm:text-[15px] leading-[1.75] max-w-[320px] mb-4"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="lang-en">
                Bangladesh's future mobility platform — building a smarter, cleaner and more
                sustainable nation.
              </span>
              <span className="lang-bn">
                বাংলাদেশের ভবিষ্যত মোবিলিটি প্ল্যাটফর্ম — একটি স্মার্ট, পরিচ্ছন্ন এবং আরও টেকসই জাতি গড়ে
                তোলা।
              </span>
            </p>
            <p className="text-xs opacity-60" style={{ color: 'var(--text-muted)' }}>
              RJSC Reg. C-190764
            </p>
          </div>

          {footerCols.map((col, index) => (
            <div key={index}>
              <h4
                className="font-heading text-[11px] font-bold tracking-[0.25em] uppercase mb-5 sm:mb-6"
                style={{ color: goldColor }}
              >
                <span className="lang-en">{col.titleEn}</span>
                <span className="lang-bn">{col.titleBn}</span>
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-3.5 list-none">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.to}
                      className="text-[14px] sm:text-[15px] inline-block transition-all duration-300 hover:translate-x-1.5"
                      style={{ color: 'var(--text-soft)' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
                    >
                      <span className="lang-en">{link.en}</span>
                      <span className="lang-bn">{link.bn}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4
              className="font-heading text-[11px] font-bold tracking-[0.25em] uppercase mb-5 sm:mb-6"
              style={{ color: goldColor }}
            >
              <span className="lang-en">Contact</span>
              <span className="lang-bn">যোগাযোগ</span>
            </h4>
            <ul className="flex flex-col gap-3 sm:gap-3.5 list-none">
              <li>
                <a
                  href="tel:01921422211"
                  className="text-[14px] sm:text-[15px] transition-colors duration-300"
                  style={{ color: 'var(--text-soft)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
                >
                  <span className="lang-en">Phone: 01921422211</span>
                  <span className="lang-bn">ফোন: ০১৯২১৪২২২১১</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@oursathi.com"
                  className="text-[14px] sm:text-[15px] transition-colors duration-300"
                  style={{ color: 'var(--text-soft)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
                >
                  support@oursathi.com
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-[14px] sm:text-[15px] transition-colors duration-300"
                  style={{ color: 'var(--text-soft)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
                >
                  <span className="lang-en">Dhaka, Bangladesh</span>
                  <span className="lang-bn">ঢাকা, বাংলাদেশ</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center flex-wrap gap-5 text-center md:text-left"
          style={{ borderTop: '1px solid rgba(197, 179, 150, 0.08)' }}
        >
          <p className="text-[12px] sm:text-[13px]" style={{ color: 'var(--text-muted)' }}>
            <span className="lang-en">
              © 2026 Our Sathi. All rights reserved. |{' '}
              <Link
                to="/legal"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Privacy Policy
              </Link>{' '}
              |{' '}
              <Link
                to="/legal"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                Terms
              </Link>
            </span>
            <span className="lang-bn">
              © ২০২৬ আওয়ার সাথী। সর্বস্বত্ব সংরক্ষিত। |{' '}
              <Link
                to="/legal"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                গোপনীয়তা নীতি
              </Link>{' '}
              |{' '}
              <Link
                to="/legal"
                className="transition-colors duration-300"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = goldColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
              >
                শর্তাবলী
              </Link>
            </span>
          </p>

          <div className="flex gap-2.5 sm:gap-3.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="/"
                aria-label={social.label}
                className="w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full border flex items-center justify-center transition-all duration-[400ms] hover:-translate-y-1 group shrink-0"
                style={{ borderColor: 'rgba(197, 179, 150, 0.15)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = goldColor
                  e.currentTarget.style.background = 'rgba(197, 179, 150, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(197, 179, 150, 0.15)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors duration-300"
                  viewBox="0 0 24 24"
                  style={{ fill: 'var(--text-soft)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.fill = goldColor)}
                  onMouseLeave={(e) => (e.currentTarget.style.fill = 'var(--text-soft)')}
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div
          className="text-center pt-8 sm:pt-10 mt-8 sm:mt-10 font-display text-lg sm:text-xl md:text-2xl font-light italic tracking-[0.02em]"
          style={{ borderTop: '1px solid rgba(197, 179, 150, 0.06)', color: goldColor }}
        >
          <span className="lang-en">Save Fuel. Save Money. Save Bangladesh.</span>
          <span className="lang-bn">জ্বালানি বাঁচান। টাকা বাঁচান। বাংলাদেশ বাঁচান।</span>
        </div>

        <div
          className="text-center mt-4 sm:mt-5 font-heading text-[10px] sm:text-xs tracking-[0.1em] opacity-60"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="lang-en">Powered By SebaBajar Technology Limited</span>
          <span className="lang-bn">সেবাবাজার টেকনোলজি লিমিটেড দ্বারা পরিচালিত</span>
        </div>
      </div>
    </footer>
  )
}