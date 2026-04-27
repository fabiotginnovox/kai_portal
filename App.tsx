import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));
const Features = lazy(() => import('./components/Features'));
const Pricing = lazy(() => import('./components/Pricing'));
const Contact = lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-kai-bg-page text-kai-fg-primary selection:bg-kai-accent-primary selection:text-white font-sans antialiased">
      <Navbar />
      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center text-kai-accent">Carregando...</div>}>
          <Hero />
          <Features />
          <Pricing />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;