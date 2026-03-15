export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="theme-showroom" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
      {children}
    </div>
  );
}
