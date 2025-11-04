import React from 'react';

const projects = [
  {
    title: 'Lumen Studio',
    role: 'Design + Build',
    link: '#',
    bg: 'from-rose-50 to-white',
  },
  {
    title: 'Northbound',
    role: 'Build',
    link: '#',
    bg: 'from-gray-50 to-white',
  },
  {
    title: 'Harbor & Co',
    role: 'Design',
    link: '#',
    bg: 'from-rose-50 to-white',
  },
];

export default function Portfolio() {
  return (
    <section className="w-full bg-white py-20" id="work">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Selected work</h2>
          <p className="mt-3 text-gray-600">A glimpse into recent projects. Clean, purposeful, and fast.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${p.bg}`} />
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.role}</p>
                </div>
                <div className="text-rose-600 transition group-hover:translate-x-0.5">→</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
