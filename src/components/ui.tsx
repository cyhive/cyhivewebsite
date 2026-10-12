import { useState } from 'react';
import { navigate } from '../hooks/useHashRoute';

export function SectionHeader({
  eyebrow,
  title,
  desc,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  desc?: string;
  align?: 'center' | 'left';
}) {
  const alignCls = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';
  return (
    <div className={`mb-10 flex max-w-2xl flex-col md:mb-12 xl:mb-14 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold text-white">{title}</h2>
      {desc && <p className="mt-4 text-sm leading-[26px] text-muted md:text-base">{desc}</p>}
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  className = '',
  type = 'button',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}) {
  return (
    <button type={type} onClick={onClick} className={`btn-primary cursor-pointer rounded-xl px-6 py-3 text-sm font-semibold ${className}`}>
      {children}
    </button>
  );
}

export function OutlineButton({
  children,
  onClick,
  className = '',
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={onClick} className={`btn-outline cursor-pointer rounded-xl px-6 py-3 text-sm font-medium ${className}`}>
      {children}
    </button>
  );
}

export function CtaBanner({
  title,
  accent,
  desc,
  primary = 'Explore Courses',
  onPrimary = () => navigate('#/courses'),
  showContact = true,
}: {
  title: string;
  accent?: string;
  desc: string;
  primary?: string;
  onPrimary?: () => void;
  showContact?: boolean;
}) {
  return (
    <section className="section-y">
      <div className="shell">
        <div
          className="relative overflow-hidden rounded-3xl px-5 py-14 text-center sm:px-10 md:px-16 md:py-20 xl:py-24"
          style={{ background: 'linear-gradient(153deg, rgb(59, 7, 100) 0%, rgb(30, 6, 69) 40%, rgb(8, 8, 12) 100%)' }}
        >
          <div className="pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-violet/40 to-transparent" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 size-64 -translate-y-1/2 rounded-full bg-violet/15 blur-[80px]" />
          <h2 className="font-display relative text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.2] text-white">
            {title}{accent && <><br /><span className="text-gradient-violet">{accent}</span></>}
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-base leading-7 text-muted md:text-lg">{desc}</p>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <PrimaryButton onClick={onPrimary}>{primary}</PrimaryButton>
            {showContact && <OutlineButton onClick={() => navigate('#/contact')}>Get in Touch</OutlineButton>}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Accordion({ items }: { items: { q: string; a?: string; title?: string; summary?: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const heading = item.q || item.title || '';
        const body = item.a || item.summary;
        const isOpen = open === i;
        return (
          <button
            key={heading}
            type="button"
            onClick={() => setOpen(isOpen ? null : i)}
            className="card cursor-pointer overflow-hidden rounded-xl border border-violet/18 bg-card p-0 text-left"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <div>
                <p className="text-sm font-medium text-white">{heading}</p>
                {item.summary && !isOpen && (
                  <p className="mt-1 text-xs text-muted">{item.summary}</p>
                )}
              </div>
              <span className={`text-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}>▾</span>
            </div>
            {isOpen && body && (
              <div className="border-t border-violet/10 px-5 py-4">
                <p className="text-sm leading-6 text-muted">{body}</p>
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
