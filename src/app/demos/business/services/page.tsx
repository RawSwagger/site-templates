import Link from "next/link";
import content from "@/data/business-content.json";
import SectionHeading from "@/components/SectionHeading";

const serviceImages: Record<string, string> = {
  dumbbell: "https://placehold.co/600x400/1a1a1a/ea580c?text=Personal+Training",
  users: "https://placehold.co/600x400/1a1a1a/ea580c?text=Group+Classes",
  apple: "https://placehold.co/600x400/1a1a1a/ea580c?text=Nutrition+Coaching",
  key: "https://placehold.co/600x400/1a1a1a/ea580c?text=Open+Gym",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Our Services
          </h1>
          <p className="text-lg opacity-60">
            From personal training to open gym access, we have everything you need to hit your goals.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          {content.services.map((service, i) => (
            <div
              key={service.name}
              className="demo-card overflow-hidden grid grid-cols-1 md:grid-cols-2"
              style={{ direction: i % 2 === 1 ? 'rtl' : 'ltr' }}
            >
              <div style={{ direction: 'ltr' }}>
                <img
                  src={serviceImages[service.icon] || serviceImages.dumbbell}
                  alt={service.name}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '3/2' }}
                  loading="lazy"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--color-accent)' }}>
                  {service.price}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
                  {service.name}
                </h2>
                <p className="opacity-70 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div>
                  <Link href="/demos/business/contact" className="btn-primary inline-block">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Comparison */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Compare Memberships" subtitle="Find the right plan for you" />

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
              <thead>
                <tr>
                  <th className="p-4 text-sm uppercase tracking-wider opacity-50 font-semibold" style={{ borderBottom: '1px solid var(--color-border)' }}>
                    Feature
                  </th>
                  {content.memberships.map((tier) => (
                    <th
                      key={tier.name}
                      className="p-4 text-center"
                      style={{
                        borderBottom: '1px solid var(--color-border)',
                        color: tier.popular ? 'var(--color-accent)' : 'var(--color-text)',
                      }}
                    >
                      <span className="text-lg font-bold">{tier.name}</span>
                      <br />
                      <span className="text-2xl font-bold">{tier.price}</span>
                      <span className="text-sm opacity-50">{tier.period}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Gather all unique features across all tiers */}
                {(() => {
                  const allFeatures = Array.from(
                    new Set(content.memberships.flatMap((t) => t.features))
                  ).filter((f) => !f.startsWith("Everything in"));
                  return allFeatures.map((feature) => (
                    <tr key={feature}>
                      <td className="p-4 text-sm opacity-80" style={{ borderBottom: '1px solid var(--color-border)' }}>
                        {feature}
                      </td>
                      {content.memberships.map((tier) => {
                        const tierIndex = content.memberships.indexOf(tier);
                        // A tier has a feature if it's in its list, or if it inherits from a lower tier
                        const hasFeature = (() => {
                          for (let idx = tierIndex; idx >= 0; idx--) {
                            if (content.memberships[idx].features.includes(feature)) return true;
                            // check if this tier inherits from previous
                            const inherits = content.memberships[idx].features.some((f) =>
                              f.startsWith("Everything in")
                            );
                            if (!inherits) break;
                          }
                          return false;
                        })();
                        return (
                          <td
                            key={tier.name}
                            className="p-4 text-center"
                            style={{ borderBottom: '1px solid var(--color-border)' }}
                          >
                            {hasFeature ? (
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mx-auto">
                                <path d="M16.5 5.5L7.5 14.5L3.5 10.5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            ) : (
                              <span className="opacity-30">&mdash;</span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden grid grid-cols-1 gap-6">
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
                <p className="mb-4">
                  <span className="text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                    {tier.price}
                  </span>
                  <span className="text-sm opacity-50">{tier.period}</span>
                </p>
                <ul className="space-y-3 mb-6 text-left">
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
                  Join Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Not Sure Which Plan?
          </h2>
          <p className="text-lg opacity-60 mb-8">
            Come in for a free tour and trial session. We&apos;ll help you find the perfect fit.
          </p>
          <Link href="/demos/business/contact" className="btn-primary inline-block">
            Book a Free Tour
          </Link>
        </div>
      </section>
    </>
  );
}
