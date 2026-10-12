import { courses, internships, services } from '../data';
import { navigate } from '../hooks/useHashRoute';
import HeroCinematic from '../components/HeroCinematic';
import { CtaBanner, SectionHeader } from '../components/ui';

const whyCards = [
  {
    icon: '🎯',
    title: 'Expert-Led Training',
    desc: 'Learn from experienced professionals through structured, guided learning that connects theory to real-world practice.',
  },
  {
    icon: '⚡',
    title: 'Hands-On Learning',
    desc: 'Build practical skills through exercises, assignments, and project-based learning that mirrors real development work.',
  },
  {
    icon: '🔗',
    title: 'Industry Connections',
    desc: 'Explore opportunities to connect your learning with industry expectations and relevant technical challenges.',
  },
];

const standsOut = [
  {
    icon: '🎓',
    title: 'Personalized Learning',
    desc: 'A learning experience designed to support different learning needs and goals — at a pace and depth that works for you.',
  },
  {
    icon: '🚀',
    title: 'Cutting-Edge Innovations',
    desc: 'Explore modern tools, technologies, and evolving digital practices that keep your skills relevant in a fast-changing industry.',
  },
  {
    icon: '🌟',
    title: 'Modern Learning Environment',
    desc: 'Learn in an engaging environment designed to support creativity, collaboration, and skill development beyond the classroom.',
  },
];

export default function Home() {
  return (
    <>
      <HeroCinematic />

      <section id="why" className="section-y">
        <div className="shell">
          <SectionHeader
            eyebrow="Our Approach"
            title="Why Choose CYHIVE?"
            desc="Learn with a practical, career-focused approach built around real-world skills."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {whyCards.map(card => (
              <div key={card.title} className="card rounded-2xl p-6 md:p-7">
                <div className="flex size-12 items-center justify-center rounded-xl border border-violet/20 bg-violet/12 text-2xl">
                  {card.icon}
                </div>
                <h3 className="font-display mt-4 text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="section-y scroll-mt-16 bg-bg-alt">
        <div className="shell">
          <SectionHeader
            eyebrow="Programs"
            title="Explore Our Courses"
            desc="Discover technology and design programs that help you build practical, industry-relevant skills."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map(course => (
              <article key={course.slug} className="card overflow-hidden rounded-2xl">
                <div className="relative h-44 overflow-hidden bg-[#1a1a26] sm:h-40 lg:h-48">
                  <img src={course.image} alt="" className="absolute inset-0 size-full object-cover opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <span className="absolute bottom-3 left-3 rounded-full border border-violet/40 bg-violet/30 px-2 py-0.5 text-xs font-medium text-violet-pale">
                    {course.tag}
                  </span>
                </div>
                <div className="flex flex-col p-5">
                  <h3 className="font-display text-base font-semibold text-white">{course.title}</h3>
                  <p className="mt-2 mb-4 flex-1 text-xs leading-5 text-muted sm:text-sm">{course.desc}</p>
                  <button
                    onClick={() => navigate(`#/courses/${course.slug}`)}
                    className="w-full cursor-pointer rounded-lg border border-violet/30 bg-transparent py-2 text-sm font-medium text-violet-light transition-colors hover:border-violet/50"
                  >
                    View Course →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-y scroll-mt-16">
        <div className="shell">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Services"
            desc="Digital solutions designed to help businesses, individuals, and organizations bring their ideas to life."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(svc => (
              <article key={svc.slug} className="card flex flex-col rounded-2xl p-6">
                <span className="text-3xl">{svc.icon}</span>
                <h3 className="font-display mt-4 text-base font-semibold text-white">{svc.title}</h3>
                <p className="mt-2 mb-5 flex-1 text-sm leading-6 text-muted">{svc.desc}</p>
                <button
                  onClick={() => navigate(`#/services/${svc.slug}`)}
                  className="cursor-pointer self-start border-0 bg-transparent p-0 text-sm font-medium text-violet-light hover:text-violet-pale"
                >
                  Learn More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="internships" className="section-y scroll-mt-16 bg-bg-alt">
        <div className="shell">
          <SectionHeader
            eyebrow="Internships"
            title="Explore Our Internship Programs"
            desc="Gain practical exposure and strengthen your technical knowledge through focused internship learning."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {internships.map(item => (
              <article key={item.slug} className="card flex flex-col rounded-2xl p-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 mb-5 flex-1 text-sm leading-6 text-muted">{item.desc}</p>
                <button
                  onClick={() => navigate(`#/internships/${item.slug}`)}
                  className="w-full cursor-pointer rounded-lg border border-violet/30 bg-transparent py-2 text-sm font-medium text-violet-light"
                >
                  View Program →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section-y relative scroll-mt-16 overflow-hidden">
        <div className="pointer-events-none absolute right-0 bottom-0 size-96 rounded-full bg-violet-deep/8 blur-[120px]" />
        <div className="shell relative grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">Why CYHIVE</p>
            <h2 className="font-display mt-3 text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold text-white">
              Learning Beyond
              <br />
              <span className="text-gradient-violet">the Classroom</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-6 text-muted">
              CYHIVE is built around a simple belief: the best learning happens when education connects with purpose. We design learning experiences that go beyond content delivery.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            {standsOut.map(item => (
              <div key={item.title} className="card flex gap-4 rounded-2xl p-5 sm:gap-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet/12 text-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Start Your"
        accent="Tech Journey?"
        desc="Explore our programs and take the next step toward building your future in technology."
      />
    </>
  );
}
