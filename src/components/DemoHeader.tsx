"use client";

import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface DemoHeaderProps {
  businessName: string;
  navItems: NavItem[];
}

export default function DemoHeader({ businessName, navItems }: DemoHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ backgroundColor: 'rgba(var(--color-bg-rgb, 0,0,0), 0.9)', borderBottom: '1px solid var(--color-border)' }}>
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16 px-4">
        <Link href={navItems[0]?.href || "/"} className="text-lg font-bold tracking-wide" style={{ color: 'var(--color-accent)' }}>
          {businessName}
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="demo-nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ color: 'var(--color-text)' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden px-4 py-4" style={{ borderTop: '1px solid var(--color-border)' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block demo-nav-link py-3"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
