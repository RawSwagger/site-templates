"use client";

import Link from "next/link";
import content from "@/data/store-content.json";

/* Hardcoded sample cart items - this is a visual-only demo cart */
const cartItems = [
  {
    product: content.products[0],
    size: "L",
    color: content.products[0].colors[0].name,
    qty: 1,
  },
  {
    product: content.products[1],
    size: "M",
    color: content.products[1].colors[0].name,
    qty: 2,
  },
];

const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
const shipping = subtotal >= 100 ? 0 : 12;
const total = subtotal + shipping;

export default function CartPage() {
  const handleCheckout = () => {
    alert("This is a demo - checkout coming soon!");
  };

  const handleRemove = (name: string) => {
    alert(`This is a demo - "${name}" would be removed from cart.`);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: 'var(--color-text)' }}>
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.product.id}
                className="demo-card p-4 flex gap-4"
                style={{ borderRadius: '12px' }}
              >
                {/* Item Image */}
                <div className="w-24 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/demos/store/product/${item.product.id}`}
                    className="font-semibold hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.product.name}
                  </Link>
                  <div className="text-sm opacity-50 mt-1">
                    Size: {item.size} | Color: {item.color}
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Display */}
                    <div className="flex items-center gap-3">
                      <button
                        className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text)',
                        }}
                        onClick={() => alert("This is a demo - quantity would decrease.")}
                      >
                        -
                      </button>
                      <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                      <button
                        className="w-8 h-8 rounded-md flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                        style={{
                          backgroundColor: 'var(--color-surface)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text)',
                        }}
                        onClick={() => alert("This is a demo - quantity would increase.")}
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="font-bold" style={{ color: 'var(--color-accent)' }}>
                      ${item.product.price * item.qty}
                    </span>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(item.product.name)}
                  className="self-start p-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ color: 'var(--color-text)' }}
                  aria-label={`Remove ${item.product.name}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            ))}

            {/* Continue Shopping */}
            <Link
              href="/demos/store/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold mt-4 transition-opacity hover:opacity-80"
              style={{ color: 'var(--color-accent)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Continue Shopping
            </Link>
          </div>

          {/* Cart Summary Sidebar */}
          <div>
            <div
              className="demo-card p-6 sticky top-28"
              style={{ borderRadius: '12px' }}
            >
              <h2 className="text-lg font-bold mb-6" style={{ color: 'var(--color-text)' }}>
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-semibold">${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "FREE" : `$${shipping}`}
                  </span>
                </div>
                {shipping === 0 && (
                  <p className="text-xs py-1 px-2 rounded-md" style={{ backgroundColor: 'rgba(139, 92, 246, 0.1)', color: 'var(--color-accent)' }}>
                    You qualify for free shipping!
                  </p>
                )}
                <div
                  className="flex justify-between pt-4 text-base font-bold"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <span>Total</span>
                  <span style={{ color: 'var(--color-accent)' }}>${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn-primary w-full text-center mt-6"
              >
                Checkout
              </button>

              <p className="text-xs text-center opacity-40 mt-4">
                Taxes calculated at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
