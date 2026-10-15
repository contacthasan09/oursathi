const PlayStoreIcon = () => (
  <svg
    className="store-icon w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-colors duration-400"
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{ fill: 'var(--store-icon-fill)' }}
  >
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.195 12l2.503-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
  </svg>
)

const AppStoreIcon = () => (
  <svg
    className="store-icon w-5 h-5 sm:w-6 sm:h-6 shrink-0 transition-colors duration-400"
    viewBox="0 0 24 24"
    aria-hidden="true"
    style={{ fill: 'var(--store-icon-fill)' }}
  >
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
)

const platforms = [
  {
    tagEn: 'For Customers',
    tagBn: 'গ্রাহকদের জন্য',
    titleEn: 'Our Sathi User',
    titleBn: 'আওয়ার সাথী ইউজার',
    descEn: 'From transport to handyman help, food delivery to health services — Our Sathi connects you to trusted providers instantly. Experience convenience like never before, all in one Super App.',
    descBn: 'পরিবহন থেকে হ্যান্ডিম্যান সহায়তা, খাদ্য ডেলিভারি থেকে স্বাস্থ্য সেবা — আওয়ার সাথী আপনাকে বিশ্বস্ত প্রদানকারীদের সাথে তাত্ক্ষণিকভাবে সংযুক্ত করে। আগের মতো সুবিধা অনুভব করুন, সব একটি সুপার অ্যাপে।',
    playStore: 'https://play.google.com/store/apps/details?id=com.sebabajar.userapp',
    appStore: 'https://apps.apple.com/us/app/our-sathi-ride-service-buy/id6474979626',
  },
  {
    tagEn: 'For Service Providers',
    tagBn: 'সেবা প্রদানকারীদের জন্য',
    titleEn: 'Our Sathi Partner',
    titleBn: 'আওয়ার সাথী পার্টনার',
    descEn: 'Earn more with Our Sathi! Our low-commission model ensures you keep more of your earnings while gaining access to a growing customer base. Start faster, manage your business with ease, and grow sustainably.',
    descBn: 'আওয়ার সাথীর সাথে আরও উপার্জন করুন! আমাদের কম-কমিশন মডেল নিশ্চিত করে যে আপনি আপনার উপার্জনের বেশি রাখেন এবং একটি ক্রমবর্ধমান গ্রাহক বেসে অ্যাক্সেস পান। দ্রুত শুরু করুন, সহজে আপনার ব্যবসা পরিচালনা করুন এবং টেকসইভাবে বৃদ্ধি করুন।',
    playStore: 'https://play.google.com/store/apps/details?id=com.sebabajar.partnerapp',
    appStore: 'https://apps.apple.com/us/app/our-sathi-partner-earn-more/id6670694666',
  },
  {
    tagEn: 'For Shop Owners',
    tagBn: 'দোকান মালিকদের জন্য',
    titleEn: 'Our Sathi Shop',
    titleBn: 'আওয়ার সাথী শপ',
    descEn: 'Our Sathi empowers shop owners with digital tools to manage orders, deliveries, bookkeeping, and inventory. Keep more profits, reach more customers, and grow your business effortlessly.',
    descBn: 'আওয়ার সাথী দোকান মালিকদের অর্ডার, ডেলিভারি, হিসাবরক্ষণ এবং ইনভেন্টরি পরিচালনা করার জন্য ডিজিটাল সরঞ্জাম দিয়ে ক্ষমতায়ন করে। আরও লাভ রাখুন, আরও গ্রাহকের কাছে পৌঁছান এবং অনায়াসে আপনার ব্যবসা বাড়ান।',
    playStore: 'https://play.google.com/store/apps/details?id=com.sebabajar.shopapp',
    appStore: 'https://apps.apple.com/us/app/our-sathi-shop-smart-store/id6456524458',
  },
]

