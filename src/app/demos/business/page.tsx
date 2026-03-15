import Link from "next/link";
import content from "@/data/business-content.json";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";

const serviceIcons: Record<string, React.ReactNode> = {
  dumbbell: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11" />
      <rect x="2" y="4" width="4.5" height="16" rx="1" />
      <rect x="17.5" y="4" width="4.5" height="16" rx="1" />
      <rect x="4.5" y="8" width="2" height="8" rx="0.5" />
      <rect x="17.5" y="8" width="2" height="8" rx="0.5" />
      <line x1="6.5" y1="12" x2="17.5" y2="12" />
    </svg>
  ),
  users: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  apple: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c1.5 0 3 .5 3 2 0 1-1 2-2 2" />
      <path d="M18 8c2 1 4 4 3 8s-3 6-5 7c-1 .5-2 .5-3 0-.5-.3-1-.5-1.5-.5s-1 .2-1.5.5c-1 .5-2 .5-3 0-2-1-4.5-3-5-7s1-7 3-8c1.5-.8 3-.5 4 .5.5.5 1.5.5 2 0 1-1 2.5-1.3 4-.5z" />
    </svg>
  ),
  key: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  ),
};

export default function BusinessHome() {
  return (
    <>
      {/* Hero */}
      <HeroSection {...content.hero} />

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Services" subtitle="Everything you need to reach your goals" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.services.map((service) => (
              <div key={service.name} className="demo-card p-6 text-center">
                <div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)', color: 'var(--color-accent)' }}
                >
                  {serviceIcons[service.icon] || serviceIcons.dumbbell}
                </div>
                <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--color-text)' }}>
                  {service.name}
                </h3>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
                  {service.price}
                </p>
                <p className="text-sm opacity-60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/demos/business/services" className="btn-outline inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Membership Plans" subtitle="Choose the plan that fits your lifestyle" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.memberships.map((tier) => (
              <div
                key={tier.name}
                className="demo-card p-8 text-center relative"
                style={{
                  border: tier.popular ? '2px solid var(--color-accent)' : undefined,
                }}
              >
                {tier.popular && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                  {tier.name}
                </h3>
                <p className="mb-1">
                  <span className="text-4xl font-bold" style={{ color: 'var(--color-accent)' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm opacity-50">{tier.period}</span>
                </p>
                <ul className="space-y-3 mt-6 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="text-sm opacity-70 flex items-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demos/business/contact"
                  className={tier.popular ? "btn-primary inline-block w-full" : "btn-outline inline-block w-full"}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="What Members Say" subtitle="Real results from real people" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.testimonials.map((testimonial) => (
              <div key={testimonial.name} className="demo-card p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" style={{ fill: 'var(--color-accent)' }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-relaxed opacity-80 mb-6 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <p className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Our Facility" subtitle="State-of-the-art equipment and spaces" />
          <Gallery images={content.gallery} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Ready to Transform?
          </h2>
          <p className="text-lg opacity-60 mb-8">
            Your first session is on us. Come see why Houston trains at Iron Temple.
          </p>
          <Link href="/demos/business/contact" className="btn-primary inline-block">
            Start Your Free Trial
          </Link>
        </div>
      </section>
    </>
  );
}
