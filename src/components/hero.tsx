import Image from 'next/image';
import Link from 'next/link';
import { categories } from '@/data/products';
import { ChevronRightIcon } from './icon';

export function Hero() {
  return (
    <section className="relative overflow-hidden text-white">
      {/* Photo background */}
      <Image
        src="/bg-im.jpg"
        alt="HVAC technician working on commercial pipes and equipment"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Overlay layers — solid dark base + directional fades for legibility */}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/70 via-navy-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        {/* Left copy */}
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            HVAC &amp; Plumbing Products
          </span>

          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-black leading-[0.95] sm:text-5xl lg:text-[4.25rem]">
              Trade-grade parts,{' '}
              <span className="text-brand-400">delivered fast.</span>
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Browse our full HVAC and Plumbing catalog, build your order, then reach out — we&apos;ll handle the rest.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/products/plumbing"
              id="hero-shop-plumbing"
              className="rounded-lg bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600 active:scale-95"
            >
              Shop Plumbing
            </Link>
            <Link
              href="/products/hvac"
              id="hero-shop-hvac"
              className="rounded-lg border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
            >
              Shop HVAC
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              In-Stock Products
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fast Shipping
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-brand-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.172l7.879-7.879a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Expert Support
            </span>
          </div>

          {/* Category cards */}
          <div className="grid grid-cols-1 gap-3 pt-2 xs:grid-cols-2 sm:grid-cols-2">
            {categories.map((category) => (
              <Link
                href={`/products/${category.key}`}
                key={category.key}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-brand-400/40 hover:bg-white/10"
              >
                <p className="text-sm font-bold text-white">{category.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-300">{category.subtitle}</p>
                <span className="mt-3 inline-flex items-center text-xs font-bold text-brand-400 transition group-hover:translate-x-0.5">
                  Browse <ChevronRightIcon className="ml-1 h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: How it works card — hidden on mobile, visible lg+ */}
        <div className="relative hidden items-start justify-center lg:flex lg:justify-end">
          <div className="absolute inset-0 rounded-[2.25rem] bg-brand-500/10 blur-3xl" />
          <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-glow">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-brand-300">How it works</p>
            <h2 className="mt-3 text-xl font-black text-white">Order in 3 simple steps</h2>
            <div className="mt-5 space-y-3">
              {[
                {
                  step: '01',
                  title: 'Browse the catalog',
                  body: 'Explore HVAC and Plumbing items with full specs and pricing.'
                },
                {
                  step: '02',
                  title: 'Add to cart',
                  body: 'Build your order with the exact quantities you need.'
                },
                {
                  step: '03',
                  title: 'Contact us to purchase',
                  body: 'Send a quote request and we\'ll confirm stock, pricing, and delivery.'
                }
              ].map(({ step, title, body }) => (
                <div key={step} className="flex gap-4 rounded-xl bg-white/5 p-4">
                  <span className="flex-shrink-0 text-2xl font-black text-brand-400 leading-none">{step}</span>
                  <div>
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-300">{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/cart"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600"
            >
              View cart &amp; get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
