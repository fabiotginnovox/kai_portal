import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-kai-black/80 backdrop-blur-md border-b border-kai-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="text-3xl font-bold tracking-tighter">
              <span className="text-[#FF2D9E]">k</span><span className="text-[#FFF500]">a</span><span className="text-[#00FF85]">i</span><span className="text-white">Assist</span>
            </div>
            <div className="hidden sm:block text-[10px] uppercase tracking-widest text-kai-muted ml-2 pt-2 border-l border-kai-muted pl-2 leading-3">
              Your Intelligent<br/>Assistant
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-kai-text hover:text-kai-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Sobre</a>
              <a href="#features" className="text-kai-text hover:text-kai-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Funcionalidades</a>
              <a href="#pricing" className="text-kai-text hover:text-kai-accent px-3 py-2 rounded-md text-sm font-medium transition-colors">Planos</a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <button className="text-kai-text hover:text-white font-medium text-sm transition-colors">
                Log In
              </button>
              <button className="bg-kai-green text-kai-black hover:scale-105 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,255,133,0.3)]">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-kai-text hover:text-white hover:bg-kai-card focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-kai-card border-b border-kai-muted/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="text-kai-text hover:text-kai-accent block px-3 py-2 rounded-md text-base font-medium">Sobre</a>
            <a href="#features" className="text-kai-text hover:text-kai-accent block px-3 py-2 rounded-md text-base font-medium">Funcionalidades</a>
            <a href="#pricing" className="text-kai-text hover:text-kai-accent block px-3 py-2 rounded-md text-base font-medium">Planos</a>
            <div className="mt-4 pt-4 border-t border-kai-muted/20 flex flex-col space-y-3 px-3">
               <button className="text-left text-kai-text hover:text-white font-medium">Log In</button>
               <button className="w-full bg-kai-accent text-kai-black py-2 rounded-full font-bold">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;