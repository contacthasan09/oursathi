import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function PortalPanel({ isOpen, onClose }) {
  const { lang } = useLanguage()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const portals = [
    {
      href: 'https://www.oursathi.com/user/login',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      en: 'User Dashboard',
      bn: 'ইউজার ড্যাশবোর্ড',
      descEn: 'Book rides, order essentials, and manage your services.',
      descBn: 'রাইড বুক করুন, প্রয়োজনীয় জিনিস অর্ডার করুন এবং আপনার সেবা পরিচালনা করুন।',
    },
    {
      href: 'https://www.oursathi.com/provider/login',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="8.5" cy="7" r="4" />
          <line x1="20" y1="8" x2="20" y2="14" />
          <line x1="23" y1="11" x2="17" y2="11" />
        </svg>
      ),
      en: 'Partner Dashboard',
      bn: 'পার্টনার ড্যাশবোর্ড',
      descEn: 'Drive, deliver, and earn more with low commissions.',
      descBn: 'ড্রাইভ করুন, ডেলিভারি করুন এবং কম কমিশনে বেশি উপার্জন করুন।',
    },
    {
      href: 'https://www.oursathi.com/shop/login',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l1.5-6h15L21 9" />
          <path d="M3 9h18v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
          <path d="M9 13h6" />
        </svg>
      ),
      en: 'Shop Manager',
      bn: 'শপ ম্যানেজার',
      descEn: 'Manage inventory, sales, and grow your local business.',
      descBn: 'ইনভেন্টরি, বিক্রয় পরিচালনা করুন এবং আপনার স্থানীয় ব্যবসা বাড়ান।',
    },
  ]

  return (
    <>
      <div
        className={`panel-backdrop fixed inset-0 z-[1500] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        id="panelBackdrop"
        onClick={onClose}
        style={{
          background: lang === 'bn' ? 'rgba(5, 5, 5, 0.6)' : 'rgba(5, 5, 5, 0.6)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      <aside
        className={`portal-panel fixed top-0 right-0 bottom-0 w-full sm:max-w-[520px] z-[1600] flex flex-col overflow-y-auto overflow-x-hidden transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="portalPanel"
        role="dialog"
        aria-modal="true"
        aria-label="Select Portal"
        style={{
          background: 'var(--panel-bg)',
          borderLeft: '1px solid var(--panel-border)',
          boxShadow: 'var(--shadow-panel)',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div
          className="absolute -top-[150px] -right-[150px] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(197, 179, 150, 0.1) 0%, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-[150px] -left-[150px] w-[350px] h-[350px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(13, 148, 136, 0.08) 0%, transparent 70%)' }}
        />

        <div
          className="flex items-center justify-between p-6 sm:p-8 md:p-10 border-b relative z-[1] shrink-0 gap-4"
          style={{ borderColor: 'var(--panel-border)' }}
        >
          <div className="min-w-0">
            <div
              className="font-heading text-[10px] font-bold tracking-[0.3em] uppercase mb-2"
              style={{ color: 'var(--gold-deep)' }}
            >
              <span className="lang-en">Choose Your Path</span>
              <span className="lang-bn">আপনার পথ বেছে নিন</span>
            </div>
            <div
              className="font-display text-[22px] sm:text-[26px] md:text-[28px] font-light tracking-[-0.02em] leading-[1.1]"
              style={{ color: 'var(--text-heading)' }}
            >
              <span className="lang-en">Select Portal</span>
              <span className="lang-bn">পোর্টাল নির্বাচন করুন</span>
            </div>
          </div>
          <button
            className="portal-close flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-[400ms] hover:rotate-90 shrink-0"
            id="portalClose"
            aria-label="Close panel"
            onClick={onClose}
            style={{ borderColor: 'var(--border-medium)', color: 'var(--text-primary)' }}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="p-6 sm:p-8 md:p-10 relative z-[1] flex-1 flex flex-col">
          <p
            className="text-sm leading-[1.7] mb-6 sm:mb-8 pb-6 sm:pb-8 border-b"
            style={{ color: 'var(--text-soft)', borderColor: 'var(--panel-border)' }}
          >
            <span className="lang-en">
              Pick the dashboard that matches your role. Each portal is designed for how you work with Our Sathi.
            </span>
            <span className="lang-bn">
              আপনার ভূমিকার সাথে মিলে যাওয়া ড্যাশবোর্ড বেছে নিন। প্রতিটি পোর্টাল আওয়ার সাথীর সাথে আপনি কিভাবে কাজ করেন তার জন্য ডিজাইন করা হয়েছে।
            </span>
          </p>

          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            {portals.map((portal, index) => (
              <a
                key={portal.href}
                href={portal.href}
                className={`portal-option flex items-start gap-4 sm:gap-5 p-5 sm:p-6 border relative overflow-hidden group transition-all duration-[400ms] ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[30px]'
                }`}
                style={{
                  borderColor: 'var(--panel-border)',
                  transitionDelay: isOpen ? `${0.15 + index * 0.1}s` : '0s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--panel-hover)'
                  e.currentTarget.style.borderColor = 'var(--gold-deep)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.borderColor = 'var(--panel-border)'
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500"
                  style={{ background: 'var(--gold-deep)' }}
                />
                <div
                  className="portal-option-icon w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center shrink-0 border transition-all duration-[400ms] group-hover:scale-105"
                  style={{
                    background: 'rgba(197, 179, 150, 0.08)',
                    borderColor: 'var(--border-medium)',
                  }}
                >
                  <span className="w-[18px] h-[18px] transition-colors duration-300" style={{ color: 'var(--gold-deep)' }}>
                    {portal.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-display text-lg sm:text-xl font-normal tracking-[-0.01em] mb-1.5 flex items-center gap-2 transition-colors duration-300"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    <span className="lang-en">{portal.en}</span>
                    <span className="lang-bn">{portal.bn}</span>
                    <span
                      className="inline-block text-base transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                      style={{ color: 'var(--gold-deep)' }}
                    >
                      →
                    </span>
                  </div>
                  <div
                    className="text-[13px] sm:text-[13.5px] leading-[1.6] transition-colors duration-300"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    <span className="lang-en">{portal.descEn}</span>
                    <span className="lang-bn">{portal.descBn}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div
          className="p-6 sm:p-8 md:p-10 pt-6 sm:pt-8 border-t relative z-[1] shrink-0"
          style={{ borderColor: 'var(--panel-border)' }}
        >
          <div
            className="font-display text-lg sm:text-[22px] font-light italic tracking-[-0.015em] text-center leading-[1.3]"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span
              className="block font-heading text-[10px] font-bold tracking-[0.3em] uppercase not-italic mb-2.5"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="lang-en">Our Sathi</span>
              <span className="lang-bn">আওয়ার সাথী</span>
            </span>
            <span className="lang-en">Powering Bangladesh's Next Economy</span>
            <span className="lang-bn">বাংলাদেশের পরবর্তী অর্থনীতিকে শক্তি জোগাচ্ছে</span>
          </div>
        </div>
      </aside>
    </>
  )
}