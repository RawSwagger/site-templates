#!/bin/bash

# ============================================================
# new-client.sh — Create a new client project from a template
#
# Usage:
#   ./scripts/new-client.sh <tier> <client-name>
#
# Example:
#   ./scripts/new-client.sh card "joes-barbershop"
#   ./scripts/new-client.sh portfolio "sarah-photo"
#   ./scripts/new-client.sh business "peak-fitness"
#   ./scripts/new-client.sh store "fresh-threads"
#
# This creates a standalone Next.js project at:
#   ~/clients/<client-name>/
#
# The new project contains only the selected tier's pages,
# with the content JSON ready to customize.
# ============================================================

set -e

# Colors for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Validate arguments
if [ $# -lt 2 ]; then
  echo -e "${RED}Error: Missing arguments${NC}"
  echo ""
  echo "Usage: ./scripts/new-client.sh <tier> <client-name>"
  echo ""
  echo "Tiers: card, portfolio, business, store"
  echo ""
  echo "Example: ./scripts/new-client.sh card \"joes-barbershop\""
  exit 1
fi

TIER="$1"
CLIENT_NAME="$2"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TEMPLATE_DIR="$(dirname "$SCRIPT_DIR")"
CLIENT_DIR="$HOME/clients/$CLIENT_NAME"

# Validate tier
if [[ ! "$TIER" =~ ^(card|portfolio|business|store)$ ]]; then
  echo -e "${RED}Error: Invalid tier '$TIER'${NC}"
  echo "Valid tiers: card, portfolio, business, store"
  exit 1
fi

# Check if client dir already exists
if [ -d "$CLIENT_DIR" ]; then
  echo -e "${RED}Error: Directory already exists: $CLIENT_DIR${NC}"
  echo "Pick a different name or remove the existing directory."
  exit 1
fi

echo -e "${BLUE}Creating new '$TIER' site for '$CLIENT_NAME'...${NC}"
echo ""

# Create client directory
mkdir -p "$CLIENT_DIR/src/app" "$CLIENT_DIR/src/components" "$CLIENT_DIR/src/data"

# Copy config files
echo -e "${YELLOW}[1/5]${NC} Copying config files..."
cp "$TEMPLATE_DIR/package.json" "$CLIENT_DIR/package.json"
cp "$TEMPLATE_DIR/tsconfig.json" "$CLIENT_DIR/tsconfig.json"
cp "$TEMPLATE_DIR/next.config.ts" "$CLIENT_DIR/next.config.ts"
cp "$TEMPLATE_DIR/postcss.config.mjs" "$CLIENT_DIR/postcss.config.mjs"
cp "$TEMPLATE_DIR/eslint.config.mjs" "$CLIENT_DIR/eslint.config.mjs"

# Update package.json name
sed -i '' "s/\"site-templates\"/\"$CLIENT_NAME\"/" "$CLIENT_DIR/package.json"

# Copy shared components
echo -e "${YELLOW}[2/5]${NC} Copying components..."
cp "$TEMPLATE_DIR/src/components/"*.tsx "$CLIENT_DIR/src/components/"

# Copy content JSON (this is what the client customizes)
echo -e "${YELLOW}[3/5]${NC} Copying content data..."
cp "$TEMPLATE_DIR/src/data/${TIER}-content.json" "$CLIENT_DIR/src/data/content.json"

# Build the globals.css with only the needed theme
echo -e "${YELLOW}[4/5]${NC} Building theme stylesheet..."

# Get the theme class name
THEME_CLASS="theme-${TIER}"

# Copy globals.css — we keep all shared styles and the specific theme
cp "$TEMPLATE_DIR/src/app/globals.css" "$CLIENT_DIR/src/app/globals.css"

# Copy the tier's pages into the root app directory (not under /demos/)
echo -e "${YELLOW}[5/5]${NC} Copying page files..."

case "$TIER" in
  card)
    # Single page — copy demo page as the root page
    # Create a simple layout that applies the theme
    cat > "$CLIENT_DIR/src/app/layout.tsx" << 'LAYOUT'
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLIENT_TITLE",
  description: "CLIENT_DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="theme-card" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
        {children}
      </body>
    </html>
  );
}
LAYOUT
    # Copy the page, fixing the content import path
    sed 's|@/data/card-content.json|@/data/content.json|g' \
      "$TEMPLATE_DIR/src/app/demos/card/page.tsx" > "$CLIENT_DIR/src/app/page.tsx"
    ;;

  portfolio)
    cat > "$CLIENT_DIR/src/app/layout.tsx" << 'LAYOUT'
