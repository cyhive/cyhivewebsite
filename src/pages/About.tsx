import { aboutImage, faqs } from '../data';
import { Accordion, CtaBanner } from '../components/ui';

const focus = [
  {
    icon: '📚',
    title: 'Technology Education',
    desc: 'Structured courses in full-stack development, mobile development, UI/UX, and graphic design — designed for practical skill-building.',
  },
  {
    icon: '🛠️',
    title: 'IT Services',
    desc: 'Web development, frontend development, mobile app development, academic project support, and graphic design services.',
  },
  {
    icon: '🎯',
    title: 'Internship Programs',
    desc: 'Focused learning programs in AI, Data Structures, Python, and Networking to strengthen technical fundamentals.',
  },
];

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="pointer-events-none absolute top-20 left-1/4 size-96 rounded-full bg-violet/10 blur-[120px]" />
        <div className="shell relative">
          <p className="eyebrow">About Us</p>
          <h1 className="font-display mt-4 max-w-4xl text-[clamp(2rem,5.5vw,4.25rem)] font-bold leading-[1.1] text-white">
            Building the Next Generation of
            <br />
            <span className="text-gradient-violet">Tech Professionals</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
            CYHIVE is a technology education and IT services company focused on practical, industry-aligned learning and quality digital solutions.
          </p>
        </div>
      </section>

      <section className="section-y bg-bg-alt">
        <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Who We Are</h2>
            <div className="mt-5 space-y-4 text-sm leading-[26px] text-muted md:text-base">
              <p>
                CYHIVE is dedicated to bridging the gap between academic learning and industry expectations. We provide structured training programs in technology and design, alongside IT services that help organizations and individuals build digital solutions.
              </p>
              <p>
                Our approach centers on practical, project-based learning that prepares students for real-world technical challenges. We believe that the most effective education happens when theory meets hands-on application.
              </p>
              <p>
                In parallel with education, our services division works with businesses, startups, and organizations to deliver web development, mobile applications, and design solutions that bring ideas to life.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-violet/20">
            <img src={aboutImage} alt="CYHIVE learning environment" className="h-[240px] w-full object-cover sm:h-[320px] lg:h-[420px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-violet/20 to-transparent" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <h2 className="font-display mb-10 text-center text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Our Focus Areas</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {focus.map(item => (
              <div key={item.title} className="card rounded-2xl p-6">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="font-display mt-4 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 md:py-20">
        <div className="shell">
          <div className="shell-text text-center">
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Our Approach</h2>
            <p className="mt-5 text-sm leading-[26px] text-muted md:text-base">
              We believe effective learning is practical, structured, and aligned with what the industry actually needs. Every course and program at CYHIVE is designed to build skills that can be applied immediately — through real projects, guided practice, and meaningful challenges.
            </p>
            <p className="mt-5 text-sm leading-[26px] text-muted md:text-base">
              Our services follow the same principle: thoughtful execution, clean code, and designs that serve a clear purpose. Whether you're a student building skills or an organization building a product, CYHIVE brings the same commitment to quality and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-alt pb-12 md:pb-16">
        <div className="shell">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display mb-6 text-[clamp(1.5rem,3vw,2rem)] font-bold text-white">Frequently Asked Questions</h2>
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Start Learning with CYHIVE"
        desc="Explore our courses, internship programs, and services to find the right path for your goals."
      />
    </>
  );
}
