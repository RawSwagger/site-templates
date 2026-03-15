import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import BackToShowroom from "@/components/BackToShowroom";
import content from "@/data/store-content.json";

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-store" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        {content.announcement}
      </div>

      <DemoHeader businessName={content.business.name} navItems={content.nav} />
      {children}
      <DemoFooter businessName={content.business.name} social={content.social} />
      <BackToShowroom />
    </div>
  );
}
