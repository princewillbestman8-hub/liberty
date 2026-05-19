import Link from 'next/link';
import { Hero } from '@/components/hero';
import { ProductCard } from '@/components/product-card';
import { SupportPanel } from '@/components/support-panel';
import { featuredProducts, categories } from '@/data/products';

export default function HomePage() {
  return (
    <div className="space-y-14 pb-16">
      <Hero />

      {/* Category Tiles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Product Categories</p>
          <h2 className="mt-2 text-2xl font-black text-navy-900 sm:text-3xl">What are you looking for?</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {categories.map((category, i) => (
            <Link
              key={category.key}
              href={`/products/${category.key}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow"
            >
              {/* Decorative accent */}
              <div className={`absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full opacity-10 ${i === 0 ? 'bg-brand-500' : 'bg-navy-600'}`} />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Category</p>
              <h3 className="mt-2 text-2xl font-black text-navy-900">{category.label}</h3>
              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{category.subtitle}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-sm font-bold text-white shadow-orange transition group-hover:bg-brand-600">
                Browse {category.label} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-600">Featured Products</p>
            <h2 className="mt-2 text-2xl font-black text-navy-900 sm:text-3xl">Popular HVAC &amp; Plumbing items</h2>
          </div>
          <Link
            href="/products/plumbing"
            className="hidden rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-card transition hover:border-brand-300 hover:text-brand-700 md:block"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy-900 py-14 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-400">Why Liberty Pump Co.</p>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">Built for trade professionals</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '🔧', title: 'Trade-Grade Products', desc: 'Commercial and residential parts from trusted brands.' },
              { icon: '⚡', title: 'Fast Availability', desc: 'In-stock items with delivery estimates up front.' },
              { icon: '📞', title: 'Contact-First Ordering', desc: 'We confirm your order by phone or email — no surprise charges.' },
              { icon: '🏗️', title: 'HVAC & Plumbing Expert', desc: 'Specialized stock for contractors and property managers.' }
            ].map(({ icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-3 text-base font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SupportPanel />
      </section>
    </div>
  );
}
