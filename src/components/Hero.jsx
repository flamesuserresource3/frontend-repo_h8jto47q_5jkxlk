import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for readability (doesn't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-1 text-sm text-gray-600 backdrop-blur-sm">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-rose-500" />
          Independent Web Studio
        </div>
        <h1 className="mt-6 font-[800] leading-tight text-gray-900" style={{fontSize: 'clamp(2.2rem, 4vw + 1rem, 4rem)'}}>
          Clean, handcrafted websites with uncompromising quality
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600">
          I design and build modern, performant websites tailored to your brand—no templates, just thoughtful craft and precision.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#work"
            className="rounded-xl bg-gray-900 px-6 py-3 text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/20"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-gray-900 transition hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
