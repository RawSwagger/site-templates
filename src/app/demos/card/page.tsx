import content from "@/data/card-content.json";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import DemoFooter from "@/components/DemoFooter";

function ServiceCard({ name, price, description }: { name: string; price: string; description: string }) {
  return (
    <div className="demo-card p-6 text-center">
      <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--color-accent)' }}>{name}</h3>
      <p className="text-2xl font-bold mb-2">{price}</p>
      <p className="text-sm opacity-60">{description}</p>
    </div>
  );
}

function SocialBar() {
  const links = Object.entries(content.social);
  return (
    <div className="flex items-center justify-center gap-6 py-6">
      {links.map(([platform, url]) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: 'var(--color-accent)' }}
        >
          {platform}
        </a>
      ))}
    </div>
  );
}

export default function CardPage() {
  return (
    <>
      {/* Simple top bar */}
      <header className="py-4 px-4 text-center" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <h1 className="text-xl font-bold tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>
          {content.business.name}
        </h1>
        <p className="text-xs opacity-50 mt-1">{content.business.tagline}</p>
      </header>

      {/* Hero */}
      <HeroSection {...content.hero} />

      {/* About */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeading title="About Us" />
          <p className="opacity-70 leading-relaxed">{content.business.description}</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Services" subtitle="Premium grooming at fair prices" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Our Work" subtitle="Fresh cuts, every time" />
          <Gallery images={content.gallery} columns={3} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="What They Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.testimonials.map((t) => (
              <div key={t.name} className="demo-card p-6">
                <p className="text-sm opacity-70 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="font-bold text-sm" style={{ color: 'var(--color-accent)' }}>{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Get In Touch" subtitle="Book your appointment today" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>Address</h4>
                <p className="text-sm opacity-70">{content.business.address}</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>Hours</h4>
                <p className="text-sm opacity-70">{content.business.hours}</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>Phone</h4>
                <p className="text-sm opacity-70">{content.business.phone}</p>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1" style={{ color: 'var(--color-accent)' }}>Email</h4>
                <p className="text-sm opacity-70">{content.business.email}</p>
              </div>
            </div>
            <ContactForm businessName={content.business.name} />
          </div>
        </div>
      </section>

      {/* Social */}
      <SocialBar />

      {/* Footer */}
      <DemoFooter businessName={content.business.name} social={content.social} />
    </>
  );
}
