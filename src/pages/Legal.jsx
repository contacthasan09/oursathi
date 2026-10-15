export default function Legal() {
  const bdCompany = [
    { labelEn: 'Legal Name', labelBn: 'Legal Name', value: 'SebaBajar Technology Limited' },
    { labelEn: 'Brand Name', labelBn: 'Brand Name', value: 'Our Sathi™' },
    { labelEn: 'Incorporation Number', labelBn: 'Incorporation Number', value: 'C-190764/2023' },
    { labelEn: 'Dun & Bradstreet (D-U-N-S®)', labelBn: 'Dun & Bradstreet (D-U-N-S®)', value: '731961665' },
    { labelEn: 'Digital Business Identity (DBID)', labelBn: 'Digital Business Identity (DBID)', value: '742918910' },
  ]

  const usaCompany = [
    { labelEn: 'Legal Name', labelBn: 'Legal Name', value: 'SebaBajar, Inc.' },
    { labelEn: 'Brand Name', labelBn: 'Brand Name', value: 'Our Sathi™' },
    { labelEn: 'EIN', labelBn: 'EIN', value: '35-2815189' },
  ]

  return (
    <div
      className="min-h-screen pt-28 sm:pt-32 pb-16 sm:pb-24 transition-colors duration-500"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-heading)' }}
    >
      <div className="container mx-auto max-w-[920px] px-5 sm:px-6">

        {/* HERO */}
        <div className="reveal mb-14 sm:mb-20">
          <div
            className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
            <span className="lang-en">Legal</span>
            <span className="lang-bn">আইনি</span>
          </div>

          <h1
            className="font-display text-[clamp(32px,6vw,72px)] font-light leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Trademarks &amp; Company Info
            </span>
            <span className="lang-bn">
              ট্রেডমার্ক ও কোম্পানি তথ্য
            </span>
          </h1>

          <p
            className="font-body text-base sm:text-lg leading-[1.8] max-w-[720px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              <strong>Our Sathi™</strong> and the <strong>Our Sathi™ logo</strong> are trademarks and
              brand assets of <strong>SebaBajar Technology Limited</strong>.
            </span>
            <span className="lang-bn">
              <strong>Our Sathi™</strong> এবং <strong>Our Sathi™ logo</strong> হলো{' '}
              <strong>SebaBajar Technology Limited</strong>-এর ট্রেডমার্ক ও ব্র্যান্ড অ্যাসেট।
            </span>
          </p>
        </div>

        {/* MADE IN BANGLADESH */}
        <div
          className="reveal mb-12 sm:mb-16 p-6 sm:p-8 border text-center"
          style={{
            background: 'var(--card-bg)',
            borderColor: 'var(--card-border)',
          }}
        >
          <div className="text-3xl mb-3">🇧🇩</div>
          <div
            className="font-display text-lg sm:text-xl italic font-light"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Proudly Made in Bangladesh.</span>
            <span className="lang-bn">গর্বের সাথে বাংলাদেশে তৈরি।</span>
          </div>
        </div>

        {/* BD COMPANY */}
        <CompanyBlock
          eyebrowEn="Company Information — Bangladesh"
          eyebrowBn="Company Information — Bangladesh"
          rows={bdCompany}
        />

        {/* USA COMPANY */}
        <CompanyBlock
          eyebrowEn="Company Information — USA"
          eyebrowBn="Company Information — USA"
          rows={usaCompany}
        />

        {/* CTA */}
        <div
          className="reveal mt-16 sm:mt-20 p-6 sm:p-10 border text-center"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <h3
            className="font-display text-2xl sm:text-3xl font-light mb-4"
            style={{ color: 'var(--text-heading)' }}
          >
            <span className="lang-en">Our Sathi™</span>
            <span className="lang-bn">Our Sathi™</span>
          </h3>
          <p
            className="font-body text-sm sm:text-base italic mb-6"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">One App: Do More, Earn More.</span>
            <span className="lang-bn">One App: Do More, Earn More.</span>
          </p>
          <a
            href="mailto:support@oursathi.com"
            className="button-4"
            style={{ borderColor: 'var(--gold-deep)', color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Legal Enquiries</span>
            <span className="lang-bn">আইনি জিজ্ঞাসা</span>
          </a>
        </div>

      </div>
    </div>
  )
}

function CompanyBlock({ eyebrowEn, eyebrowBn, rows }) {
  return (
    <div className="reveal mb-12 sm:mb-16">
      <div
        className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5"
        style={{ color: 'var(--gold-deep)' }}
      >
        <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
        <span className="lang-en">{eyebrowEn}</span>
        <span className="lang-bn">{eyebrowBn}</span>
      </div>

      <div
        className="border divide-y"
        style={{ borderColor: 'var(--card-border)', background: 'var(--card-bg)' }}
      >
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[1.2fr_1.6fr] gap-1 sm:gap-4 p-4 sm:p-5"
            style={{ borderColor: 'var(--border-subtle)' }}
          >
            <div
              className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase"
              style={{ color: 'var(--text-muted)' }}
            >
              <span className="lang-en">{row.labelEn}</span>
              <span className="lang-bn">{row.labelBn}</span>
            </div>
            <div
              className="font-body text-sm sm:text-base break-words"
              style={{ color: 'var(--text-heading)' }}
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}