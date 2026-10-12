import { FormEvent, useState } from 'react';
import { interestOptions } from '../data';
import { navigate } from '../hooks/useHashRoute';
import { PrimaryButton } from '../components/ui';

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-xs font-medium text-muted">{label}</span>
      {children}
    </label>
  );
}

const fieldCls =
  'w-full rounded-xl border border-violet/20 bg-bg-alt px-4 py-2.5 text-sm text-white outline-none placeholder:text-muted/50 focus:border-violet/50';

export default function Contact({ sent = false }: { sent?: boolean }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: interestOptions[0],
    message: '',
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('#/contact/sent');
  };

  return (
    <>
      <section className="relative overflow-hidden pt-24 pb-10 text-center md:pt-32">
        <div className="pointer-events-none absolute top-24 left-1/2 size-80 -translate-x-1/2 rounded-full bg-violet/10 blur-[100px]" />
        <div className="shell relative">
          <p className="eyebrow">Contact</p>
          <h1 className="font-display mt-3 text-[clamp(2.25rem,6vw,4rem)] font-bold text-white">
            {sent ? 'Message Received' : 'Get in Touch'}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted md:text-lg">
            {sent
              ? "Thanks for reaching out. We'll review your inquiry and get back to you soon."
              : "Whether you're interested in a course, internship program, service, or just want to learn more — we'd love to hear from you."}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="shell grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-start">
          <div className="flex flex-col gap-5">
            {!sent && (
              <div className="rounded-2xl border border-violet/20 bg-card p-5 sm:p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-white">Send Us a Message</h2>
                <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Name *">
                      <input
                        required
                        className={fieldCls}
                        placeholder="Your full name"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </Field>
                    <Field label="Email *">
                      <input
                        required
                        type="email"
                        className={fieldCls}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                      />
                    </Field>
                    <Field label="Phone (optional)">
                      <input
                        className={fieldCls}
                        placeholder="+91 00000 00000"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </Field>
                    <Field label="Interested In">
                      <select
                        className={fieldCls}
                        value={form.interest}
                        onChange={e => setForm({ ...form, interest: e.target.value })}
                      >
                        {interestOptions.map(opt => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>
                  <Field label="Message *">
                    <textarea
                      required
                      rows={5}
                      className={`${fieldCls} resize-none`}
                      placeholder="Tell us what you're looking for or any questions you have..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </Field>
                  <PrimaryButton type="submit" className="w-full py-3">
                    Submit Inquiry
                  </PrimaryButton>
                  <p className="text-center text-xs text-muted/70">
                    Note: This form provides a simulated submission for the prototype. Please contact CYHIVE directly for confirmed communication.
                  </p>
                </form>
              </div>
            )}

            {sent && (
              <div className="rounded-2xl border border-violet/20 bg-card p-8 text-center">
                <p className="text-4xl">✉️</p>
                <h2 className="font-display mt-4 text-xl font-semibold text-white">We'll be in touch</h2>
                <p className="mt-2 text-sm text-muted">You can also explore our programs while you wait.</p>
                <div className="mt-6">
                  <PrimaryButton onClick={() => navigate('#/courses')}>Explore Courses</PrimaryButton>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border border-violet/18 bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-white">Contact Information</h3>
              <div className="mt-5 flex flex-col gap-4 text-sm">
                <div className="flex gap-3">
                  <span>🌐</span>
                  <div>
                    <p className="text-xs text-muted/70">Website</p>
                    <a href="https://www.cyhive.in" className="text-violet-light" target="_blank" rel="noreferrer">
                      www.cyhive.in
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span>✉️</span>
                  <div>
                    <p className="text-xs text-muted/70">Email</p>
                    <p className="text-white/80">Please visit the website for contact email</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span>📍</span>
                  <div>
                    <p className="text-xs text-muted/70">Location</p>
                    <p className="text-white/80">Please visit the website for location details</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-violet/18 bg-card p-6">
              <h3 className="font-display text-lg font-semibold text-white">Follow CYHIVE</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-muted hover:text-white"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/cyhivedev"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 px-3 py-1.5 text-sm text-muted hover:text-white"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <p className="rounded-2xl border border-violet/20 bg-violet/10 px-5 py-3 text-xs text-violet-pale">
              Note: Contact details shown here are for display purposes. Please visit cyhive.in for verified contact information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
