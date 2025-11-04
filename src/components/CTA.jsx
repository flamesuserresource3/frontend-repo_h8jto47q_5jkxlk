import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full bg-white py-20" id="contact">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-rose-50 px-8 py-14 text-center shadow-sm">
        <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Ready to build something exceptional?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          I partner with founders and small teams to launch thoughtful websites that perform. Share your goals and I'll craft a clear plan.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@yourstudio.com?subject=Project%20Inquiry"
            className="rounded-xl bg-rose-600 px-6 py-3 text-white shadow-sm transition hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-600/20"
          >
            Email Me
          </a>
          <a
            href="#services"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          >
            View Services
          </a>
        </div>
        <p className="mt-6 text-xs text-gray-500">Currently booking limited projects for this quarter</p>
      </div>
    </section>
  );
}
