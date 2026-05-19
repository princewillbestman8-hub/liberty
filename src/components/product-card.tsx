'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/cart-context';
import { QuantityStepper } from './quantity-stepper';
import { CartIcon } from './icon';

function StarRating({ rating = 4.5, count = 0 }: { rating?: number; count?: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <span className="stars text-sm leading-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < full ? 'text-amber-400' : half && i === full ? 'text-amber-300' : 'text-slate-200'}>
            ★
          </span>
        ))}
      </span>
      {count > 0 && (
        <span className="text-[11px] text-slate-500">({count})</span>
      )}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const rating = parseFloat(((product.id.charCodeAt(0) % 15) / 10 + 3.5).toFixed(1));
  const reviewCount = ((product.id.charCodeAt(product.id.length - 1) * 13) % 120) + 8;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">
      {/* Image */}
      <Link href={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {/* Badge */}
        <div className="absolute left-3 top-3 rounded-md bg-navy-900/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
          {product.badge}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col space-y-2.5 p-4">
        {/* Product name */}
        <div>
          <Link
            href={`/product/${product.id}`}
            className="block text-sm font-bold leading-snug text-navy-900 hover:text-brand-600 transition-colors line-clamp-2"
          >
            {product.name}
          </Link>
          <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
            <span>SKU: <span className="font-semibold text-slate-700">{product.sku ?? product.id.toUpperCase()}</span></span>
            <span className="text-slate-300">|</span>
            <Link href="#" className="font-semibold text-brand-600 hover:underline">{product.brand ?? 'ProSupply'}</Link>
          </div>
        </div>

        {/* Stars */}
        <StarRating rating={rating} count={reviewCount} />

        {/* Quantity + Price row */}
        <div className="flex items-center justify-between gap-2">
          <QuantityStepper value={quantity} onChange={setQuantity} />
          <span className="text-lg font-black text-slate-900">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-[11px] text-slate-500 -mt-1">each</p>

        {/* Add to cart */}
        <button
          type="button"
          id={`add-to-cart-${product.id}`}
          onClick={handleAdd}
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold uppercase tracking-wide transition-all active:scale-95 ${
            added
              ? 'bg-emerald-600 text-white'
              : 'bg-brand-500 text-white hover:bg-brand-600 shadow-orange'
          }`}
        >
          <CartIcon className="h-4 w-4" />
          {added ? '✓ Added!' : 'Add to Cart'}
        </button>

        {/* Stock */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500 flex-shrink-0" />
          <p className="text-[11px] font-semibold text-emerald-700">{product.stockStatus ?? 'In Stock'}</p>
          {product.eta && (
            <p className="text-[11px] text-slate-500 truncate">· {product.eta}</p>
          )}
        </div>
      </div>
    </article>
  );
}
