import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Funcionalidades', href: '#features' },
    { name: 'Metodologia', href: '#methodology' },
    { name: 'Planos', href: '#pricing' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-kai-cream-100/90 backdrop-blur-md border-b border-kai-cream-300 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/assets/logoKaiAssist2.png" alt="kaiAssist" className="h-8" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-kai-cream-700 hover:text-kai-forest-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-kai-forest-700 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-kai-forest-600 transition-all active:scale-95 shadow-sm">
              Iniciar avaliação
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-kai-cream-700 hover:text-kai-forest-500 hover:bg-kai-cream-200 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-kai-cream-300 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-kai-cream-700 hover:text-kai-forest-500 hover:bg-kai-cream-50 transition-all"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-kai-cream-200 px-3">
              <button className="w-full bg-kai-forest-700 text-white py-3 rounded-full font-semibold shadow-md active:scale-95 transition-transform">
                Iniciar avaliação
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;