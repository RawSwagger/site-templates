"use client";

import { useState } from "react";
import Link from "next/link";

interface ProductColor {
  name: string;
  hex: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number | null;
  collection: string;
  images: string[];
  sizes: string[];
  colors: ProductColor[];
  description: string;
  featured: boolean;
  new: boolean;
}

export default function ProductDetail({ product }: { product: Product | null }) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) {
    return (
      <section className="py-32 px-4 text-center">
        <h1 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
          Product Not Found
        </h1>
        <p className="opacity-60 mb-8">
          Sorry, we couldn&apos;t find that product.
        </p>
        <Link href="/demos/store/shop" className="btn-primary inline-block">
          Back to Shop
        </Link>
      </section>
    );
  }

  const handleAddToCart = () => {
    alert(`Added to cart!\n\n${product.name}\nSize: ${selectedSize || "Not selected"}\nColor: ${selectedColor || "Not selected"}`);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm opacity-60">
          <Link href="/demos/store" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent)' }}>
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/demos/store/shop" className="hover:opacity-100 transition-opacity" style={{ color: 'var(--color-accent)' }}>
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="overflow-hidden rounded-lg" style={{ backgroundColor: 'var(--color-surface)' }}>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.new && (
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  New
                </span>
              )}
              {product.originalPrice && (
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: '#ef4444' }}
                >
                  Sale
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold" style={{ color: 'var(--color-accent)' }}>
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-lg line-through opacity-40">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="opacity-70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="px-4 py-2 rounded-md text-sm font-semibold transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: selectedSize === size ? 'var(--color-accent)' : 'transparent',
                      color: selectedSize === size ? '#ffffff' : 'var(--color-text)',
                      border: `2px solid ${selectedSize === size ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold uppercase tracking-wider mb-3 opacity-80">
                Color {selectedColor && <span className="normal-case font-normal opacity-60">- {selectedColor}</span>}
              </label>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    title={color.name}
                    className="w-10 h-10 rounded-full transition-all duration-200 cursor-pointer"
                    style={{
                      backgroundColor: color.hex,
                      border: selectedColor === color.name
                        ? '3px solid var(--color-accent)'
                        : '2px solid var(--color-border)',
                      boxShadow: selectedColor === color.name
                        ? '0 0 0 2px var(--color-bg), 0 0 0 4px var(--color-accent)'
                        : 'none',
                    }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-center text-lg py-4"
            >
              Add to Cart
            </button>

            {/* Extra Info */}
            <div className="mt-8 pt-8 space-y-3 text-sm opacity-60" style={{ borderTop: '1px solid var(--color-border)' }}>
              <p>Free shipping on orders over $100</p>
              <p>30-day return policy</p>
              <p>Secure checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
