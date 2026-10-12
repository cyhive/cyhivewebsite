import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home'; hash?: string }
  | { name: 'about' }
  | { name: 'contact'; sent?: boolean }
  | { name: 'courses' }
  | { name: 'course'; slug: string }
  | { name: 'services' }
  | { name: 'service'; slug: string }
  | { name: 'internships' }
  | { name: 'internship'; slug: string };

function parse(hash: string): Route {
  const raw = hash.replace(/^#/, '') || '/';
  const [path] = raw.split('?');
  const parts = path.split('/').filter(Boolean);

  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'about') return { name: 'about' };
  if (parts[0] === 'contact') return { name: 'contact', sent: parts[1] === 'sent' };
  if (parts[0] === 'courses' && parts[1]) return { name: 'course', slug: parts[1] };
  if (parts[0] === 'courses') return { name: 'courses' };
  if (parts[0] === 'services' && parts[1]) return { name: 'service', slug: parts[1] };
  if (parts[0] === 'services') return { name: 'services' };
  if (parts[0] === 'internships' && parts[1]) return { name: 'internship', slug: parts[1] };
  if (parts[0] === 'internships') return { name: 'internships' };
  return { name: 'home' };
}

export function navigate(href: string) {
  if (href.startsWith('#/')) {
    window.location.hash = href.slice(1);
    return;
  }
  if (href.startsWith('#')) {
    const id = href.slice(1);
    if (window.location.hash !== '#/' && !window.location.hash.startsWith('#/?')) {
      window.location.hash = '/';
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  window.location.hash = href;
}

export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parse(window.location.hash));

  useEffect(() => {
    const onHash = () => {
      setRoute(parse(window.location.hash));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) window.location.hash = '/';
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  return route;
}
