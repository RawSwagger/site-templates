import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Templates | RawSwagger Web Design",
  description: "Professional website templates at every price point. Pick your tier, get your site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
