import content from "@/data/business-content.json";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            About Us
          </h1>
          <p className="text-lg opacity-60">
            The story behind Houston&apos;s most dedicated training facility.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://placehold.co/600x500/1a1a1a/ea580c?text=Our+Story"
              alt="Iron Temple Fitness facility"
              className="w-full rounded-lg object-cover"
              style={{ aspectRatio: '6/5' }}
            />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: 'var(--color-accent)' }}>
              Our Story
            </h2>
            <p className="leading-relaxed opacity-70 text-lg">
              {content.about.story}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.about.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
                  {stat.number}
                </p>
                <p className="text-sm uppercase tracking-wider opacity-60 font-semibold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Our Values" subtitle="What drives everything we do" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.about.values.map((value, i) => (
              <div key={value.title} className="demo-card p-8">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-lg font-bold"
                  style={{ backgroundColor: 'rgba(234, 88, 12, 0.15)', color: 'var(--color-accent)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--color-text)' }}>
                  {value.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeading title="Meet the Team" subtitle="The people behind your transformation" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.team.map((member) => (
              <div key={member.name} className="demo-card overflow-hidden text-center">
                <div className="relative overflow-hidden" style={{ aspectRatio: '1' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg" style={{ color: 'var(--color-text)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: 'var(--color-accent)' }}>
                    {member.role}
                  </p>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
