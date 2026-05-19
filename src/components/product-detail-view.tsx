'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/cart-context';
import { QuantityStepper } from './quantity-stepper';
import { ProductCard } from './product-card';

type ProductDetailViewProps = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="mx-auto max-w-7xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          Home
        </Link>{' '}
        /{' '}
        <Link href={`/products/${product.category}`} className="hover:text-slate-900">
          {product.category.toUpperCase()}
        </Link>{' '}
        / {product.name}
      </div>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          {/* <div className="grid grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((thumb) => (
              <div key={thumb} className="relative aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image src={product.image} alt={`${product.name} preview ${thumb}`} fill sizes="120px" className="object-cover opacity-90" />
              </div>
            ))}
          </div> */}
        </div>

        <div className="space-y-6">
          <p className="inline-flex rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            {product.badge}
          </p>
          <h1 className="text-2xl font-black leading-tight text-navy-900 sm:text-4xl">{product.name}</h1>

          <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 pb-5 text-sm">
            <p className="text-slate-600">
              Brand: <span className="font-semibold text-brand-600">{product.brand ?? 'Trade Brand'}</span>
            </p>
            <p className="text-slate-600">
              SKU: <span className="font-semibold text-slate-900">{product.sku ?? product.id.toUpperCase()}</span>
            </p>
            <p className="font-semibold text-emerald-700">{product.stockStatus ?? 'In Stock'}</p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="flex items-end justify-between gap-3">
              <p className="text-3xl font-black text-slate-900 sm:text-4xl">${product.price.toFixed(2)}</p>
              <p className="text-sm text-slate-500">each</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <QuantityStepper value={quantity} onChange={setQuantity} className="rounded-xl" />
              <button
                type="button"
                onClick={() => addToCart(product, quantity)}
                className="flex-1 rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-orange transition hover:bg-brand-600 active:scale-95 sm:flex-none"
              >
                Add to cart
              </button>
            </div>

            <p className="mt-4 text-sm font-semibold text-emerald-700">
              {product.stockStatus ?? 'In Stock'} <span className="font-normal text-slate-600">{product.eta}</span>
            </p>
          </div>

          <section className="rounded-3xl border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-bold text-slate-900">Product highlights</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {(product.highlights ?? []).map((highlight) => (
                <div key={highlight} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
                  {highlight}
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-5">
            <h2 className="text-2xl font-bold text-slate-900">Description</h2>
            <p className="mt-3 leading-7 text-slate-600">{product.description}</p>
          </section>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-black text-navy-900">Related products</h2>
          <Link href={`/products/${product.category}`} className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            View all in {product.category.toUpperCase()}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {relatedProducts.map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </section>
    </div>
  );
}
