import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { SupportPanel } from '@/components/support-panel';
import { categories, getCategoryLabel, getProductsByCategory, type Category } from '@/data/products';

const validCategories: Category[] = ['plumbing', 'hvac'];

export function generateStaticParams() {
  return validCategories.map((category) => ({ category }));
}

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const resolvedParams = await params;

  if (!validCategories.includes(resolvedParams.category as Category)) {
    notFound();
  }

  const category = resolvedParams.category as Category;
  const products = getProductsByCategory(category);
  const categoryMeta = categories.find((entry) => entry.key === category);

  const isHvac = category === 'hvac';

  return (
    <div className="pb-16">
      {/* Category hero banner */}
      <div className="bg-hero-overlay text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-5 flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="font-semibold text-white">{getCategoryLabel(category)}</span>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex rounded-full border border-brand-400/30 bg-brand-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-300">
                {isHvac ? 'HVAC Products' : 'Plumbing Products'}
              </span>
              <h1 className="mt-3 text-3xl font-black sm:text-4xl lg:text-5xl">{getCategoryLabel(category)}</h1>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{categoryMeta?.subtitle}</p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/cart"
                id="view-cart-btn"
                className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600"
              >
                View cart →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold text-slate-900">{products.length}</span> products
          </p>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        <SupportPanel compact />
      </div>
    </div>
  );
}
