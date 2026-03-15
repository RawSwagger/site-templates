import Link from "next/link";
import content from "@/data/store-content.json";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";

const featuredProducts = content.products.filter((p) => p.featured);
const newArrivals = content.products.filter((p) => p.new);

export default function StoreHome() {
  return (
    <>
      {/* Hero */}
      <HeroSection {...content.hero} />

      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Featured" subtitle="Our top picks this season" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/demos/store/product/${product.id}`}
                className="demo-card group block"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.new && (
                    <span
                      className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      New
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold" style={{ color: 'var(--color-accent)' }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through opacity-40">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              {content.featuredBanner.headline}
            </h2>
            <p className="text-lg opacity-60 mb-8">
              {content.featuredBanner.subheadline}
            </p>
            <Link href={content.featuredBanner.ctaLink} className="btn-primary inline-block">
              {content.featuredBanner.ctaText}
            </Link>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={content.featuredBanner.image}
              alt={content.featuredBanner.headline}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="New Arrivals" subtitle="Just dropped - get them before they're gone" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newArrivals.map((product) => (
              <Link
                key={product.id}
                href={`/demos/store/product/${product.id}`}
                className="demo-card group block"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: 'var(--color-accent)' }}
                  >
                    New
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                    {product.name}
                  </h3>
                  <span className="font-bold" style={{ color: 'var(--color-accent)' }}>
                    ${product.price}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Crown Yourself
          </h2>
          <p className="text-lg opacity-60 mb-8">
            {content.business.description}
          </p>
          <Link href="/demos/store/shop" className="btn-primary inline-block">
            Shop All Products
          </Link>
        </div>
      </section>
    </>
  );
}
