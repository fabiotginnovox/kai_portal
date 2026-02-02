import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kai-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter text-kai-accent">
              kai<span className="text-white">Assist</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-sm text-kai-muted">
             <a href="#" className="hover:text-white transition-colors">Documentation</a>
             <a href="#" className="hover:text-white transition-colors">Pricing</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-xs text-kai-muted/50">
            © {new Date().getFullYear()} InnoVox. Powered by Gemini.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;