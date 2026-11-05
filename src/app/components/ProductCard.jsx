"use client";

import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-[#171D30] to-[#101525] p-5 shadow-xl shadow-black/10 transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/30">
      {/* Glow Effect */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/0 blur-[70px] transition-all duration-500 group-hover:bg-violet-600/20" />

      {/* Product Visual */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/[0.05] bg-gradient-to-br from-[#202944] to-[#151B2D]">
        <div className="absolute h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition-all duration-500 group-hover:bg-violet-500/25" />

        <div className="absolute h-44 w-44 rounded-full border border-white/[0.06] transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110" />

        <span className="relative z-10 text-8xl drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] transition-all duration-500 group-hover:scale-125 group-hover:-rotate-6">
          {product.emoji}
        </span>

        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-violet-300 backdrop-blur-md">
          Premium
        </span>
      </div>

      {/* Product Information */}
      <div className="relative z-10 px-1 pb-1 pt-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-violet-300">
              {product.title}
            </h2>

            <p className="mt-3 min-h-12 text-sm leading-6 text-slate-500">
              {product.description}
            </p>
          </div>

          <span className="shrink-0 rounded-xl border border-violet-400/10 bg-violet-400/10 px-2.5 py-2 text-xs font-bold text-violet-300">
            ✦
          </span>
        </div>

        {/* Price & Button */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.07] pt-5">
          <div>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-slate-600">
              Price
            </p>

            <p className="text-lg font-black tracking-tight text-white">
              {product.price.toLocaleString()}
              <span className="ml-1 text-[10px] font-semibold text-slate-500">
                Toman
              </span>
            </p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="group/button relative overflow-hidden rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3.5 text-xs font-extrabold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-600/30 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-base transition-transform duration-300 group-hover/button:rotate-12">
                +
              </span>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
