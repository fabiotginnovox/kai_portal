import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-kai-bg-page border-t border-kai-border-default py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tighter">
              <span className="text-kai-pink">k</span><span className="text-kai-olive-600">a</span><span className="text-kai-forest-500">i</span><span className="text-kai-fg-primary">Assist</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-kai-fg-secondary">
             <a href="#" className="t-small hover:text-kai-forest-500 transition-colors">Documentation</a>
             <a href="#" className="t-small hover:text-kai-forest-500 transition-colors">Pricing</a>
             <a href="#" className="t-small hover:text-kai-forest-500 transition-colors">Privacy</a>
             <a href="#" className="t-small hover:text-kai-forest-500 transition-colors">Contact</a>
          </div>

          <div className="t-label text-kai-fg-tertiary">
            © {new Date().getFullYear()} InnoVox. Powered by Gemini.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;