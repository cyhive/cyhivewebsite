import logo from '../assets/image 8.png';
import { courses, navLinks, services } from '../data';
import { navigate } from '../hooks/useHashRoute';

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <button
      onClick={() => navigate(href)}
      className="cursor-pointer border-0 bg-transparent p-0 text-left text-sm text-muted transition-colors hover:text-white"
    >
      {label}
    </button>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.5 9H3.7v11.3h2.8V9zM5.1 3.4A1.7 1.7 0 1 0 5.1 6.8 1.7 1.7 0 0 0 5.1 3.4zM20.3 20.3h-2.8v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6H10.8V9h2.7v1.5h.04c.4-.7 1.3-1.5 2.7-1.5 2.9 0 3.4 1.9 3.4 4.4v6.9z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg">
      <div className="shell pt-14 pb-8 md:pt-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <button onClick={() => navigate('#/')} className="cursor-pointer border-0 bg-transparent p-0">
              <img src={logo} alt="CYHIVE" className="h-9 w-auto shrink-0 object-contain mix-blend-screen" />
            </button>
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              Empowering tomorrow's tech leaders through practical, career-focused technology education and IT services.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-violet/40 hover:text-violet-light"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/cyhivedev"
                target="_blank"
                rel="noreferrer"
                className="flex size-8 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-violet/40 hover:text-violet-light"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/80">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <FooterLink key={l.label} label={l.label} href={l.href} />
              ))}
              <FooterLink label="Get in Touch" href="#/contact" />
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/80">Courses</h4>
            <div className="flex flex-col gap-2.5">
              {courses.map(c => (
                <FooterLink key={c.slug} label={c.title} href={`#/courses/${c.slug}`} />
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-white/80">Services</h4>
            <div className="flex flex-col gap-2.5">
              {services.map(s => (
                <FooterLink key={s.slug} label={s.title} href={`#/services/${s.slug}`} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 CYHIVE. All rights reserved.</span>
          <span>Technology Education & IT Services</span>
        </div>
      </div>
    </footer>
  );
}
