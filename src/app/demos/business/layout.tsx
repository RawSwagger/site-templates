import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import BackToShowroom from "@/components/BackToShowroom";
import content from "@/data/business-content.json";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-business" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      <DemoHeader businessName={content.business.name} navItems={content.nav} />
      {children}
      <DemoFooter businessName={content.business.name} social={content.social} />
      <BackToShowroom />
    </div>
  );
}
