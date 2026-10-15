export default function Blog() {
  return (
    <section
      className="pt-40 pb-24 min-h-screen transition-colors duration-500"
      style={{ background: 'var(--bg-primary)', color: 'var(--text-heading)' }}
    >
      <div className="container mx-auto max-w-[1320px] px-6">
        <h1 className="font-display text-[clamp(48px,7vw,88px)] font-light mb-6">
          <span className="lang-en">Blog</span>
          <span className="lang-bn">ব্লগ</span>
        </h1>
        <p className="font-body text-lg max-w-[720px]" style={{ color: 'var(--text-soft)' }}>
          <span className="lang-en">Coming soon.</span>
          <span className="lang-bn">শীঘ্রই আসছে।</span>
        </p>
      </div>
    </section>
  )
}