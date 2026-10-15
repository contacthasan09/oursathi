export default function Support() {
  const supportEmails = [
    { value: 'support@oursathi.com', href: 'mailto:support@oursathi.com' },
  ]

  const supportNumbers = [
    { en: '+880 1921-422211', bn: '+৮৮০ ১৯২১-৪২২২১১', href: 'tel:+8801921422211' },
    { en: '+880 1623-765010', bn: '+৮৮০ ১৬২৩-৭৬৫০১০', href: 'tel:+8801623765010' },
  ]

  const socials = [
    { icon: '📘', labelEn: 'Facebook', labelBn: 'ফেইসবুক', handle: '/OurSathi', href: 'https://www.facebook.com/OurSathi/' },
    { icon: '💼', labelEn: 'LinkedIn', labelBn: 'লিংকডইন', handle: '/company/oursathi', href: 'https://www.linkedin.com/company/oursathi/' },
    { icon: '▶️', labelEn: 'YouTube', labelBn: 'ইউটিউব', handle: '@oursathi', href: 'https://www.youtube.com/@oursathi' },
    { icon: '📸', labelEn: 'Instagram', labelBn: 'ইনস্টাগ্রাম', handle: '@oursathi', href: 'https://www.instagram.com/oursathi/' },
    { icon: '🐦', labelEn: 'X (Twitter)', labelBn: 'X (Twitter)', handle: '@oursathi', href: 'https://x.com/oursathi' },
    { icon: '🎵', labelEn: 'TikTok', labelBn: 'টিকটক', handle: '@oursathi', href: 'https://www.tiktok.com/@oursathi' },
    { icon: '📌', labelEn: 'Pinterest', labelBn: 'পিন্টারেস্ট', handle: '/oursathi', href: 'https://www.pinterest.com/oursathi' },
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
            <span className="lang-en">Contact Us</span>
            <span className="lang-bn">যোগাযোগ করুন</span>
          </div>

          <h1
            className="font-display text-[clamp(32px,6vw,72px)] font-light leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              We're here
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                to help.
              </span>
            </span>
            <span className="lang-bn">
              আমরা সাহায্যের
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                জন্য আছি।
              </span>
            </span>
          </h1>

          <p
            className="font-body text-base sm:text-lg leading-[1.8] max-w-[720px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Thank you for being part of Our Sathi. If you need help with any of our services,
              accounts, rides, parcels, partner or shop features, or anything else — reach us through
              any of the channels below.
            </span>
            <span className="lang-bn">
              Our Sathi-এর সাথে যুক্ত থাকার জন্য ধন্যবাদ। আমাদের সেবা, অ্যাকাউন্ট, Ride, Parcel,
              Partner, Shop, Order অথবা অন্য কোনো বিষয়ে সহায়তার প্রয়োজন হলে নিচের মাধ্যমে আমাদের সাথে
              যোগাযোগ করুন।
            </span>
          </p>
        </div>

        {/* EMAIL + PHONE */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          <div
            className="reveal p-6 sm:p-7 border"
            style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
          >
            <div
              className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--gold-deep)' }}
            >
              <span className="lang-en">Support Email</span>
              <span className="lang-bn">সাপোর্ট ইমেইল</span>
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {supportEmails.map((e, i) => (
                <li key={i}>
                  <a
                    href={e.href}
                    className="font-body text-base sm:text-lg break-all transition-colors duration-300"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    {e.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="reveal p-6 sm:p-7 border"
            style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
          >
            <div
              className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-4"
              style={{ color: 'var(--gold-deep)' }}
            >
              <span className="lang-en">Support Numbers</span>
              <span className="lang-bn">সাপোর্ট নম্বর</span>
            </div>
            <ul className="flex flex-col gap-2 list-none">
              {supportNumbers.map((n, i) => (
                <li key={i}>
                  <a
                    href={n.href}
                    className="font-body text-base sm:text-lg transition-colors duration-300"
                    style={{ color: 'var(--text-heading)' }}
                  >
                    <span className="lang-en">{n.en}</span>
                    <span className="lang-bn">{n.bn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="reveal mb-6 sm:mb-8">
          <div
            className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
            <span className="lang-en">Follow Our Sathi</span>
            <span className="lang-bn">আমাদের ফলো করুন</span>
          </div>
          <h2
            className="font-display text-[clamp(22px,3.5vw,40px)] font-light leading-[1.15] tracking-[-0.02em]"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">Stay updated on every channel.</span>
            <span className="lang-bn">প্রতিটি চ্যানেলে আপডেট থাকুন।</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal flex items-center gap-3.5 p-4 border transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <span className="text-xl shrink-0">{s.icon}</span>
              <div className="min-w-0">
                <div
                  className="font-heading text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: 'var(--gold-deep)' }}
                >
                  <span className="lang-en">{s.labelEn}</span>
                  <span className="lang-bn">{s.labelBn}</span>
                </div>
                <div
                  className="font-body text-sm truncate"
                  style={{ color: 'var(--text-heading)' }}
                >
                  {s.handle}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* WEBSITE */}
        <div
          className="reveal p-6 sm:p-8 border text-center mb-12 sm:mb-16"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <div
            className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Website</span>
            <span className="lang-bn">ওয়েবসাইট</span>
          </div>
          <a
            href="https://www.oursathi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl sm:text-2xl font-light transition-colors duration-300"
            style={{ color: 'var(--text-heading)' }}
          >
            www.oursathi.com
          </a>
        </div>

        {/* HELP INFO */}
        <div
          className="reveal p-6 sm:p-8 border mb-12 sm:mb-16"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <h3
            className="font-display text-xl sm:text-2xl font-normal mb-4"
            style={{ color: 'var(--text-heading)' }}
          >
            <span className="lang-en">Need Help?</span>
            <span className="lang-bn">সাহায্য প্রয়োজন?</span>
          </h3>
          <p
            className="font-body text-sm sm:text-base leading-[1.8]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Our support team is here to assist you with questions related to Our Sathi User, Our
              Sathi Partner, Our Sathi Shop, payments, bookings, orders, account issues and other
              platform services.
            </span>
            <span className="lang-bn">
              Our Sathi User, Our Sathi Partner, Our Sathi Shop, পেমেন্ট, বুকিং, অর্ডার, অ্যাকাউন্ট
              সমস্যা এবং অন্যান্য প্ল্যাটফর্ম সেবা সংক্রান্ত যেকোনো প্রশ্নে আমাদের সাপোর্ট টিম আপনাকে
              সহায়তা করতে প্রস্তুত।
            </span>
          </p>
        </div>

        {/* CLOSING */}
        <div className="reveal text-center pt-10 border-t" style={{ borderColor: 'var(--border-medium)' }}>
          <p
            className="font-body text-sm sm:text-base mb-4 leading-[1.8]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              <strong>Do More</strong> with Our Sathi User.
              <br />
              <strong>Earn More</strong> with Our Sathi Partner.
              <br />
              <strong>Grow More</strong> with Our Sathi Shop.
            </span>
            <span className="lang-bn">
              <strong>Do More</strong> with Our Sathi User.
              <br />
              <strong>Earn More</strong> with Our Sathi Partner.
              <br />
              <strong>Grow More</strong> with Our Sathi Shop.
            </span>
          </p>

          <div
            className="font-display text-2xl sm:text-3xl font-light italic mt-8 mb-3"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">One App: Do More, Earn More.</span>
            <span className="lang-bn">One App: Do More, Earn More.</span>
          </div>

          <div
            className="font-heading text-[11px] font-bold tracking-[0.25em] uppercase opacity-70"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">Proudly Made in Bangladesh 🇧🇩</span>
            <span className="lang-bn">গর্বের সাথে বাংলাদেশে তৈরি 🇧🇩</span>
          </div>
        </div>

      </div>
    </div>
  )
}