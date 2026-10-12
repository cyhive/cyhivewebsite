import jodarshImg from '../assets/works-jodarsh.png';
import pachaBhoomiImg from '../assets/works-pacha-bhoomi.png';
import { navigate } from '../hooks/useHashRoute';
import { CtaBanner, PrimaryButton, SectionHeader } from '../components/ui';

const projects = [
  {
    name: 'Jodarsh',
    type: 'Web Development',
    subtitle: 'Premium Home Services Platform',
    desc: 'A digital platform connecting customers with verified home service professionals for convenient, reliable household services.',
    image: jodarshImg,
    features: [
      'Home services discovery and selection',
      'Verified professional service network',
      'Convenient service booking experience',
      'Multiple home service categories',
      'Customer-focused, responsive website experience',
      'Trust-focused design with customer testimonials',
    ],
  },
  {
    name: 'Pacha Bhoomi',
    type: 'E-Commerce / Web Development',
    subtitle: 'Gardening & Plant E-Commerce Platform',
    desc: 'A clean and nature-inspired e-commerce platform designed for plant lovers and gardening enthusiasts, offering indoor and outdoor plants, gardening essentials, tools, planters, and accessories.',
    image: pachaBhoomiImg,
    features: [
      'Plant and gardening product marketplace',
      'Gardening tools, planters, pots and accessories',
      'Product search functionality',
      'Category-based product browsing',
      'Partner nursery and seller support',
      'Customer ratings and reviews',
    ],
  },
];

export default function Works() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-36 md:pb-20">
        <div className="pointer-events-none absolute top-24 left-1/3 size-96 rounded-full bg-violet/10 blur-[120px]" />
        <div className="shell relative">
          <SectionHeader
            eyebrow="Our Works"
            title="Real Projects. Real Impact"
            desc="Explore some of the amazing projects we've worked on for our clients. From websites to mobile apps, we turn ideas into digital experiences."
          />
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="shell space-y-20 md:space-y-28">
          {projects.map((project, index) => (
            <article key={project.name} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
              <div className={index % 2 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💻</span>
                  <span className="rounded-full border border-violet/25 bg-violet/12 px-3 py-1 text-xs font-medium uppercase text-violet-light">
                    {project.type}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3rem)] font-bold text-white">{project.name}</h2>
                <p className="mt-2 text-sm font-medium text-violet">{project.subtitle}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">{project.desc}</p>
                <ul className="mt-6 grid gap-2.5">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full bg-violet/20 text-[10px] text-violet-light">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-7">
                  <PrimaryButton onClick={() => navigate('#/contact')}>View Website</PrimaryButton>
                </div>
              </div>
              <div className={`overflow-hidden rounded-2xl border border-violet/20 bg-card ${index % 2 ? 'lg:order-1' : ''}`}>
                <img src={project.image} alt={`${project.name} website`} className="aspect-[16/10] w-full object-cover" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Have a Project in Mind?"
        desc="Tell us what you're building and let's explore how CYHIVE can help."
        primary="Get in Touch"
        onPrimary={() => navigate('#/contact')}
      />
    </>
  );
}
