import content from "@/data/portfolio-content.json";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";

export default function WorkPage() {
  const allImages = content.featuredWork.map((w) => w.image);

  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            My Work
          </h1>
          <p className="text-lg opacity-60">
            Browse through my portfolio of portraits, lifestyle sessions, brand shoots, and events.
          </p>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Categories" subtitle="Explore by type of shoot" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.categories.map((cat) => (
              <div key={cat.slug} className="demo-card overflow-hidden group cursor-pointer">
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/2' }}>
                  <img
                    src={cat.coverImage}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    }}
                  >
                    <div>
                      <h3 className="font-bold text-lg text-white">{cat.name}</h3>
                      <p className="text-sm text-white/70">{cat.count} photos</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="All Work" subtitle="Click any image to view full size" />
          <Gallery images={allImages} columns={3} />
        </div>
      </section>
    </>
  );
}
