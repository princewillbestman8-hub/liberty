import type { ReactNode } from 'react';
import { ChatIcon, MailIcon, PhoneIcon } from './icon';

export function SupportPanel({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? 'rounded-2xl border border-slate-200 bg-white p-5 shadow-card' : 'rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-card'}>
      <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-600">Customer Care</p>
          <h2 className="mt-2 text-xl font-black text-navy-900 sm:text-2xl">Purchase with personal support</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Add items to your cart, then contact our team to confirm stock, pricing, and delivery options. No online payment required.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <SupportAction icon={<PhoneIcon className="h-5 w-5" />} title="Call us" detail="508-813-1748" />
          <SupportAction icon={<ChatIcon className="h-5 w-5" />} title="Live chat" detail="Online now" />
          <SupportAction icon={<MailIcon className="h-5 w-5" />} title="Email" detail="orders@libertypump.com" />
        </div>
      </div>
    </section>
  );
}

function SupportAction({
  icon,
  title,
  detail
}: {
  icon: ReactNode;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3.5">
      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-500 text-white">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-900">{title}</p>
        <p className="text-[11px] text-slate-500">{detail}</p>
      </div>
    </div>
  );
}
