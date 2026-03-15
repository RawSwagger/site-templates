import content from "@/data/portfolio-content.json";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Let&apos;s Work Together
          </h1>
          <p className="text-lg opacity-60">
            Ready to book a session? Choose a package below or send me a message with your vision.
          </p>
        </div>
      </section>

      {/* Packages / Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Packages" subtitle="Simple pricing, beautiful results" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="demo-card p-8 text-center relative"
                style={{
                  border: i === 1 ? '2px solid var(--color-accent)' : undefined,
                }}
              >
                {i === 1 && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>
                  {pkg.name}
                </h3>
                <p
                  className="text-3xl font-bold mb-6"
                  style={{ color: 'var(--color-accent)' }}
                >
                  {pkg.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="text-sm opacity-70 flex items-center justify-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                        <path d="M13.5 4.5L6 12L2.5 8.5" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Send a Message" subtitle="I typically respond within 24 hours" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Email
                </h4>
                <p className="opacity-70">{content.business.email}</p>
              </div>
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Phone
                </h4>
                <p className="opacity-70">{content.business.phone}</p>
              </div>
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Studio
                </h4>
                <p className="opacity-70">{content.business.address}</p>
              </div>
              <div>
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-1"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Availability
                </h4>
                <p className="opacity-70">{content.business.availability}</p>
              </div>

              {/* Social links */}
              <div className="pt-4">
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Follow Along
                </h4>
                <div className="flex gap-4">
                  {Object.entries(content.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm capitalize opacity-60 hover:opacity-100 transition-opacity"
                      style={{ color: 'var(--color-accent)' }}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm businessName={content.business.name} />
          </div>
        </div>
      </section>
    </>
  );
}
