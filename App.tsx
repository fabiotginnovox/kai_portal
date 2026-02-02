import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import InteractiveDemo from './components/InteractiveDemo';
import Footer from './components/Footer';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-kai-black text-kai-text selection:bg-kai-accent selection:text-kai-black font-sans antialiased">
      <Navbar />
      <main>
        <Hero />

        <Suspense fallback={<div className="h-64 flex items-center justify-center text-kai-accent">Carregando funcionalidades...</div>}>
          <Features />
        </Suspense>
        <InteractiveDemo />
      </main>
      <Footer />
    </div>
  );
};

export default App;