import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import products from "./data/products";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080B16] px-5 pb-24 text-white sm:px-8 lg:px-12">
      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-[500px] h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <Header />

        {/* Hero Section */}
        <section className="relative mb-20 mt-20 overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#171B32] via-[#11162A] to-[#10182D] px-7 py-16 shadow-2xl shadow-black/20 sm:px-12 lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/5" />
          <div className="pointer-events-none absolute -right-8 -top-20 h-72 w-72 rounded-full border border-white/5" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold tracking-widest text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
              PREMIUM COLLECTION
            </span>

            <h1 className="mt-8 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Our Products
              <span className="mt-2 block bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Your Lifestyle.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-8 text-slate-400 sm:text-base">
              Discover our exclusive collection of premium products. Quality,
              innovation and design — all in one place.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-violet-600/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30"
              >
                Explore Collection
                <span className="ml-2">↓</span>
              </a>

              <span className="text-xs font-medium text-slate-500">
                Curated for quality.
              </span>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-[42%] items-center justify-center lg:flex">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border border-violet-400/10 bg-violet-500/5 shadow-[0_0_100px_rgba(139,92,246,0.12)]">
              <div className="absolute h-56 w-56 rounded-full border border-blue-400/20" />
              <div className="absolute h-40 w-40 rounded-full border border-violet-400/20" />
              <span className="text-9xl drop-shadow-[0_0_35px_rgba(139,92,246,0.5)]">
                ✦
              </span>
              <span className="absolute right-4 top-10 text-3xl text-blue-300">
                ✧
              </span>
              <span className="absolute bottom-10 left-5 text-2xl text-violet-300">
                ✦
              </span>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
                Our Store
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Explore Products<span className="text-violet-400">.</span>
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Find something special for yourself.
              </p>
            </div>

            <span className="w-fit rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-slate-400">
              {products.length} Products Available
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/10 pt-8 text-center">
          <p className="text-xs tracking-widest text-slate-600">
            MINI SHOP © 2026 — DESIGNED FOR YOUR LIFESTYLE.
          </p>
        </footer>
      </div>
    </main>
  );
}
