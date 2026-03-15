"use client";

import Link from "next/link";
import { useState } from "react";
import content from "@/data/store-content.json";
import SectionHeading from "@/components/SectionHeading";

export default function ShopPage() {
  const [activeCollection, setActiveCollection] = useState<string>("all");

  const filteredProducts =
    activeCollection === "all"
      ? content.products
      : activeCollection === "new"
        ? content.products.filter((p) => p.new)
        : content.products.filter((p) => p.collection === activeCollection);

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-6 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Shop" subtitle="Browse the full collection" />
        </div>
      </section>

      {/* Collection Filter Tabs */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCollection("all")}
            className="px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: activeCollection === "all" ? 'var(--color-accent)' : 'var(--color-surface)',
              color: activeCollection === "all" ? '#ffffff' : 'var(--color-text)',
              border: `1px solid ${activeCollection === "all" ? 'var(--color-accent)' : 'var(--color-border)'}`,
            }}
          >
            All
          </button>
          {content.collections.map((collection) => (
            <button
              key={collection.slug}
              onClick={() => setActiveCollection(collection.slug)}
              className="px-5 py-2 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: activeCollection === collection.slug ? 'var(--color-accent)' : 'var(--color-surface)',
                color: activeCollection === collection.slug ? '#ffffff' : 'var(--color-text)',
                border: `1px solid ${activeCollection === collection.slug ? 'var(--color-accent)' : 'var(--color-border)'}`,
              }}
            >
              {collection.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/demos/store/product/${product.id}`}
                className="demo-card group block"
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.new && (
                    <span
                      className="absolute top-3 left-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: 'var(--color-accent)' }}
                    >
                      New
                    </span>
                  )}
                  {product.originalPrice && (
                    <span
                      className="absolute top-3 right-3 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                      style={{ backgroundColor: '#ef4444' }}
                    >
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-1" style={{ color: 'var(--color-text)' }}>
                    {product.name}
                  </h3>
                  <p className="text-xs opacity-50 uppercase tracking-wider mb-2">
                    {product.collection}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-bold" style={{ color: 'var(--color-accent)' }}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through opacity-40">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="text-center py-20 opacity-50">
              No products found in this collection.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
