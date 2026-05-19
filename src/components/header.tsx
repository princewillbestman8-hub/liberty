'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { categories } from '@/data/products';
import { CartIcon, SearchIcon } from './icon';
import { useCart } from '@/context/cart-context';

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Announcement bar — hidden on very small screens to save space */}
      <div className="hidden bg-navy-950 px-4 py-1.5 text-center text-xs font-medium text-slate-300 sm:block">
        Browse our catalog and&nbsp;
        <span className="font-semibold text-brand-400">contact us</span>
        &nbsp;to complete your order — no online payment required.
      </div>

      {/* Main nav */}
      <div className="bg-navy-900 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-3 py-3">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-orange">
              <span className="text-xs font-black tracking-tight">LP</span>
            </div>
            <div>
              <p className="text-sm font-black leading-none tracking-tight text-white sm:text-base">Liberty Pump Co.</p>
              <p className="mt-0.5 hidden text-[10px] uppercase tracking-[0.28em] text-slate-400 sm:block">HVAC &amp; Plumbing</p>
            </div>
          </Link>

          {/* Search — md+ only */}
          <div className="hidden flex-1 cursor-text items-center gap-3 rounded-lg border border-navy-700 bg-navy-800 px-4 py-2.5 text-slate-400 transition-colors hover:border-brand-500 md:flex">
            <SearchIcon className="h-4 w-4 flex-shrink-0 text-slate-500" />
            <span className="text-sm">Search products, brands, or part numbers…</span>
          </div>

          {/* Desktop nav links — hidden on mobile */}
          <nav className="ml-auto hidden items-center gap-1 text-sm font-semibold md:flex">
            {categories.map((category) => {
              const href = `/products/${category.key}`;
              const active = pathname === href;
              return (
                <Link
                  key={category.key}
                  href={href}
                  className={
                    active
                      ? 'rounded-lg bg-brand-500 px-4 py-2 text-white'
                      : 'rounded-lg px-4 py-2 text-slate-300 transition hover:bg-navy-800 hover:text-white'
                  }
                >
                  {category.label}
                </Link>
              );
            })}
            <Link
              href="/cart"
              id="cart-nav-btn"
              className="relative ml-2 inline-flex items-center gap-2 rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600 active:scale-95"
            >
              <CartIcon className="h-4 w-4" />
              <span>Cart</span>
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-brand-600 shadow">
                  {itemCount}
                </span>
              )}
            </Link>
          </nav>

          {/* Mobile: cart icon + hamburger */}
          <div className="ml-auto flex items-center gap-2 md:hidden">
            <Link
              href="/cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white shadow-orange"
            >
              <CartIcon className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white text-[9px] font-black text-brand-600">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-navy-700 bg-navy-800 text-slate-300"
            >
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-all duration-200 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="border-t border-navy-800 bg-navy-900 px-4 pb-4 pt-3 md:hidden">
          {/* Mobile search */}
          <div className="mb-3 flex items-center gap-3 rounded-lg border border-navy-700 bg-navy-800 px-3 py-2.5 text-slate-400">
            <SearchIcon className="h-4 w-4 flex-shrink-0 text-slate-500" />
            <span className="text-sm">Search products…</span>
          </div>

          <nav className="space-y-1">
            {categories.map((category) => {
              const href = `/products/${category.key}`;
              const active = pathname === href;
              return (
                <Link
                  key={category.key}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                    active ? 'bg-brand-500 text-white' : 'text-slate-300 hover:bg-navy-800 hover:text-white'
                  }`}
                >
                  {category.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick browse in mobile menu */}
          <div className="mt-4 border-t border-navy-800 pt-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Quick browse</p>
            <div className="flex flex-wrap gap-2">
              {['Pumps & Valves', 'Fittings', 'Thermostats', 'Filters', 'Motors & Controls'].map((label) => (
                <Link
                  key={label}
                  href={label === 'Thermostats' || label === 'Filters' || label === 'Motors & Controls' ? '/products/hvac' : '/products/plumbing'}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full border border-navy-700 bg-navy-800 px-3 py-1 text-xs font-semibold text-slate-300 hover:border-brand-400 hover:text-brand-300"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop category sub-nav — hidden on mobile */}
      <div className="hidden border-b border-navy-800 bg-navy-900/90 px-4 backdrop-blur-sm sm:px-6 md:block lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto py-2 text-xs font-semibold text-slate-400">
          <span className="flex-shrink-0 text-slate-500">Quick browse:</span>
          <Link href="/products/plumbing" className="flex-shrink-0 transition-colors hover:text-brand-400">Pumps &amp; Valves</Link>
          <Link href="/products/plumbing" className="flex-shrink-0 transition-colors hover:text-brand-400">Fittings</Link>
          <Link href="/products/hvac" className="flex-shrink-0 transition-colors hover:text-brand-400">Thermostats</Link>
          <Link href="/products/hvac" className="flex-shrink-0 transition-colors hover:text-brand-400">Filters</Link>
          <Link href="/products/hvac" className="flex-shrink-0 transition-colors hover:text-brand-400">Motors &amp; Controls</Link>
        </div>
      </div>
    </header>
  );
}
