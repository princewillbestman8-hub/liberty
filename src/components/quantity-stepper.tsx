'use client';

type QuantityStepperProps = {
  value: number;
  onChange: (nextValue: number) => void;
  min?: number;
  className?: string;
};

export function QuantityStepper({
  value,
  onChange,
  min = 1,
  className = ''
}: QuantityStepperProps) {
  return (
    <div className={`inline-flex items-center overflow-hidden rounded-md border border-slate-300 ${className}`}>
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="px-3 py-2 text-slate-700 transition hover:bg-slate-100"
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="min-w-10 border-x border-slate-300 px-3 py-2 text-center text-sm font-semibold text-slate-900">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="px-3 py-2 text-slate-700 transition hover:bg-slate-100"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
