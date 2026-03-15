import content from "@/data/business-content.json";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Get In Touch
          </h1>
          <p className="text-lg opacity-60">
            Ready to start your fitness journey? Reach out and we&apos;ll get you set up.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Business Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                  Visit Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm uppercase tracking-wider mb-1"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        Address
                      </h4>
                      <p className="opacity-70">{content.business.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
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
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm uppercase tracking-wider mb-1"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        Email
                      </h4>
                      <p className="opacity-70">{content.business.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)' }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div>
                      <h4
                        className="font-bold text-sm uppercase tracking-wider mb-1"
                        style={{ color: 'var(--color-accent)' }}
                      >
                        Hours
                      </h4>
                      <p className="opacity-70">{content.business.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-2">
                <h4
                  className="font-bold text-sm uppercase tracking-wider mb-3"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Follow Us
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
            <div>
              <SectionHeading title="Send a Message" subtitle="We typically respond within a few hours" />
              <ContactForm businessName={content.business.name} />
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <div
            className="w-full rounded-lg flex items-center justify-center"
            style={{
              height: '400px',
              backgroundColor: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
            }}
          >
            <div className="text-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-accent)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto mb-3"
                style={{ opacity: 0.5 }}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-sm opacity-40 font-medium">Map Placeholder</p>
              <p className="text-xs opacity-30 mt-1">{content.business.address}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
