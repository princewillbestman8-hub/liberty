'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type ReactNode, type FormEvent } from 'react';
import { useCart } from '@/context/cart-context';
import { PhoneIcon, ChatIcon, MailIcon } from './icon';

export function CartPanel() {
  const { items, subtotal, setQuantity, removeFromCart, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real implementation this would POST to an API / send an email.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-4xl">✓</div>
        <h1 className="mt-6 text-2xl font-black text-navy-900 sm:text-3xl">Quote request sent!</h1>
        <p className="mt-3 max-w-md text-sm leading-7 text-slate-600">
          Thanks <strong>{form.name}</strong>! We&apos;ve received your request and will reach out to you at{' '}
          <strong>{form.email}</strong> shortly to confirm availability, pricing, and delivery.
        </p>
        <div className="mt-8 flex gap-3">
          <Link
            href="/products/plumbing"
            onClick={clearCart}
            className="rounded-xl bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
      {/* Left: Cart items */}
      <section>
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-black text-navy-900">Your Cart</h1>
            <p className="mt-1 text-sm text-slate-500">Review products before submitting your quote request.</p>
          </div>
          {items.length > 0 && (
            <button
              type="button"
              onClick={clearCart}
              className="text-sm font-semibold text-slate-400 transition hover:text-slate-800"
            >
              Clear cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 bg-white p-10 shadow-card">
            <div className="text-4xl">🛒</div>
            <p className="text-lg font-bold text-slate-900">Your cart is empty</p>
            <p className="max-w-sm text-sm leading-6 text-slate-500">
              Browse our HVAC and Plumbing catalog and add the products you need.
            </p>
            <div className="flex gap-3">
              <Link
                href="/products/plumbing"
                className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600"
              >
                Shop Plumbing
              </Link>
              <Link
                href="/products/hvac"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-card transition hover:border-brand-300"
              >
                Shop HVAC
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:flex-row sm:items-center"
              >
                <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">{item.category}</p>
                      <h2 className="mt-0.5 text-base font-bold text-navy-900 leading-snug">{item.name}</h2>
                      <p className="text-xs text-slate-500">SKU: {item.sku ?? item.id.toUpperCase()} · {item.brand}</p>
                    </div>
                    <p className="text-lg font-black text-slate-900 flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {/* Qty stepper */}
                    <div className="inline-flex items-center overflow-hidden rounded-lg border border-slate-200">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-slate-700 hover:bg-slate-50 transition font-semibold"
                      >
                        −
                      </button>
                      <span className="min-w-10 px-3 py-1.5 text-center text-sm font-bold text-slate-900 border-x border-slate-200">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-slate-700 hover:bg-slate-50 transition font-semibold"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xs text-slate-500">${item.price.toFixed(2)} each</p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto text-xs font-semibold text-slate-400 hover:text-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Subtotal */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Estimated subtotal ({items.reduce((t, i) => t + i.quantity, 0)} items)</span>
                <span className="text-2xl font-black text-navy-900">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                Final pricing, shipping, and taxes will be confirmed when we follow up on your quote.
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Right: Quote request form */}
      <aside className="space-y-5">
        {/* Contact options */}
        <div className="rounded-2xl bg-navy-900 p-5 text-white shadow-glow">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-300">Ready to order?</p>
          <h2 className="mt-2 text-xl font-black">Contact us to complete your order</h2>
          <p className="mt-2 text-xs leading-5 text-slate-300">
            Fill out the form below or reach us directly.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <ContactLine icon={<PhoneIcon className="h-4 w-4" />} label="Call" value="508-813-1748" />
            <ContactLine icon={<ChatIcon className="h-4 w-4" />} label="Live chat" value="Available now" />
            <ContactLine icon={<MailIcon className="h-4 w-4" />} label="Email" value="orders@libertypump.com" />
          </div>
        </div>

        {/* Quote request form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card space-y-4"
        >
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Quote Request</p>
            <h3 className="mt-1 text-lg font-black text-navy-900">Send us your cart</h3>
            <p className="mt-1 text-xs text-slate-500">We&apos;ll reach out to confirm and complete your order.</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="quote-name">
                Full Name <span className="text-brand-500">*</span>
              </label>
              <input
                id="quote-name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                placeholder="John Smith"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="quote-email">
                Email <span className="text-brand-500">*</span>
              </label>
              <input
                id="quote-email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                placeholder="john@company.com"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="quote-phone">
                Phone
              </label>
              <input
                id="quote-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                placeholder="(555) 000-0000"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="quote-company">
                Company / Organization
              </label>
              <input
                id="quote-company"
                type="text"
                value={form.company}
                onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                placeholder="Optional"
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1" htmlFor="quote-message">
                Message / Special Instructions
              </label>
              <textarea
                id="quote-message"
                rows={3}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Any special requirements, delivery notes, or questions…"
                className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
          </div>

          <button
            type="submit"
            id="submit-quote-btn"
            disabled={items.length === 0}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-500 py-3 text-sm font-bold text-white shadow-orange transition hover:bg-brand-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Submit Quote Request →
          </button>

          {items.length === 0 && (
            <p className="text-center text-xs text-slate-400">Add products to your cart first.</p>
          )}
        </form>
      </aside>
    </div>
  );
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
      <div className="text-brand-300">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <p className="text-xs font-bold text-white">{value}</p>
      </div>
    </div>
  );
}
