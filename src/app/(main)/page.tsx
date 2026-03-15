import Link from "next/link";

const tiers = [
  {
    name: "The Card",
    business: "Cole Cuts — Barbershop",
    description: "A single-page website that works like a digital business card. Perfect for service providers who need an online presence fast.",
    pages: "1 page (single scroll)",
    price: "$300 – $500",
    color: "#D4A843",
    href: "/demos/card",
    features: ["Hero section with CTA", "Services & pricing", "Photo gallery", "Contact info & social links", "Mobile responsive"],
  },
  {
    name: "The Portfolio",
    business: "Maya Rivera — Photographer",
    description: "A clean, multi-page site to showcase your work. Ideal for creatives, freelancers, and professionals building their personal brand.",
    pages: "3 pages",
    price: "$800 – $1,500",
    color: "#2563eb",
    href: "/demos/portfolio",
    features: ["Multi-page navigation", "Portfolio gallery with categories", "About section", "Contact form", "Service packages"],
  },
  {
    name: "The Business",
    business: "Iron Temple Fitness — Gym",
    description: "A full business website with everything you need to look established and attract customers. Built for companies ready to grow.",
    pages: "4 pages",
    price: "$1,500 – $3,000",
    color: "#ea580c",
    href: "/demos/business",
    features: ["Complete business site", "Services & pricing tiers", "Team / About page", "Testimonials", "Contact form with map", "Photo gallery"],
  },
  {
    name: "The Store",
    business: "Street Crown Apparel — Clothing",
    description: "A full e-commerce-style website with product pages, shopping cart, and collection browsing. The complete online store experience.",
    pages: "4+ pages with product routing",
    price: "$3,000 – $5,000",
    color: "#8b5cf6",
    href: "/demos/store",
    features: ["Product catalog with filters", "Individual product pages", "Size & color selectors", "Shopping cart", "Announcement bar", "Collection browsing"],
  },
];

export default function ShowroomPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="py-6 px-4 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold" style={{ color: 'var(--color-accent)' }}>RawSwagger</h1>
            <p className="text-xs opacity-50">Web Design Studio</p>
          </div>
          <a href="mailto:terrence@rawswagger.com" className="btn-primary text-sm">
            Get Started
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 md:py-32 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Website,<br />
            <span style={{ color: 'var(--color-accent)' }}>Your Price Point</span>
          </h2>
          <p className="text-lg md:text-xl opacity-70 mb-8 max-w-2xl mx-auto">
            Pick a tier. See exactly what you get. Every template is fully responsive,
            lightning fast, and ready to customize for your business.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm opacity-40">
            <span>4 tiers</span>
            <span>&middot;</span>
            <span>$300 – $5,000</span>
            <span>&middot;</span>
            <span>Built with Next.js</span>
          </div>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="demo-card p-6 flex flex-col"
              style={{ borderColor: tier.color + '33' }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold" style={{ color: tier.color }}>
                    {tier.name}
                  </h3>
                  <p className="text-sm opacity-50 mt-1">{tier.business}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">{tier.price}</p>
                  <p className="text-xs opacity-40">{tier.pages}</p>
                </div>
              </div>

              <p className="text-sm opacity-70 mb-6">{tier.description}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span style={{ color: tier.color }}>&#10003;</span>
                    <span className="opacity-70">{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className="btn-primary text-center block"
                style={{ backgroundColor: tier.color }}
              >
                View Demo
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center" style={{ borderTop: '1px solid var(--color-border)' }}>
        <h3 className="text-2xl font-bold mb-4">Ready to get your site built?</h3>
        <p className="opacity-60 mb-6 max-w-lg mx-auto">
          Pick a template, tell us about your business, and we handle the rest.
          Most sites delivered in 1-2 weeks.
        </p>
        <a href="mailto:terrence@rawswagger.com" className="btn-primary inline-block">
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 text-center text-sm opacity-40" style={{ borderTop: '1px solid var(--color-border)' }}>
        &copy; {new Date().getFullYear()} RawSwagger Web Design. All rights reserved.
      </footer>
    </div>
  );
}
