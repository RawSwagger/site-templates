import BackToShowroom from "@/components/BackToShowroom";

export default function CardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-card" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {children}
      <BackToShowroom />
    </div>
  );
}
