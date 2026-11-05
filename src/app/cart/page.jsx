"use client";

import { useContext } from "react";
import Link from "next/link";
import CartContext from "../context/CartContext";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price,
    0,
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B16] px-5 py-16 text-white sm:px-8 lg:px-12">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Your Selection
          </span>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Shopping Cart<span className="text-violet-400">.</span>
          </h1>

          <p className="mt-4 text-sm leading-7 text-slate-500">
            Review your selected products and see your order total.
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <div className="flex min-h-[450px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-white/10 bg-[#111728]/60 px-6 text-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/10 bg-violet-500/10 text-5xl shadow-[0_0_60px_rgba(139,92,246,0.1)]">
              🛒
            </div>

            <h2 className="mt-8 text-2xl font-black text-white">
              Your Cart is Empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
              Looks like you haven't discovered your favorite products yet.
            </p>

            <Link
              href="/"
              className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
            >
              Explore Products →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            {/* Products List */}
            <div className="space-y-4 lg:col-span-2">
              {cartItems.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="group flex flex-col gap-5 rounded-[1.75rem] border border-white/[0.07] bg-gradient-to-br from-[#171D30] to-[#101525] p-5 transition-all duration-300 hover:border-violet-400/20 hover:shadow-xl hover:shadow-black/20 sm:flex-row sm:items-center"
                >
                  <div className="flex h-28 w-full shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-gradient-to-br from-[#252D48] to-[#171D30] sm:w-28">
                    <span className="text-5xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {product.emoji}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-lg font-extrabold text-white transition-colors duration-300 group-hover:text-violet-300">
                      {product.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-600">
                      Product Price
                    </p>

                    <p className="text-lg font-black text-violet-300">
                      {product.price.toLocaleString()}
                      <span className="ml-1 text-[10px] text-slate-500">
                        Toman
                      </span>
                    </p>
                  </div>
                </div>
              ))}

              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-xl px-3 py-4 text-sm font-bold text-slate-400 transition-colors duration-300 hover:text-violet-300"
              >
                <span className="text-lg">←</span>
                Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <aside className="relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-[#1C2340] to-[#111728] p-7 shadow-2xl shadow-violet-950/20 lg:sticky lg:top-28">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-violet-400">
                  Order Details
                </span>

                <h2 className="mt-3 text-2xl font-black text-white">
                  Summary<span className="text-violet-400">.</span>
                </h2>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Selected Products</span>

                    <span className="font-bold text-white">
                      {cartItems.length}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">Shipping</span>

                    <span className="font-bold text-emerald-400">Free</span>
                  </div>

                  <div className="border-t border-white/10" />

                  <div className="space-y-3">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                      Total Amount
                    </p>

                    <h3 className="break-all text-3xl font-black leading-tight text-white sm:text-4xl">
                      {totalPrice.toLocaleString()}
                    </h3>

                    <span className="text-xs font-bold text-violet-300">
                      Toman
                    </span>
                  </div>
                </div>

                <div className="mt-8 rounded-xl border border-white/5 bg-white/[0.04] p-4">
                  <p className="text-center text-xs leading-6 text-slate-400">
                    Your selected products are ready for your next step.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-xs tracking-widest text-slate-600">
            MINI SHOP © 2026 — ALL RIGHTS RESERVED.
          </p>
        </footer>
      </div>
    </main>
  );
}
