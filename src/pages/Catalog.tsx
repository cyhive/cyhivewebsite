import { Course, Internship, Module, Service } from '../data';
import { navigate } from '../hooks/useHashRoute';
import { Accordion, CtaBanner, PrimaryButton, SectionHeader } from '../components/ui';

export function CourseList({ courses }: { courses: Course[] }) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="shell">
        <SectionHeader
          eyebrow="Programs"
          title="Explore Our Courses"
          desc="Discover technology and design programs that help you build practical, industry-relevant skills."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(course => (
            <article key={course.slug} className="card overflow-hidden rounded-2xl">
              <div className="relative h-44 overflow-hidden bg-[#1a1a26] lg:h-48">
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
                  className="w-full cursor-pointer rounded-lg border border-violet/30 bg-transparent py-2 text-sm font-medium text-violet-light"
                >
                  View Course →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceList({ services }: { services: Service[] }) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20">
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
                className="cursor-pointer self-start border-0 bg-transparent p-0 text-sm font-medium text-violet-light"
              >
                Learn More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InternshipList({ internships }: { internships: Internship[] }) {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20">
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
  );
}

function BackLink() {
  return (
    <button
      onClick={() => navigate('#/')}
      className="mb-8 flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-sm text-muted hover:text-white"
    >
      ← Back to Home
    </button>
  );
}

const info = [
  { label: 'Duration', value: 'To be confirmed by CYHIVE' },
  { label: 'Fees', value: 'To be confirmed by CYHIVE' },
  { label: 'Eligibility', value: 'To be confirmed by CYHIVE' },
  { label: 'Certification', value: 'To be confirmed by CYHIVE' },
];

export function CourseDetail({ course }: { course: Course }) {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-10 md:pt-32">
        <div className="pointer-events-none absolute top-16 left-1/4 size-96 rounded-full bg-violet/10 blur-[120px]" />
        <div className="shell relative grid items-center gap-10 lg:grid-cols-2">
          <div>
            <BackLink />
            <div className="mb-4 flex flex-wrap gap-2">
              {course.tags.map(tag => (
                <span key={tag} className="rounded-full border border-violet/30 bg-violet/15 px-2.5 py-1 text-xs text-violet-pale">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-violet-light">{course.title}</p>
            <h1 className="font-display mt-2 text-[clamp(1.75rem,4vw,3.25rem)] font-bold leading-tight text-white">
              {course.headline}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-[26px] text-muted md:text-base">{course.desc}</p>
            <div className="mt-8">
              <PrimaryButton onClick={() => navigate('#/contact')}>Enroll Now</PrimaryButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-violet/20">
            <img src={course.image} alt="" className="h-[220px] w-full object-cover sm:h-[280px] lg:h-[420px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="shell">
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">About the Course</h2>
          <p className="mt-4 max-w-3xl text-sm leading-[26px] text-muted md:text-base">{course.about}</p>
        </div>
      </section>

      <section className="py-8">
        <div className="shell">
          <div className="mx-auto max-w-3xl xl:max-w-4xl">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Course Curriculum</h2>
            <p className="mt-2 mb-6 text-sm text-muted">A structured learning path covering all essential skills.</p>
            <Accordion items={course.modules.map((m: Module) => ({ q: m.title, a: m.summary }))} />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="shell">
          <div className="mx-auto max-w-3xl xl:max-w-4xl">
            <h2 className="font-display mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Course Information</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {info.map(item => (
                <div key={item.label} className="rounded-xl border border-violet/18 bg-card p-4">
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="mt-1 text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title={`Start Your ${course.title} Journey`}
        desc="Explore the course and connect with CYHIVE to learn more about enrollment."
        primary="Enroll Now"
        onPrimary={() => navigate('#/contact')}
      />
    </>
  );
}

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-10 md:pt-32">
        <div className="pointer-events-none absolute top-20 left-1/3 size-80 rounded-full bg-violet/10 blur-[100px]" />
        <div className="shell relative">
          <BackLink />
          <span className="text-4xl">{service.icon}</span>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(1.75rem,4vw,3.25rem)] font-bold text-white">{service.title}</h1>
          <p className="mt-5 max-w-xl text-sm leading-[26px] text-muted md:text-base">{service.desc}</p>
          <div className="mt-8">
            <PrimaryButton onClick={() => navigate('#/contact')}>Get in Touch</PrimaryButton>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">About this Service</h2>
            <p className="mt-4 text-sm leading-[26px] text-muted md:text-base">{service.about}</p>
          </div>
        </div>
      </section>
      <CtaBanner
        title={`Let's Build with ${service.title}`}
        desc="Tell us about your project and we'll help you take the next step."
        primary="Get in Touch"
        onPrimary={() => navigate('#/contact')}
      />
    </>
  );
}

export function InternshipDetail({ internship }: { internship: Internship }) {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-10 md:pt-32">
        <div className="pointer-events-none absolute top-20 left-1/3 size-80 rounded-full bg-violet/10 blur-[100px]" />
        <div className="shell relative">
          <BackLink />
          <span className="text-4xl">{internship.icon}</span>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(1.75rem,4vw,3.25rem)] font-bold text-white">{internship.title} Internship</h1>
          <p className="mt-5 max-w-xl text-sm leading-[26px] text-muted md:text-base">{internship.desc}</p>
          <div className="mt-8">
            <PrimaryButton onClick={() => navigate('#/contact')}>Apply Now</PrimaryButton>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-12">
        <div className="shell">
          <div className="max-w-3xl">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">About the Program</h2>
            <p className="mt-4 text-sm leading-[26px] text-muted md:text-base">{internship.about}</p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {info.map(item => (
                <div key={item.label} className="rounded-xl border border-violet/18 bg-card p-4">
                  <p className="text-xs text-muted">{item.label}</p>
                  <p className="mt-1 text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner
        title={`Start Your ${internship.title} Internship`}
        desc="Connect with CYHIVE to learn more about this internship program."
        primary="Apply Now"
        onPrimary={() => navigate('#/contact')}
      />
    </>
  );
}
