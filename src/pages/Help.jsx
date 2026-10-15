export default function Help() {
  const coreServices = [
    {
      numEn: '1. Transport & Delivery',
      numBn: '১. Transport & Delivery',
      descEn:
        'Ride sharing, transportation, ambulance services, parcel delivery, and other mobility-related services.',
      descBn:
        'রাইড শেয়ারিং, বাইক ও গাড়ি সেবা, অ্যাম্বুলেন্স, পার্সেল ডেলিভারি এবং অন্যান্য পরিবহনভিত্তিক সেবা।',
    },
    {
      numEn: '2. Professional & On-Demand Services',
      numBn: '২. Professional & On-Demand Services',
      descEn:
        'Connect with electricians, plumbers, carpenters, doctors, nurses, technicians, and many other professional service providers.',
      descBn:
        'ইলেক্ট্রিশিয়ান, প্লাম্বার, কাঠমিস্ত্রি, ডাক্তার, নার্সসহ বিভিন্ন দক্ষ ও পেশাদার সেবা প্রদানকারীর সঙ্গে সহজে যোগাযোগ ও সেবা গ্রহণের সুবিধা।',
    },
    {
      numEn: '3. Shopping & Commerce',
      numBn: '৩. Shopping & Commerce',
      descEn:
        'Discover and order groceries, food, daily necessities, and other products with convenient ordering and delivery options.',
      descBn:
        'রেস্টুরেন্ট, গ্রোসারি, নিত্যপ্রয়োজনীয় পণ্যসহ বিভিন্ন ধরনের পণ্য খোঁজা, অর্ডার এবং ডেলিভারি সুবিধা।',
    },
  ]

  const apps = [
    {
      tagEn: '1. Our Sathi User',
      tagBn: '১. Our Sathi User',
      titleEn: 'For customers',
      titleBn: 'সেবা গ্রহণকারীদের জন্য',
      descEn:
        'The main Super App for customers. Create one account, log in with your mobile number, and access a growing range of everyday services.',
      descBn:
        'সাধারণ ব্যবহারকারীদের জন্য আমাদের মূল Super App। একটি অ্যাকাউন্ট তৈরি করে মোবাইল নম্বর দিয়ে লগইন করার পর একই অ্যাপ থেকে বিভিন্ন ধরনের সেবা গ্রহণ করতে পারবেন।',
      itemsEn: [
        'Book rides',
        'Send parcels',
        'Find professional service providers',
        'Connect with doctors and other providers',
        'Order groceries and daily necessities',
        'Order food from restaurants',
        'Access new services as the ecosystem grows',
      ],
      itemsBn: [
        'রাইড বুক করতে পারবেন',
        'পার্সেল পাঠাতে পারবেন',
        'প্রয়োজনীয় পেশাদার সেবা খুঁজে নিতে পারবেন',
        'ডাক্তার ও অন্যান্য সেবা প্রদানকারীর সঙ্গে যুক্ত হতে পারবেন',
        'গ্রোসারি ও নিত্যপ্রয়োজনীয় পণ্য অর্ডার করতে পারবেন',
        'রেস্টুরেন্ট থেকে খাবার অর্ডার করতে পারবেন',
        'নতুন নতুন ডিজিটাল সেবা ব্যবহার করতে পারবেন',
      ],
      footEn: 'Our goal is to make Our Sathi your everyday digital companion.',
      footBn: 'আমাদের লক্ষ্য—দৈনন্দিন প্রয়োজনের জন্য একাধিক অ্যাপের পরিবর্তে Our Sathi-কে আপনার প্রতিদিনের ডিজিটাল সাথী হিসেবে গড়ে তোলা।',
    },
    {
      tagEn: '2. Our Sathi Partner',
      tagBn: '২. Our Sathi Partner',
      titleEn: 'For service providers & earners',
      titleBn: 'সেবা প্রদানকারী ও উপার্জনকারীদের জন্য',
      descEn:
        'Designed for people who want to provide services and earn. Register, submit documents, and start accepting jobs after verification.',
      descBn:
        'রাইডার, ডেলিভারি পার্টনার, ডাক্তার, নার্স, ইলেক্ট্রিশিয়ান, টেকনিশিয়ান, মিস্ত্রি অথবা অন্য কোনো পেশাগত সেবা প্রদানকারী হলে Our Sathi Partner আপনার জন্য। যাচাই ও অনুমোদনের পর কাজ ও বুকিং গ্রহণ করতে পারবেন।',
      itemsEn: [
        'Work according to your availability',
        'Earn through rides and transportation',
        'Provide parcel and delivery services',
        'Offer professional and on-demand services',
        'Connect with new customers',
        'Manage your services and earnings digitally',
      ],
      itemsBn: [
        'নিজের সুবিধামতো কাজ করুন',
        'রাইড ও পরিবহন সেবা দিয়ে আয় করুন',
        'পার্সেল ও ডেলিভারি সেবা দিন',
        'নিজের দক্ষতা অনুযায়ী পেশাদার সেবা দিন',
        'নতুন গ্রাহকের সঙ্গে যুক্ত হন',
        'আপনার কাজ ও আয় ডিজিটালভাবে পরিচালনা করুন',
      ],
      footEn: 'Your time. Your skills. Your opportunities. Our Sathi.',
      footBn: 'আপনার সময়, আপনার দক্ষতা, আপনার আয়—Our Sathi আপনার সাথে।',
    },
    {
      tagEn: '3. Our Sathi Shop',
      tagBn: '৩. Our Sathi Shop',
      titleEn: 'For businesses',
      titleBn: 'ব্যবসায়ীদের জন্য',
      descEn:
        'Bring your restaurant, grocery, pharmacy, flower shop, fashion shop or any business to the digital platform with Our Sathi Shop.',
      descBn:
        'রেস্টুরেন্ট, মুদি দোকান, গ্রোসারি, ফার্মেসি, ফুলের দোকান, ফ্যাশন শপ অথবা অন্য কোনো ব্যবসা প্রতিষ্ঠান থাকলে Our Sathi Shop ব্যবহার করে ব্যবসাকে ডিজিটাল প্ল্যাটফর্মে নিয়ে আসতে পারেন।',
      itemsEn: [
        'Add products and categories',
        'Receive and manage online orders',
        'Maintain daily sales records',
        'Generate cash reports and receipts',
        'Manage customers, dealers, and staff',
        'Handle home delivery and takeaway orders',
        'Coordinate deliveries',
        'Promote products to Our Sathi customers',
      ],
      itemsBn: [
        'দোকানের ক্যাটাগরি ও পণ্য যোগ করতে পারবেন',
        'অনলাইন অর্ডার গ্রহণ ও পরিচালনা করতে পারবেন',
        'দৈনিক বিক্রির হিসাব রাখতে পারবেন',
        'ক্যাশ রিপোর্ট তৈরি করতে পারবেন',
        'কাস্টমার, ডিলার ও স্টাফ পরিচালনা করতে পারবেন',
        'Home Delivery ও Takeaway Order পরিচালনা করতে পারবেন',
        'ডেলিভারি পার্টনারের মাধ্যমে অর্ডার পৌঁছে দিতে পারবেন',
        'Our Sathi কাস্টমারদের কাছে পণ্য প্রচার করতে পারবেন',
      ],
      footEn:
        'Our Sathi Shop helps transform a traditional business into a connected digital business.',
      footBn:
        'Our Sathi Shop শুধু একটি অনলাইন দোকান নয়—এটি আপনার বর্তমান ব্যবসাকে ডিজিটালভাবে পরিচালনা, প্রচার এবং আরও বেশি গ্রাহকের কাছে পৌঁছে দেওয়ার একটি প্ল্যাটফর্ম।',
    },
  ]

  const contacts = [
    {
      icon: '📧',
      labelEn: 'Support Email',
      labelBn: 'সাপোর্ট ইমেইল',
      valueEn: 'support@oursathi.com',
      valueBn: 'support@oursathi.com',
      href: 'mailto:support@oursathi.com',
    },
    {
      icon: '📞',
      labelEn: 'Support Number',
      labelBn: 'সাপোর্ট নম্বর',
      valueEn: '01921422211',
      valueBn: '০১৯২১৪২২২১১',
      href: 'tel:01921422211',
    },
    {
      icon: '▶️',
      labelEn: 'YouTube Channel',
      labelBn: 'ইউটিউব চ্যানেল',
      valueEn: '@oursathi',
      valueBn: '@oursathi',
      href: 'https://www.youtube.com/@oursathi',
    },
    {
      icon: '📘',
      labelEn: 'Facebook',
      labelBn: 'ফেইসবুক',
      valueEn: '/oursathi',
      valueBn: '/oursathi',
      href: 'https://www.facebook.com/oursathi',
    },
    {
      icon: '💼',
      labelEn: 'LinkedIn',
      labelBn: 'লিংকডইন',
      valueEn: '/company/oursathi',
      valueBn: '/company/oursathi',
      href: 'https://www.linkedin.com/company/oursathi',
    },
    {
      icon: '🐦',
      labelEn: 'Twitter / X',
      labelBn: 'টুইটার / X',
      valueEn: '@sebabajar',
      valueBn: '@sebabajar',
      href: 'https://twitter.com/sebabajar',
    },
    {
      icon: '📸',
      labelEn: 'Instagram',
      labelBn: 'ইনস্টাগ্রাম',
      valueEn: '@sebabajar',
      valueBn: '@sebabajar',
      href: 'https://www.instagram.com/sebabajar/',
    },
    {
      icon: '📌',
      labelEn: 'Pinterest',
      labelBn: 'পিন্টারেস্ট',
      valueEn: '/sebabajar',
      valueBn: '/sebabajar',
      href: 'https://www.pinterest.com/sebabajar',
    },
    {
      icon: '🎵',
      labelEn: 'TikTok',
      labelBn: 'টিকটক',
      valueEn: '@sebabajar',
      valueBn: '@sebabajar',
      href: 'https://www.tiktok.com/@sebabajar',
    },
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
            <span className="lang-en">Help & Support</span>
            <span className="lang-bn">সহায়তা</span>
          </div>

          <h1
            className="font-display text-[clamp(32px,6vw,72px)] font-light leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Assalamu Alaikum,
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                Welcome to Our Sathi.
              </span>
            </span>
            <span className="lang-bn">
              আসসালামু আলাইকুম,
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                Our Sathi-এ স্বাগতম।
              </span>
            </span>
          </h1>

          <p
            className="font-body text-base sm:text-lg leading-[1.8] max-w-[720px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Greetings from Our Sathi. We're an integrated Super App Ecosystem built to make everyday
              life easier, more connected, and more digital for people across Bangladesh — connecting
              customers, service providers, earning partners, and businesses through one platform.
            </span>
            <span className="lang-bn">
              Our Sathi-এর পক্ষ থেকে আপনাকে আন্তরিক শুভেচ্ছা। Our Sathi বাংলাদেশের মানুষের দৈনন্দিন
              প্রয়োজনকে আরও সহজ, ডিজিটাল ও সংযুক্ত করার লক্ষ্যে তৈরি একটি সমন্বিত Super App Ecosystem।
            </span>
          </p>
        </div>

        {/* CORE SERVICES */}
        <HelpSection
          eyebrowEn="Our Core Services"
          eyebrowBn="Our Sathi-এর প্রধান সেবাসমূহ"
          titleEn="What you can do with Our Sathi."
          titleBn="Our Sathi দিয়ে যা যা করা যায়।"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-14 sm:mb-20">
          {coreServices.map((s, i) => (
            <div
              key={i}
              className="reveal p-5 sm:p-6 border"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <div
                className="font-heading text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                style={{ color: 'var(--gold-deep)' }}
              >
                <span className="lang-en">{s.numEn}</span>
                <span className="lang-bn">{s.numBn}</span>
              </div>
              <p className="font-body text-[13.5px] sm:text-sm leading-[1.75]" style={{ color: 'var(--text-soft)' }}>
                <span className="lang-en">{s.descEn}</span>
                <span className="lang-bn">{s.descBn}</span>
              </p>
            </div>
          ))}
        </div>

        {/* APPS */}
        <HelpSection
          eyebrowEn="Three Apps. One Ecosystem."
          eyebrowBn="তিনটি অ্যাপ। একটি Ecosystem।"
          titleEn="Which one is for you?"
          titleBn="কোনটি আপনার জন্য?"
        />

        <div className="flex flex-col gap-5 sm:gap-6 mb-14 sm:mb-20">
          {apps.map((app, i) => (
            <div
              key={i}
              className="reveal p-6 sm:p-8 border relative overflow-hidden"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: 'linear-gradient(90deg, var(--gold-deep), var(--gold))' }}
              />
              <div
                className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-3 inline-block py-1 px-3 border rounded-full"
                style={{ color: 'var(--gold-deep)', borderColor: 'currentColor' }}
              >
                <span className="lang-en">{app.tagEn}</span>
                <span className="lang-bn">{app.tagBn}</span>
              </div>

              <h3
                className="font-display text-xl sm:text-2xl font-normal mb-3 leading-[1.25]"
                style={{ color: 'var(--text-heading)' }}
              >
                <span className="lang-en">{app.titleEn}</span>
                <span className="lang-bn">{app.titleBn}</span>
              </h3>

              <p
                className="font-body text-sm sm:text-[15px] leading-[1.8] mb-5"
                style={{ color: 'var(--text-soft)' }}
              >
                <span className="lang-en">{app.descEn}</span>
                <span className="lang-bn">{app.descBn}</span>
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 list-none">
                {app.itemsEn.map((_, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ background: 'var(--gold-deep)' }}
                    />
                    <span
                      className="font-body text-[13.5px] sm:text-sm leading-[1.7]"
                      style={{ color: 'var(--text-soft)' }}
                    >
                      <span className="lang-en">{app.itemsEn[idx]}</span>
                      <span className="lang-bn">{app.itemsBn[idx]}</span>
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className="font-display text-sm sm:text-base italic font-light pt-4 border-t"
                style={{
                  color: 'var(--gold-deep)',
                  borderColor: 'var(--border-medium)',
                }}
              >
                <span className="lang-en">{app.footEn}</span>
                <span className="lang-bn">{app.footBn}</span>
              </p>
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <HelpSection
          eyebrowEn="Support & Follow Us"
          eyebrowBn="সাপোর্ট ও ফলো করুন"
          titleEn="We're here to help."
          titleBn="আমরা সাহায্যের জন্য আছি।"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-14 sm:mb-20">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="reveal flex items-center gap-3.5 p-4 border transition-all duration-300 hover:-translate-y-1"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <span className="text-xl shrink-0">{c.icon}</span>
              <div className="min-w-0">
                <div
                  className="font-heading text-[10px] font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: 'var(--gold-deep)' }}
                >
                  <span className="lang-en">{c.labelEn}</span>
                  <span className="lang-bn">{c.labelBn}</span>
                </div>
                <div
                  className="font-body text-sm truncate"
                  style={{ color: 'var(--text-heading)' }}
                >
                  <span className="lang-en">{c.valueEn}</span>
                  <span className="lang-bn">{c.valueBn}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className="reveal p-6 sm:p-10 border text-center"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <h3
            className="font-display text-2xl sm:text-3xl font-light mb-4"
            style={{ color: 'var(--text-heading)' }}
          >
            <span className="lang-en">Join the Our Sathi Ecosystem.</span>
            <span className="lang-bn">Our Sathi Ecosystem-এ যুক্ত হোন।</span>
          </h3>
          <p
            className="font-body text-sm sm:text-base leading-[1.8] max-w-[560px] mx-auto mb-6"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Whether you want to get a service, earn by providing a service, or grow your business —
              there's an Our Sathi app for you.
            </span>
            <span className="lang-bn">
              আপনি সেবা নিতে চান, সেবা দিয়ে আয় করতে চান, অথবা ব্যবসা বাড়াতে চান — Our Sathi-তে আপনার
              জন্য একটি অ্যাপ আছে।
            </span>
          </p>
          <a
            href="mailto:support@oursathi.com"
            className="button-4"
            style={{ borderColor: 'var(--gold-deep)', color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Email Support</span>
            <span className="lang-bn">সাপোর্টে ইমেইল করুন</span>
          </a>
        </div>

      </div>
    </div>
  )
}

/* ---------- Helper ---------- */

function HelpSection({ eyebrowEn, eyebrowBn, titleEn, titleBn }) {
  return (
    <div className="reveal mb-6 sm:mb-8">
      <div
        className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4"
        style={{ color: 'var(--gold-deep)' }}
      >
        <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
        <span className="lang-en">{eyebrowEn}</span>
        <span className="lang-bn">{eyebrowBn}</span>
      </div>
      <h2
        className="font-display text-[clamp(22px,3.5vw,40px)] font-light leading-[1.15] tracking-[-0.02em]"
        style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
      >
        <span className="lang-en">{titleEn}</span>
        <span className="lang-bn">{titleBn}</span>
      </h2>
    </div>
  )
}