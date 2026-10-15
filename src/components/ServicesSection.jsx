export default function ServicesSection() {
  const serviceFeatures = [
    {
      tag: 'EV',
      titleEn: 'Seamless Transport Services',
      titleBn: 'নির্বিঘ্ন পরিবহন সেবা',
      descEn: 'Affordable, convenient, and reliable transport solutions — helping you get where you need to go with ease.',
      descBn: 'সাশ্রয়ী, সুবিধাজনক এবং নির্ভরযোগ্য পরিবহন সমাধান — আপনাকে সহজেই যেখানে যেতে হবে সেখানে পৌঁছাতে সাহায্য করে।',
    },
    {
      tag: 'EV',
      titleEn: 'On-Demand Services',
      titleBn: 'অন-ডিমান্ড সেবা',
      descEn: 'Access a wide range of services, from handyman assistance to personal care — available at your fingertips.',
      descBn: 'হ্যান্ডিম্যান সহায়তা থেকে ব্যক্তিগত যত্ন পর্যন্ত বিস্তৃত সেবা — আপনার আঙুলের ডগায় উপলব্ধ।',
    },
    {
      tagEn: 'Business',
      tagBn: 'ব্যবসা',
      titleEn: 'Smart Store Management',
      titleBn: 'স্মার্ট স্টোর ম্যানেজমেন্ট',
      descEn: 'Manage orders, deliveries, inventory, and finances seamlessly — all from one powerful business app.',
      descBn: 'অর্ডার, ডেলিভারি, ইনভেন্টরি এবং অর্থ নির্বিঘ্নে পরিচালনা করুন — সব একটি শক্তিশালী ব্যবসায়িক অ্যাপ থেকে।',
    },
  ]

  const servicesList = [
    { num: '01', en: 'Sathi Services', bn: 'সাথী সার্ভিসেস', descEn: 'Home repair, cleaning, beauty and electrical work — verified experts at your doorstep.', descBn: 'গৃহ মেরামত, পরিষ্কার, সৌন্দর্য এবং বৈদ্যুতিক কাজ — যাচাইকৃত বিশেষজ্ঞ আপনার দরজায়।' },
    { num: '02', en: 'Sathi Shop', bn: 'সাথী শপ', descEn: 'Digital tools for retailers to manage stock, sales, dues and reports in one place.', descBn: 'খুচরা বিক্রেতাদের জন্য ডিজিটাল সরঞ্জাম — স্টক, বিক্রয়, বকেয়া এবং রিপোর্ট এক জায়গায় পরিচালনা করুন।' },
    { num: '03', en: 'Sathi Mart', bn: 'সাথী মার্ট', descEn: 'Every shop gets an online storefront with integrated delivery and digital payments.', descBn: 'প্রতিটি দোকান সমন্বিত ডেলিভারি এবং ডিজিটাল পেমেন্ট সহ একটি অনলাইন স্টোরফ্রন্ট পায়।' },
    { num: '04', en: 'Sathi Health', bn: 'সাথী হেলথ', descEn: 'Digital health cards, online doctor consults, and prescription storage for everyone.', descBn: 'ডিজিটাল স্বাস্থ্য কার্ড, অনলাইন ডাক্তার পরামর্শ এবং সবার জন্য প্রেসক্রিপশন সংরক্ষণ।' },
    { num: '05', en: 'Sathi Blood', bn: 'সাথী ব্লাড', descEn: 'A life-saving donor network connecting patients with donors in emergencies.', descBn: 'জরুরি অবস্থায় রোগীদের দাতাদের সাথে সংযুক্ত করে একটি জীবন রক্ষাকারী দাতা নেটওয়ার্ক।' },
    { num: '06', en: 'Sathi Finance', bn: 'সাথী ফাইন্যান্স', descEn: 'Shariah-compliant microloans, EMI plans, and credit profiling to help users grow.', descBn: 'শরিয়া-সম্মত মাইক্রোলোন, EMI প্ল্যান এবং ব্যবহারকারীদের বৃদ্ধিতে সহায়তা করার জন্য ক্রেডিট প্রোফাইলিং।' },
    { num: '07', en: 'Sathi Delivery', bn: 'সাথী ডেলিভারি', descEn: 'Fast parcel delivery, shop-to-customer orders and logistics — electric-first.', descBn: 'দ্রুত পার্সেল ডেলিভারি, দোকান-থেকে-গ্রাহক অর্ডার এবং লজিস্টিকস — বৈদ্যুতিক-প্রথম।' },
    { num: '08', en: 'Sathi Pay', bn: 'সাথী পে', descEn: 'Secure wallet for instant transfers, merchant payments, and cashless transactions.', descBn: 'তাত্ক্ষণিক স্থানান্তর, মার্চেন্ট পেমেন্ট এবং ক্যাশলেস লেনদেনের জন্য নিরাপদ ওয়ালেট।' },
    { num: '09', en: 'Sathi Green', bn: 'সাথী গ্রিন', descEn: 'Powering rides with renewable energy and reducing fuel dependency district by district.', descBn: 'নবায়নযোগ্য শক্তি দিয়ে রাইড চালিত করা এবং জেলা ভিত্তিক জ্বালানি নির্ভরতা হ্রাস।' },
  ]

  return (
    <section
      className="py-16 sm:py-20 md:py-[110px] relative transition-colors duration-500"
      style={{ background: 'var(--sec-black)' }}
      id="services"
    >
      <div className="container mx-auto max-w-[1320px] px-5 sm:px-6">
        <div
          className="reveal inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-5 sm:mb-6"
          style={{ color: 'var(--gold-deep)' }}
        >
          <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
          <span className="lang-en">What We Offer</span>
          <span className="lang-bn">আমরা যা দিই</span>
        </div>

        <h2
          className="reveal font-display text-[clamp(28px,5vw,60px)] font-light leading-[1.08] tracking-[-0.025em] mb-5 sm:mb-6 max-w-[900px]"
          style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
        >
          <span className="lang-en">
            Empowering Growth with
            <br />
            <span className="italic font-light">Financial &amp; Digital Solutions</span>
          </span>
          <span className="lang-bn">
            আর্থিক ও ডিজিটাল সমাধানের
            <br />
            <span className="italic font-light">সাথে প্রবৃদ্ধি</span>
          </span>
        </h2>

        <p
          className="reveal font-body text-base sm:text-lg leading-[1.75] max-w-[720px] mb-10 sm:mb-16"
          style={{ color: 'var(--text-soft)' }}
        >
          <span className="lang-en">
            Our Sathi provides EMI-based financial tools, digital business solutions, and essential
            services to empower service providers, retailers, and consumers.
          </span>
          <span className="lang-bn">
            আওয়ার সাথী EMI-ভিত্তিক আর্থিক সরঞ্জাম, ডিজিটাল ব্যবসায়িক সমাধান এবং প্রয়োজনীয় সেবা
            প্রদান করে সেবা প্রদানকারী, খুচরা বিক্রেতা এবং ভোক্তাদের ক্ষমতায়ন করতে।
          </span>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-20 relative z-[1]">
          {serviceFeatures.map((feature, index) => (
            <div
              key={index}
              className="reveal group p-6 sm:p-8 md:p-9 border relative overflow-hidden transition-all duration-[400ms] hover:-translate-y-1.5"
              style={{ background: 'var(--card-bg)', borderColor: 'var(--border-subtle)' }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                style={{ background: 'var(--gold-deep)' }}
              />
              <div
                className="font-heading text-[10px] font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4 inline-block py-1 px-2.5 border rounded-full"
                style={{ color: 'var(--gold-deep)', borderColor: 'currentColor' }}
              >
                <span className="lang-en">{feature.tag || feature.tagEn}</span>
                <span className="lang-bn">{feature.tag || feature.tagBn}</span>
              </div>
              <h3
                className="font-display text-xl sm:text-2xl font-normal leading-[1.25] mb-3 sm:mb-3.5"
                style={{ color: 'var(--text-heading)' }}
              >
                <span className="lang-en">{feature.titleEn}</span>
                <span className="lang-bn">{feature.titleBn}</span>
              </h3>
              <p className="font-body text-[14px] sm:text-[15px] leading-[1.7]" style={{ color: 'var(--text-soft)' }}>
                <span className="lang-en">{feature.descEn}</span>
                <span className="lang-bn">{feature.descBn}</span>
              </p>
            </div>
          ))}
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 border-t relative z-[1]"
          style={{ borderColor: 'var(--border-subtle)' }}
        >
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="reveal flex items-start gap-4 sm:gap-5 py-6 sm:py-8 px-4 sm:px-7 border-b transition-colors duration-300 hover:bg-[rgba(197,179,150,0.04)]"
              style={{ borderColor: 'var(--border-subtle)' }}
            >
              <div
                className="font-display text-xs sm:text-sm font-medium italic tracking-[0.05em] min-w-[28px] sm:min-w-[36px] pt-1 shrink-0"
                style={{ color: 'var(--gold-deep)' }}
              >
                {service.num}
              </div>
              <div className="min-w-0">
                <h4
                  className="font-display text-lg sm:text-[22px] font-normal tracking-[-0.01em] mb-1.5 sm:mb-2"
                  style={{ color: 'var(--text-heading)' }}
                >
                  <span className="lang-en">{service.en}</span>
                  <span className="lang-bn">{service.bn}</span>
                </h4>
                <p className="font-body text-[13px] sm:text-sm leading-[1.65]" style={{ color: 'var(--text-soft)' }}>
                  <span className="lang-en">{service.descEn}</span>
                  <span className="lang-bn">{service.descBn}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}