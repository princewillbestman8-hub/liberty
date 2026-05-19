import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { CartProvider } from '@/context/cart-context';
import { Header } from '@/components/header';
import { SiteFooter } from '@/components/site-footer';

export const metadata: Metadata = {
  title: 'Liberty Pump Co. | HVAC & Plumbing Products',
  description:
    'Browse professional-grade HVAC and Plumbing products from Liberty Pump Co. Add to cart and reach out to us to complete your order.'
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900 antialiased">
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
