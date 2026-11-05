"use client";

import Link from "next/link";
import { useContext } from "react";
import CartContext from "../context/CartContext";

export default function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <header className="sticky top-4 z-50 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#111728]/80 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:px-7">
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-xl font-black text-white shadow-lg shadow-violet-600/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          M
        </span>

        <span className="text-lg font-black tracking-tight text-white sm:text-xl">
          MINI<span className="text-violet-400">SHOP.</span>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-3 sm:gap-7">
        <Link
          href="/"
          className="hidden text-sm font-semibold text-slate-400 transition-colors duration-300 hover:text-white sm:block"
        >
          Products
        </Link>

        <Link
          href="/cart"
          className="group/cart relative flex items-center gap-2.5 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-3 text-xs font-bold text-white transition-all duration-300 hover:border-violet-400/50 hover:bg-violet-500/20 sm:px-5"
        >
          <span className="text-lg transition-transform duration-300 group-hover/cart:-rotate-12">
            🛒
          </span>

          <span className="hidden sm:block">Shopping Cart</span>

          <span className="flex h-6 min-w-6 items-center justify-center rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 px-1.5 text-[10px] font-black text-white shadow-lg shadow-violet-600/20">
            {cartItems.length}
          </span>
        </Link>
      </nav>
    </header>
  );
}
