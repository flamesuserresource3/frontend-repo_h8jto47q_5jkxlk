import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top bar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-extrabold tracking-tight">Flames Studio</a>
          <nav className="hidden gap-6 text-sm text-gray-600 sm:flex">
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Portfolio />
        <CTA />
      </main>

      <footer className="border-t border-gray-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Imprint</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
