import React from 'react';
import { Rocket, Palette, Code2, Zap } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Performance First',
    desc: 'Fast, accessible, SEO-friendly builds that delight users and search engines alike.',
  },
  {
    icon: Palette,
    title: 'Design with Intent',
    desc: 'Minimal, modern UI that aligns with your brand and elevates your message.',
  },
  {
    icon: Code2,
    title: 'Handcrafted Code',
    desc: 'No bloat. Clean architecture and maintainable code for long-term success.',
  },
  {
    icon: Zap,
    title: 'Interactive Details',
    desc: 'Micro-interactions and motion that add polish—never distraction.',
  },
];

export default function Features() {
  return (
    <section className="relative w-full bg-white py-20" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Focused on what matters</h2>
          <p className="mt-3 text-gray-600">A streamlined process to ship top-tier websites with clarity and speed.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
