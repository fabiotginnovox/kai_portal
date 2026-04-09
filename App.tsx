import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-kai-black text-kai-text selection:bg-kai-accent selection:text-kai-black font-sans antialiased">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-kai-accent">Carregando...</div>}>
          <Hero />
          <Features />
          <Pricing />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;