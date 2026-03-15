import Link from "next/link";
import content from "@/data/portfolio-content.json";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";

export default function PortfolioHome() {
  return (
    <>
      {/* Hero */}
      <HeroSection {...content.hero} />

      {/* About */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={content.about.image}
              alt={content.business.name}
              className="w-full rounded-lg shadow-lg object-cover"
              style={{ aspectRatio: '3/4' }}
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
              {content.about.heading}
            </h2>
            <p className="leading-relaxed opacity-70 text-lg">
              {content.about.text}
            </p>
            <div className="mt-8 flex gap-4">
              <Link href="/demos/portfolio/contact" className="btn-primary inline-block">
                Book a Session
              </Link>
              <Link
                href="/demos/portfolio/work"
                className="inline-block px-6 py-3 rounded font-semibold transition-colors"
                style={{
                  border: '2px solid var(--color-accent)',
                  color: 'var(--color-accent)',
                }}
              >
                View Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Featured Work" subtitle="A selection of recent projects" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.featuredWork.map((work) => (
              <div key={work.title} className="demo-card overflow-hidden group">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    {work.category}
                  </p>
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                    {work.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/demos/portfolio/work" className="btn-primary inline-block">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-lg opacity-60 mb-8">
            {content.business.availability}
          </p>
          <Link href="/demos/portfolio/contact" className="btn-primary inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
