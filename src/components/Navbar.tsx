import { useEffect, useState } from 'react';
import logo from '../assets/image 8.png';
import { navLinks } from '../data';
import { navigate } from '../hooks/useHashRoute';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    navigate(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 z-50 transition-opacity duration-500"
        style={{
          background: scrolled || open ? 'rgba(8, 8, 12, 0.92)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(139,92,246,0.12)' : '1px solid transparent',
        }}
      >
        <div className="shell grid h-16 grid-cols-[1fr_auto_1fr] items-center">
          <button
            onClick={() => go('#/')}
            className="flex cursor-pointer items-center justify-self-start border-0 bg-transparent p-0"
          >
            <img
              src={logo}
              alt="CYHIVE"
              className="h-[42px] w-auto shrink-0 object-contain mix-blend-screen"
            />
          </button>

          <div className="col-start-2 hidden items-center gap-8 lg:flex xl:gap-10">
            {navLinks.map(link => (
              <button
                key={link.label}
                onClick={() => go(link.href)}
                className="cursor-pointer border-0 bg-transparent p-0 text-sm leading-none font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="col-start-3 flex items-center justify-self-end">
            <button
              onClick={() => go('#/contact')}
              className="btn-primary hidden cursor-pointer items-center rounded-xl px-5 py-2.5 text-sm leading-none font-semibold lg:inline-flex"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setOpen(v => !v)}
              className="flex size-9 cursor-pointer items-center justify-center rounded-lg border-0 bg-transparent p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              <span className="relative block size-5">
                <span className={`absolute left-0 h-[1.5px] w-5 rounded bg-white/85 transition-all ${open ? 'top-[9px] rotate-45' : 'top-[4px]'}`} />
                <span className={`absolute top-[9px] left-0 h-[1.5px] w-5 rounded bg-white/85 transition-all ${open ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-[1.5px] w-5 rounded bg-white/85 transition-all ${open ? 'top-[9px] -rotate-45' : 'top-[14px]'}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#08080c]/97 pt-20 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="shell flex flex-col gap-1 py-6">
          {navLinks.map(link => (
            <button
              key={link.label}
              onClick={() => go(link.href)}
              className="cursor-pointer border-0 border-b border-white/5 bg-transparent py-4 text-left text-lg font-medium text-white/80"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => go('#/contact')}
            className="btn-primary mt-6 cursor-pointer rounded-xl py-3.5 text-sm font-semibold"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}
