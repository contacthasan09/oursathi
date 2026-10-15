export default function About() {
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
            <span className="lang-en">About Our Sathi</span>
            <span className="lang-bn">আমাদের সম্পর্কে</span>
          </div>

          <h1
            className="font-display text-[clamp(32px,6vw,72px)] font-light leading-[1.05] tracking-[-0.03em] mb-6"
            style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
          >
            <span className="lang-en">
              Your Digital Companion
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                for Everyday Life
              </span>
            </span>
            <span className="lang-bn">
              আপনার দৈনন্দিন জীবনের
              <br />
              <span className="italic font-light" style={{ color: 'var(--gold-deep)' }}>
                ডিজিটাল সাথী
              </span>
            </span>
          </h1>

          <p
            className="font-body text-base sm:text-lg leading-[1.8] max-w-[720px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Our Sathi is a Bangladeshi Super App Ecosystem built to make everyday life easier,
              create new earning opportunities, and help local businesses participate in the digital
              economy. We connect customers, drivers, delivery partners, professional service
              providers, shops, businesses and communities through one integrated digital ecosystem.
            </span>
            <span className="lang-bn">
              Our Sathi একটি বাংলাদেশি Super App Ecosystem, যার লক্ষ্য মানুষের দৈনন্দিন জীবনকে আরও সহজ
              করা, নতুন আয়ের সুযোগ তৈরি করা এবং ছোট ও মাঝারি ব্যবসাকে ডিজিটাল অর্থনীতির সঙ্গে যুক্ত করা।
              একটি প্ল্যাটফর্মের মাধ্যমে আমরা সেবা গ্রহণকারী, রাইডার ও সেবা প্রদানকারী, দোকান ও ব্যবসা
              প্রতিষ্ঠান এবং স্থানীয় কমিউনিটিকে একে অপরের সঙ্গে সংযুক্ত করছি।
            </span>
          </p>
        </div>

        {/* DIVIDER */}
        <div className="h-px my-12 sm:my-16" style={{ background: 'var(--border-medium)' }} />

        {/* VISION */}
        <Section
          eyebrowEn="Our Vision"
          eyebrowBn="আমাদের লক্ষ্য"
          titleEn="Accessible, inclusive, sustainable."
          titleBn="সহজ, অন্তর্ভুক্তিমূলক, টেকসই।"
        >
          <p>
            <span className="lang-en">
              Our vision is to build an accessible, inclusive and sustainable digital ecosystem that
              helps people meet their everyday needs while creating opportunities for economic
              advancement. We believe technology should do more than provide convenience — it should
              help people save time, earn more, grow businesses and improve their quality of life.
            </span>
            <span className="lang-bn">
              আমাদের লক্ষ্য হলো এমন একটি সহজ, অন্তর্ভুক্তিমূলক এবং সাশ্রয়ী ডিজিটাল ecosystem গড়ে তোলা,
              যা বাংলাদেশের মানুষের দৈনন্দিন প্রয়োজন পূরণের পাশাপাশি তাদের অর্থনৈতিকভাবে এগিয়ে যাওয়ার
              সুযোগ তৈরি করবে। আমরা বিশ্বাস করি প্রযুক্তি শুধু সুবিধা তৈরির জন্য নয়—প্রযুক্তি মানুষের
              সময় বাঁচাতে, আয় বাড়াতে, ব্যবসা সম্প্রসারণ করতে এবং জীবনযাত্রার মান উন্নত করতে ভূমিকা
              রাখতে পারে।
            </span>
          </p>
        </Section>

        {/* MISSION */}
        <Section
          eyebrowEn="Our Mission"
          eyebrowBn="আমাদের মিশন"
          titleEn="One connected platform."
          titleBn="একটি সমন্বিত প্ল্যাটফর্ম।"
        >
          <p>
            <span className="lang-en">
              Our mission is to bring everyday services and economic opportunities together through
              one connected platform. We aim to enable customers to easily access essential services,
              empower partners to earn through their time and skills, help local businesses digitize
              and grow, expand access to useful technology, and contribute to employment and economic
              opportunities across Bangladesh.
            </span>
            <span className="lang-bn">
              Our Sathi-এর মিশন হলো বাংলাদেশের মানুষের দৈনন্দিন প্রয়োজন এবং অর্থনৈতিক কার্যক্রমকে একটি
              সমন্বিত ডিজিটাল প্ল্যাটফর্মে নিয়ে আসা। আমরা কাজ করছি যেন সাধারণ মানুষ সহজে প্রয়োজনীয় সেবা
              পান, Driver, Delivery Partner ও Service Provider নিজের সময় ও দক্ষতা কাজে লাগিয়ে আয়
              করতে পারেন, এবং ছোট ব্যবসা ও স্থানীয় Shop ডিজিটালভাবে পরিচালিত ও সম্প্রসারিত হতে পারে।
            </span>
          </p>
        </Section>

        {/* THREE APPS */}
        <Section
          eyebrowEn="One Ecosystem. Three Core Apps."
          eyebrowBn="একটি Ecosystem, তিনটি প্রধান অ্যাপ"
          titleEn="Do More. Earn More. Grow More."
          titleBn="Do More. Earn More. Grow More."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
          <AppCard
            titleEn="Our Sathi User"
            titleBn="Our Sathi User"
            tagEn="Do More"
            tagBn="Do More"
            descEn="The primary Super App for customers — access rides, transport, parcel delivery, professional services, shopping, food, groceries, health-related services and much more in one place."
            descBn="গ্রাহকদের জন্য আমাদের মূল Super App। Ride, Transport, Parcel Delivery, Professional Services, Shopping, Food, Grocery, Health-related Services — সব এক জায়গায়।"
          />
          <AppCard
            titleEn="Our Sathi Partner"
            titleBn="Our Sathi Partner"
            tagEn="Earn More"
            tagBn="Earn More"
            descEn="For drivers, riders, delivery partners, electricians, technicians, doctors, nurses and other professionals who want to turn time and skills into earning opportunities."
            descBn="Driver, Rider, Delivery Partner, Electrician, Technician, Doctor, Nurse — যারা নিজের সময় ও দক্ষতাকে আয়ে রূপ দিতে চান তাদের জন্য।"
          />
          <AppCard
            titleEn="Our Sathi Shop"
            titleBn="Our Sathi Shop"
            tagEn="Grow More"
            tagBn="Grow More"
            descEn="A Digital Business Platform for local shops, restaurants, groceries, retailers — showcase products, receive orders, manage sales, staff, dealers and delivery."
            descBn="স্থানীয় Shop, Restaurant, Grocery, Retailer — পণ্য প্রদর্শন, Online Order গ্রহণ, Sales ও Cash Report পরিচালনা এবং Delivery ম্যানেজমেন্ট।"
          />
        </div>

        {/* TRANSPORT & PARCEL */}
        <Section
          eyebrowEn="Transport & Parcel"
          eyebrowBn="Transport ও Parcel"
          titleEn="Simpler movement, simpler delivery."
          titleBn="সহজ যাতায়াত, সহজ ডেলিভারি।"
        >
          <p>
            <span className="lang-en">
              Through Our Sathi's Transport ecosystem we aim to make both people and goods movement
              easier and more accessible. Alongside Ride Service, services like Sathi Parcel let users
              send parcels using the same transport ecosystem.
            </span>
            <span className="lang-bn">
              Our Sathi-এর Transport ecosystem-এর মাধ্যমে আমরা মানুষের যাতায়াত এবং পণ্য পরিবহনকে আরও সহজ
              ও সহজলভ্য করতে চাই। Ride Service-এর পাশাপাশি Sathi Parcel-এর মতো সেবার মাধ্যমে ব্যবহারকারীরা
              একই Transport ecosystem ব্যবহার করে প্রয়োজনীয় Parcel পাঠাতে পারবেন।
            </span>
          </p>
        </Section>

        {/* HEALTH & SOCIAL */}
        <Section
          eyebrowEn="Health & Social Initiatives"
          eyebrowBn="স্বাস্থ্য ও সামাজিক উদ্যোগ"
          titleEn="Beyond commerce."
          titleBn="বাণিজ্যের বাইরেও।"
        >
          <p>
            <span className="lang-en">
              Our Sathi's vision extends beyond commercial services. We aim to use technology to
              support healthcare and community needs through Health Profiles, Digital Health Cards,
              Healthcare Services, Blood Donation Network, Prescription Management and other
              well-being features as the ecosystem develops.
            </span>
            <span className="lang-bn">
              Our Sathi-এর দৃষ্টিভঙ্গি শুধু বাণিজ্যিক সেবার মধ্যে সীমাবদ্ধ নয়। আমরা প্রযুক্তিকে ব্যবহার করে
              স্বাস্থ্য ও সামাজিক প্রয়োজনেও মানুষের পাশে দাঁড়াতে চাই। আমাদের ecosystem-এ পর্যায়ক্রমে
              Health Profile, Digital Health Card, Healthcare Services, Blood Donation Network,
              Prescription Management এবং অন্যান্য জনকল্যাণমূলক সুবিধা অন্তর্ভুক্ত করার লক্ষ্য রয়েছে।
            </span>
          </p>
        </Section>

        {/* EMPOWERMENT */}
        <Section
          eyebrowEn="Economic Empowerment"
          eyebrowBn="কর্মসংস্থান ও অর্থনৈতিক ক্ষমতায়ন"
          titleEn="Bridging the gap."
          titleBn="সেতুবন্ধন তৈরি।"
        >
          <p>
            <span className="lang-en">
              Millions of people have valuable skills but limited access to customers and earning
              opportunities. Many small businesses have yet to fully benefit from digital commerce.
              Our Sathi aims to bridge these gaps — a person can be a customer through Our Sathi User
              and an earning partner through Our Sathi Partner. A local entrepreneur can use Our Sathi
              Shop to bring an existing business into the digital economy. This is the foundation of
              our philosophy: <strong>Do More. Earn More.</strong>
            </span>
            <span className="lang-bn">
              বাংলাদেশে অসংখ্য মানুষ দক্ষতা থাকা সত্ত্বেও নিয়মিত গ্রাহক বা কাজের সুযোগ পান না। একইভাবে
              অনেক ছোট ব্যবসা এখনও Digital Commerce-এর পূর্ণ সুবিধা নিতে পারে না। Our Sathi এই দুই পক্ষের
              মধ্যে প্রযুক্তিগত সেতুবন্ধন তৈরি করতে চায়। একজন মানুষ Our Sathi-তে হতে পারেন Customer, আবার
              Our Sathi Partner ব্যবহার করে হতে পারেন Earning Partner। এটাই আমাদের{' '}
              <strong>Do More, Earn More</strong> দর্শনের মূল ভিত্তি।
            </span>
          </p>
        </Section>

        {/* BUILT FOR BANGLADESH */}
        <Section
          eyebrowEn="Built for Bangladesh"
          eyebrowBn="বাংলাদেশের জন্য তৈরি"
          titleEn="From cities to districts."
          titleBn="শহর থেকে জেলা-উপজেলা।"
        >
          <p>
            <span className="lang-en">
              Our Sathi is being built around the everyday realities and opportunities of Bangladesh.
              Our long-term ambition extends beyond major cities. We want to build an ecosystem capable
              of connecting people, service providers and local businesses with the digital economy
              across cities, districts and communities throughout the country.
            </span>
            <span className="lang-bn">
              Our Sathi বাংলাদেশের বাস্তব প্রয়োজনকে সামনে রেখে তৈরি। আমাদের লক্ষ্য শুধু বড় শহরকেন্দ্রিক
              একটি Super App তৈরি করা নয়। দীর্ঘমেয়াদে আমরা এমন একটি প্ল্যাটফর্ম গড়ে তুলতে চাই যা শহর থেকে
              জেলা-উপজেলা পর্যন্ত মানুষ, Service Provider এবং স্থানীয় ব্যবসাকে ডিজিটাল অর্থনীতির সঙ্গে
              যুক্ত করতে পারে।
            </span>
          </p>
        </Section>

        {/* SDG */}
        <Section
          eyebrowEn="Our Commitment to Sustainable Impact"
          eyebrowBn="টেকসই উন্নয়নের প্রতি আমাদের অঙ্গীকার"
          titleEn="Aligned with the UN SDGs."
          titleBn="জাতিসংঘের SDG-এর সাথে সামঞ্জস্যপূর্ণ।"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
          <SdgCard
            num="SDG 1"
            titleEn="No Poverty"
            titleBn="No Poverty"
            descEn="Contribute to economic empowerment by creating new earning opportunities."
            descBn="আয়ের নতুন সুযোগ তৈরির মাধ্যমে অর্থনৈতিক সক্ষমতা বৃদ্ধিতে ভূমিকা রাখা।"
          />
          <SdgCard
            num="SDG 3"
            titleEn="Good Health & Well-Being"
            titleBn="Good Health & Well-Being"
            descEn="Increase access to healthcare and health-related services through technology."
            descBn="প্রযুক্তির মাধ্যমে স্বাস্থ্যসেবা ও স্বাস্থ্যসংক্রান্ত সুবিধার প্রাপ্যতা বাড়ানো।"
          />
          <SdgCard
            num="SDG 8"
            titleEn="Decent Work & Economic Growth"
            titleBn="Decent Work & Economic Growth"
            descEn="Create new economic opportunities for gig workers, service providers and small businesses."
            descBn="Gig Worker, Service Provider এবং ছোট ব্যবসার জন্য নতুন অর্থনৈতিক সুযোগ তৈরি করা।"
          />
          <SdgCard
            num="SDG 10"
            titleEn="Reduced Inequalities"
            titleBn="Reduced Inequalities"
            descEn="Bring the benefits of technology and the digital economy to wider communities."
            descBn="প্রযুক্তি ও ডিজিটাল অর্থনীতির সুবিধা আরও বিস্তৃত জনগোষ্ঠীর কাছে পৌঁছে দেওয়া।"
          />
        </div>

        {/* OUR FUTURE */}
        <Section
          eyebrowEn="Our Future"
          eyebrowBn="আমাদের ভবিষ্যৎ"
          titleEn="One connected digital ecosystem."
          titleBn="একটি সংযুক্ত Digital Ecosystem।"
        >
          <p>
            <span className="lang-en">
              We imagine a future where a person's everyday needs, earning opportunities and local
              businesses are all part of one connected Digital Ecosystem. Our Sathi's journey is not
              just about building an app — it's about building an inclusive digital ecosystem for
              Bangladesh where technology meets real needs, creates new income opportunities, and
              helps local businesses grow.
            </span>
            <span className="lang-bn">
              আমরা এমন একটি ভবিষ্যৎ কল্পনা করি যেখানে একজন মানুষের দৈনন্দিন প্রয়োজন, কাজের সুযোগ এবং
              স্থানীয় ব্যবসা—সবকিছু একটি সংযুক্ত Digital Ecosystem-এর অংশ হবে। Our Sathi-এর যাত্রা শুধু
              একটি App তৈরির যাত্রা নয় — এটি বাংলাদেশের জন্য একটি inclusive digital ecosystem তৈরির
              প্রচেষ্টা।
            </span>
          </p>
        </Section>

        {/* CTA */}
        <div
          className="reveal mt-16 sm:mt-20 p-6 sm:p-10 border text-center"
          style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <div
            className="font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase mb-4"
            style={{ color: 'var(--gold-deep)' }}
          >
            <span className="lang-en">Join Us</span>
            <span className="lang-bn">আমাদের সাথে এগিয়ে চলুন</span>
          </div>
          <h3
            className="font-display text-2xl sm:text-3xl font-light mb-5"
            style={{ color: 'var(--text-heading)' }}
          >
            <span className="lang-en">One App: Do More, Earn More.</span>
            <span className="lang-bn">One App: Do More, Earn More.</span>
          </h3>
          <p
            className="font-body text-sm sm:text-base leading-[1.8] max-w-[560px] mx-auto mb-6"
            style={{ color: 'var(--text-soft)' }}
          >
            <span className="lang-en">
              Whether you're a customer, driver, delivery partner, professional service provider or
              business owner — there's a place for you in the Our Sathi ecosystem.
            </span>
            <span className="lang-bn">
              আপনি একজন সাধারণ ব্যবহারকারী, Driver, Delivery Partner, Professional Service Provider
              অথবা ব্যবসায়ী—Our Sathi ecosystem-এ আপনার জন্য একটি জায়গা রয়েছে।
            </span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="https://www.oursathi.com/user/login"
              target="_blank"
              rel="noopener noreferrer"
              className="button-4 w-full sm:w-auto justify-center"
              style={{ borderColor: 'var(--gold-deep)', color: 'var(--gold-deep)' }}
            >
              <span className="lang-en">Download App</span>
              <span className="lang-bn">অ্যাপ ডাউনলোড করুন</span>
            </a>
            <a
              href="mailto:support@oursathi.com"
              className="button-4 w-full sm:w-auto justify-center"
            >
              <span className="lang-en">Contact Us</span>
              <span className="lang-bn">যোগাযোগ করুন</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

/* ---------- Helper components ---------- */

function Section({ eyebrowEn, eyebrowBn, titleEn, titleBn, children }) {
  return (
    <div className="reveal mb-12 sm:mb-16">
      <div
        className="inline-flex items-center gap-3 sm:gap-3.5 font-heading text-[10px] sm:text-[11px] font-bold tracking-[0.25em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-5"
        style={{ color: 'var(--gold-deep)' }}
      >
        <span className="w-8 sm:w-10 h-px bg-current opacity-60" />
        <span className="lang-en">{eyebrowEn}</span>
        <span className="lang-bn">{eyebrowBn}</span>
      </div>

      {titleEn && (
        <h2
          className="font-display text-[clamp(22px,3.5vw,40px)] font-light leading-[1.15] tracking-[-0.02em] mb-5"
          style={{ color: 'var(--text-heading)', fontVariationSettings: "'opsz' 144" }}
        >
          <span className="lang-en">{titleEn}</span>
          <span className="lang-bn">{titleBn}</span>
        </h2>
      )}

      {children && (
        <div
          className="font-body text-base sm:text-[17px] leading-[1.85] space-y-4 max-w-[760px]"
          style={{ color: 'var(--text-soft)' }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

function AppCard({ titleEn, titleBn, tagEn, tagBn, descEn, descBn }) {
  return (
    <div
      className="reveal p-6 sm:p-7 border relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
    >
      <div
        className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-3 inline-block py-1 px-3 border rounded-full"
        style={{ color: 'var(--gold-deep)', borderColor: 'currentColor' }}
      >
        <span className="lang-en">{tagEn}</span>
        <span className="lang-bn">{tagBn}</span>
      </div>
      <h4
        className="font-display text-lg sm:text-xl font-normal mb-3 leading-[1.25]"
        style={{ color: 'var(--text-heading)' }}
      >
        <span className="lang-en">{titleEn}</span>
        <span className="lang-bn">{titleBn}</span>
      </h4>
      <p className="font-body text-[13.5px] sm:text-sm leading-[1.7]" style={{ color: 'var(--text-soft)' }}>
        <span className="lang-en">{descEn}</span>
        <span className="lang-bn">{descBn}</span>
      </p>
    </div>
  )
}

function SdgCard({ num, titleEn, titleBn, descEn, descBn }) {
  return (
    <div
      className="reveal p-5 sm:p-6 border"
      style={{ background: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
    >
      <div
        className="font-heading text-[10px] font-bold tracking-[0.25em] uppercase mb-2"
        style={{ color: 'var(--gold-deep)' }}
      >
        {num}
      </div>
      <h4
        className="font-display text-base sm:text-lg font-normal mb-2 leading-[1.3]"
        style={{ color: 'var(--text-heading)' }}
      >
        <span className="lang-en">{titleEn}</span>
        <span className="lang-bn">{titleBn}</span>
      </h4>
      <p className="font-body text-[13px] sm:text-sm leading-[1.7]" style={{ color: 'var(--text-soft)' }}>
        <span className="lang-en">{descEn}</span>
        <span className="lang-bn">{descBn}</span>
      </p>
    </div>
  )
}