export default function GetStartedSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-[110px] relative overflow-hidden transition-colors duration-500"
      style={{ background: 'var(--sec-paper)', color: 'var(--text-dark)' }}
      id="download"
    >
      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6">
        <div
          className="reveal inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6 relative z-[1]"
          style={{ color: 'var(--gold-deep)' }}
        >
          <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
          <span className="lang-en">Three Apps, One Ecosystem</span>
          <span className="lang-bn">তিনটি অ্যাপ, একটি ইকোসিস্টেম</span>
        </div>

        <h2
          className="reveal font-display text-[clamp(28px,5vw,60px)] font-light leading-[1.08] tracking-[-0.025em] mb-4 sm:mb-5 relative z-[1]"
          style={{ color: 'var(--text-dark)', fontVariationSettings: "'opsz' 144" }}
        >
          <span className="lang-en">
            Get Started with
            <br />
            <span className="italic font-light">Our Sathi Today</span>
          </span>
          <span className="lang-bn">
            আজই শুরু করুন
            <br />
            <span className="italic font-light">আওয়ার সাথীর সাথে</span>
          </span>
        </h2>

        <p
          className="reveal reveal-delay-1 font-body text-base sm:text-lg leading-[1.75] max-w-[720px] mb-10 sm:mb-16 relative z-[1]"
          style={{ color: 'var(--text-brown)' }}
        >
          <span className="lang-en">
            Our Sathi is for customers, Our Sathi Partner is for service providers, and Our Sathi Shop
            is for store owners and managers.
          </span>
          <span className="lang-bn">
            আওয়ার সাথী গ্রাহকদের জন্য, আওয়ার সাথী পার্টনার সেবা প্রদানকারীদের জন্য, এবং আওয়ার সাথী শপ দোকান
            মালিক ও ম্যানেজারদের জন্য।
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 relative z-[1]">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="reveal p-6 sm:p-8 md:p-11 border relative overflow-hidden flex flex-col group transition-all duration-[400ms] hover:-translate-y-2"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
                e.currentTarget.style.borderColor = 'var(--gold-deep)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'var(--card-border)'
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'linear-gradient(90deg, var(--gold-deep), var(--gold))' }}
              />
              <div
                className="font-heading text-[10px] font-bold tracking-[0.3em] uppercase mb-4 sm:mb-5 inline-block py-[5px] px-3 border rounded-full self-start"
                style={{ color: 'var(--gold-deep)', borderColor: 'currentColor' }}
              >
                <span className="lang-en">{platform.tagEn}</span>
                <span className="lang-bn">{platform.tagBn}</span>
              </div>

              <h3
                className="font-display text-2xl sm:text-[26px] md:text-[28px] font-normal leading-[1.2] mb-3 sm:mb-4"
                style={{ color: 'var(--text-dark)' }}
              >
                <span className="lang-en">{platform.titleEn}</span>
                <span className="lang-bn">{platform.titleBn}</span>
              </h3>

              <p
                className="font-body text-[14px] sm:text-[15px] leading-[1.75] mb-6 sm:mb-7 flex-1"
                style={{ color: 'var(--text-brown)' }}
              >
                <span className="lang-en">{platform.descEn}</span>
                <span className="lang-bn">{platform.descBn}</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-auto">
                <a
                  href={platform.playStore}
                  className="store-btn flex items-center gap-2.5 py-2.5 px-3.5 border rounded-lg relative overflow-hidden transition-all duration-[400ms] hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: 'var(--store-btn-border)', background: 'var(--store-btn-bg)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--store-btn-hover-bg)'
                    e.currentTarget.style.borderColor = 'var(--store-btn-hover-border)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--store-btn-bg)'
                    e.currentTarget.style.borderColor = 'var(--store-btn-border)'
                  }}
                >
                  <PlayStoreIcon />
                  <div className="flex flex-col leading-[1.2] min-w-0 flex-1">
                    <span
                      className="font-heading text-[8.5px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-400"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span className="lang-en">GET IT ON</span>
                      <span className="lang-bn">পান</span>
                    </span>
                    <span
                      className="font-heading text-[12px] sm:text-[13px] font-bold tracking-[-0.005em] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-400"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      <span className="lang-en">Google Play</span>
                      <span className="lang-bn">গুগল প্লে</span>
                    </span>
                  </div>
                </a>

                <a
                  href={platform.appStore}
                  className="store-btn flex items-center gap-2.5 py-2.5 px-3.5 border rounded-lg relative overflow-hidden transition-all duration-[400ms] hover:-translate-y-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: 'var(--store-btn-border)', background: 'var(--store-btn-bg)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--store-btn-hover-bg)'
                    e.currentTarget.style.borderColor = 'var(--store-btn-hover-border)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--store-btn-bg)'
                    e.currentTarget.style.borderColor = 'var(--store-btn-border)'
                  }}
                >
                  <AppStoreIcon />
                  <div className="flex flex-col leading-[1.2] min-w-0 flex-1">
                    <span
                      className="font-heading text-[8.5px] font-semibold tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-400"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <span className="lang-en">DOWNLOAD ON THE</span>
                      <span className="lang-bn">ডাউনলোড</span>
                    </span>
                    <span
                      className="font-heading text-[12px] sm:text-[13px] font-bold tracking-[-0.005em] whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-400"
                      style={{ color: 'var(--text-heading)' }}
                    >
                      <span className="lang-en">App Store</span>
                      <span className="lang-bn">অ্যাপ স্টোর</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}