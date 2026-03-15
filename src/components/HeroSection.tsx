import Link from "next/link";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  backgroundImage: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({ headline, subheadline, backgroundImage, ctaText, ctaLink }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-center"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 whitespace-pre-line text-white leading-tight">
          {headline}
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/80">
          {subheadline}
        </p>
        <Link href={ctaLink} className="btn-primary inline-block">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
