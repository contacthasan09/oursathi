import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useHeaderScroll } from '../hooks/useHeaderScroll'

export default function Header({ onOpenPanel }) {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang } = useLanguage()
  const isScrolled = useHeaderScroll()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/#services', en: 'Services', bn: 'সেবাসমূহ' },
    { href: '/#how', en: 'How It Works', bn: 'কিভাবে কাজ করে' },
    { href: '/#insights', en: 'Insights', bn: 'ইনসাইট' },
    { href: 'https://sathibook.com/onboard', en: 'Sathibook', bn: 'সাথীবুক', external: true },
  ]

  return (
    <header
      className={`site-header fixed top-0 left-0 right-0 z-[1000] backdrop-blur-[20px] border-b transition-all duration-[400ms] ${
        isScrolled ? 'scrolled' : ''
      }`}
      style={{
        background: isScrolled ? 'var(--bg-glass-header-scrolled)' : 'var(--bg-glass-header)',
        borderBottomColor: isScrolled ? 'var(--border-medium)' : 'var(--border-subtle)',
      }}
      id="siteHeader"
    >
      <div className="container mx-auto max-w-[1320px] px-4 sm:px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-[9px] shrink-0">
          <img
            src="https://www.oursathi.com/oursathi_logo_regular.png"
            alt="Our Sathi"
            className="h-7 sm:h-8 w-auto transition-[filter] duration-500"
            style={{ filter: 'var(--header-logo-filter)' }}
          />
        </Link>

        <nav
          className={`header-nav items-center gap-[22px] ${isMenuOpen ? 'is-open' : ''}`}
          id="mainNav"
          style={isMenuOpen ? { background: 'var(--bg-glass-header-scrolled)' } : undefined}
        >
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading text-[11.5px] font-semibold tracking-[0.16em] uppercase relative py-[6px] px-[1px] transition-colors duration-300 group"
                style={{ color: 'var(--text-soft)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="lang-en">{link.en}</span>
                <span className="lang-bn">{link.bn}</span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-px origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"
                  style={{ background: theme === 'dark' ? 'var(--gold)' : 'var(--gold-deep)' }}
                />
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="font-heading text-[11.5px] font-semibold tracking-[0.16em] uppercase relative py-[6px] px-[1px] transition-colors duration-300 group"
                style={{ color: 'var(--text-soft)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="lang-en">{link.en}</span>
                <span className="lang-bn">{link.bn}</span>
                <span
                  className="absolute bottom-0 left-0 right-0 h-px origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300"
                  style={{ background: theme === 'dark' ? 'var(--gold)' : 'var(--gold-deep)' }}
                />
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 shrink-0">
          <button
            className="btn-portals"
            id="btnPortals"
            aria-label="Access Portals"
            aria-expanded="false"
            onClick={onOpenPanel}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="portals-label">
              <span className="lang-en">Access Portals</span>
              <span className="lang-bn">পোর্টাল</span>
            </span>
          </button>

          <div
            className="lang-toggle hidden sm:inline-flex items-center border rounded-full p-0.5 transition-all duration-300"
            style={{ borderColor: 'var(--border-medium)' }}
            id="langToggle"
            role="group"
            aria-label="Language selector"
          >
            <button
              className={`lang-option font-heading text-[10.5px] font-bold tracking-[0.1em] uppercase py-1.5 px-2.5 sm:px-3 rounded-full transition-all duration-300 ${
                lang === 'en' ? 'active' : ''
              }`}
              data-lang="en"
              aria-pressed={lang === 'en'}
              onClick={() => toggleLang('en')}
              style={{
                background:
                  lang === 'en' ? (theme === 'dark' ? 'var(--gold)' : 'var(--gold-deep)') : 'transparent',
                color:
                  lang === 'en' ? (theme === 'dark' ? '#0b0a12' : '#ffffff') : 'var(--text-soft)',
              }}
            >
              EN
            </button>
            <button
              className={`lang-option font-heading text-[10.5px] font-bold tracking-[0.1em] uppercase py-1.5 px-2.5 sm:px-3 rounded-full transition-all duration-300 ${
                lang === 'bn' ? 'active' : ''
              }`}
              data-lang="bn"
              aria-pressed={lang === 'bn'}
              onClick={() => toggleLang('bn')}
              style={{
                background:
                  lang === 'bn' ? (theme === 'dark' ? 'var(--gold)' : 'var(--gold-deep)') : 'transparent',
                color:
                  lang === 'bn' ? (theme === 'dark' ? '#0b0a12' : '#ffffff') : 'var(--text-soft)',
              }}
            >
              বাং
            </button>
          </div>

          <button
            className="theme-toggle flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border transition-all duration-[400ms] hover:rotate-[15deg] relative overflow-hidden shrink-0"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            style={{
              borderColor: 'var(--border-medium)',
              color: 'var(--text-primary)',
            }}
          >
            <svg
              className={`icon-moon absolute w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-all duration-500 ${
                theme === 'light' ? 'opacity-0 -rotate-90 scale-60' : 'opacity-100 rotate-0 scale-100'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
            <svg
              className={`icon-sun absolute w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-all duration-500 ${
                theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-60'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          <Link to="/#download" className="button-4 hidden lg:inline-flex">
            <span className="lang-en">Download</span>
            <span className="lang-bn">ডাউনলোড</span>
          </Link>

          <button
            className={`menu-toggle flex lg:hidden flex-col gap-[5px] p-2 shrink-0 ${
              isMenuOpen ? 'active' : ''
            }`}
            id="menuToggle"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block w-6 h-[1.5px] transition-transform duration-300 ${
                isMenuOpen ? 'rotate-45 translate-x-[5px] translate-y-[5px]' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
            <span
              className={`block w-6 h-[1.5px] transition-transform duration-300 ${
                isMenuOpen ? '-rotate-45 translate-x-[5px] -translate-y-[5px]' : ''
              }`}
              style={{ background: 'var(--text-primary)' }}
            />
          </button>
        </div>
      </div>
    </header>
  )
}