interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="section-heading text-2xl md:text-3xl font-bold uppercase tracking-wide" style={{ color: 'var(--color-text)' }}>
        <span>{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-base opacity-60" style={{ color: 'var(--color-text)' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