import type { Metadata } from "next";
import "./globals.css";
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "CLIENT_TITLE",
  description: "CLIENT_DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en">
      <body className="theme-portfolio" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
        <DemoHeader businessName={content.business.name} navItems={navItems} />
        <main>{children}</main>
        <DemoFooter businessName={content.business.name} social={content.social} />
      </body>
    </html>
  );
}
LAYOUT
    # Copy pages, fixing imports and internal links
    for page in page.tsx; do
      sed -e 's|@/data/portfolio-content.json|@/data/content.json|g' \
          -e 's|/demos/portfolio/work|/work|g' \
          -e 's|/demos/portfolio/contact|/contact|g' \
          -e 's|/demos/portfolio|/|g' \
        "$TEMPLATE_DIR/src/app/demos/portfolio/$page" > "$CLIENT_DIR/src/app/$page"
    done
    mkdir -p "$CLIENT_DIR/src/app/work" "$CLIENT_DIR/src/app/contact"
    sed -e 's|@/data/portfolio-content.json|@/data/content.json|g' \
        -e 's|/demos/portfolio/work|/work|g' \
        -e 's|/demos/portfolio/contact|/contact|g' \
        -e 's|/demos/portfolio|/|g' \
      "$TEMPLATE_DIR/src/app/demos/portfolio/work/page.tsx" > "$CLIENT_DIR/src/app/work/page.tsx"
    sed -e 's|@/data/portfolio-content.json|@/data/content.json|g' \
        -e 's|/demos/portfolio/work|/work|g' \
        -e 's|/demos/portfolio/contact|/contact|g' \
        -e 's|/demos/portfolio|/|g' \
      "$TEMPLATE_DIR/src/app/demos/portfolio/contact/page.tsx" > "$CLIENT_DIR/src/app/contact/page.tsx"
    ;;

  business)
    cat > "$CLIENT_DIR/src/app/layout.tsx" << 'LAYOUT'
import type { Metadata } from "next";
import "./globals.css";
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "CLIENT_TITLE",
  description: "CLIENT_DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en">
      <body className="theme-business" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
        <DemoHeader businessName={content.business.name} navItems={navItems} />
        <main>{children}</main>
        <DemoFooter businessName={content.business.name} social={content.social} />
      </body>
    </html>
  );
}
LAYOUT
    for page in page.tsx; do
      sed -e 's|@/data/business-content.json|@/data/content.json|g' \
          -e 's|/demos/business/services|/services|g' \
          -e 's|/demos/business/about|/about|g' \
          -e 's|/demos/business/contact|/contact|g' \
          -e 's|/demos/business|/|g' \
        "$TEMPLATE_DIR/src/app/demos/business/$page" > "$CLIENT_DIR/src/app/$page"
    done
    for subpage in services about contact; do
      mkdir -p "$CLIENT_DIR/src/app/$subpage"
      sed -e 's|@/data/business-content.json|@/data/content.json|g' \
          -e 's|/demos/business/services|/services|g' \
          -e 's|/demos/business/about|/about|g' \
          -e 's|/demos/business/contact|/contact|g' \
          -e 's|/demos/business|/|g' \
        "$TEMPLATE_DIR/src/app/demos/business/$subpage/page.tsx" > "$CLIENT_DIR/src/app/$subpage/page.tsx"
    done
    ;;

  store)
    cat > "$CLIENT_DIR/src/app/layout.tsx" << 'LAYOUT'
