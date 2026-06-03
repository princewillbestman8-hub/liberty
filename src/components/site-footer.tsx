import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500 text-white">
                <span className="text-xs font-black">LP</span>
              </div>
              <div>
                <p className="text-sm font-black text-white leading-none">Liberty Pump Co.</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-slate-500 mt-0.5">HVAC &amp; Plumbing</p>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Trade-grade HVAC and Plumbing products with expert support and contact-first ordering.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Products</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products/plumbing" className="hover:text-white transition-colors">Plumbing</Link></li>
              <li><Link href="/products/hvac" className="hover:text-white transition-colors">HVAC</Link></li>
              <li><Link href="/cart" className="hover:text-white transition-colors">View Cart</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>📞 (213)-662-2393</li>
              <li>✉️ order@LibertyPumpco.com</li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="text-emerald-400 font-semibold">Support available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-600">
          <p>© {new Date().getFullYear()} Liberty Pump Co. All rights reserved.</p>
          <p>Products are for reference only. Contact us to confirm pricing and availability.</p>
        </div>
      </div>
    </footer>
  );
}