import type { Metadata } from "next";
import "./globals.css";
import DemoHeader from "@/components/DemoHeader";
import DemoFooter from "@/components/DemoFooter";
import content from "@/data/content.json";

export const metadata: Metadata = {
  title: "CLIENT_TITLE",
  description: "CLIENT_DESCRIPTION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Cart", href: "/cart" },
  ];

  return (
    <html lang="en">
      <body className="theme-store" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)', minHeight: '100vh' }}>
        <div className="announcement-bar">{content.announcement}</div>
        <DemoHeader businessName={content.business.name} navItems={navItems} />
        <main>{children}</main>
        <DemoFooter businessName={content.business.name} social={content.social} />
      </body>
    </html>
  );
}
LAYOUT
    # Copy main pages
    for page in page.tsx; do
      sed -e 's|@/data/store-content.json|@/data/content.json|g' \
          -e 's|/demos/store/shop|/shop|g' \
          -e 's|/demos/store/cart|/cart|g' \
          -e 's|/demos/store/product/|/product/|g' \
          -e 's|/demos/store|/|g' \
        "$TEMPLATE_DIR/src/app/demos/store/$page" > "$CLIENT_DIR/src/app/$page"
    done
    for subpage in shop cart; do
      mkdir -p "$CLIENT_DIR/src/app/$subpage"
      sed -e 's|@/data/store-content.json|@/data/content.json|g' \
          -e 's|/demos/store/shop|/shop|g' \
          -e 's|/demos/store/cart|/cart|g' \
          -e 's|/demos/store/product/|/product/|g' \
          -e 's|/demos/store|/|g' \
        "$TEMPLATE_DIR/src/app/demos/store/$subpage/page.tsx" > "$CLIENT_DIR/src/app/$subpage/page.tsx"
    done
    # Product pages
    mkdir -p "$CLIENT_DIR/src/app/product/[id]"
    sed -e 's|@/data/store-content.json|@/data/content.json|g' \
        -e 's|/demos/store/shop|/shop|g' \
        -e 's|/demos/store/cart|/cart|g' \
        -e 's|/demos/store/product/|/product/|g' \
        -e 's|/demos/store|/|g' \
      "$TEMPLATE_DIR/src/app/demos/store/product/[id]/page.tsx" > "$CLIENT_DIR/src/app/product/[id]/page.tsx"
    # Copy ProductDetail component if it exists
    if [ -f "$TEMPLATE_DIR/src/app/demos/store/product/[id]/ProductDetail.tsx" ]; then
      sed -e 's|@/data/store-content.json|@/data/content.json|g' \
          -e 's|/demos/store/shop|/shop|g' \
          -e 's|/demos/store/cart|/cart|g' \
          -e 's|/demos/store/product/|/product/|g' \
          -e 's|/demos/store|/|g' \
        "$TEMPLATE_DIR/src/app/demos/store/product/[id]/ProductDetail.tsx" > "$CLIENT_DIR/src/app/product/[id]/ProductDetail.tsx"
    fi
    ;;
esac

# Remove BackToShowroom references from the copied files
# (client sites don't need a "back to templates" link)
find "$CLIENT_DIR/src/app" -name "*.tsx" -exec sed -i '' \
  -e '/BackToShowroom/d' \
  -e '/back-badge/d' \
  {} \;

echo ""
echo -e "${GREEN}✅ Client project created successfully!${NC}"
echo ""
echo -e "  📁 Location: ${BLUE}$CLIENT_DIR${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. cd $CLIENT_DIR"
echo "  2. npm install"
echo "  3. Edit src/data/content.json with the client's info"
echo "  4. npm run dev  (preview at localhost:3000)"
echo "  5. Push to GitHub & deploy on Vercel"
echo ""
echo -e "${GREEN}Happy building! 🚀${NC}"
