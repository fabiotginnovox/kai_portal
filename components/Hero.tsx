import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ScrollingList from './ScrollingList';

const Hero: React.FC = () => {
  return (
    <div id="about" className="relative pt-24 pb-12 overflow-hidden sm:pt-32 sm:pb-24 lg:pb-32 bg-kai-black">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-kai-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kai-card border border-kai-accent/20 mb-6">
              <Sparkles className="w-4 h-4 text-kai-accent" />
              <span className="text-xs font-medium text-kai-accent tracking-wide uppercase">Novo: KaiAssist Pro</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Executive Automation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kai-accent to-emerald-400">
                AI: Elevate Efficiency
              </span>
            </h1>

            <p className="mt-4 text-lg text-kai-muted max-w-2xl mx-auto lg:mx-0 font-light">
              O assistente inteligente pronto-para-uso da InnoVox.
              Ele resume, organiza, responde e executa tarefas operacionais sem precisar configurar nada complicado.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-kai-black bg-kai-accent hover:bg-kai-accentHover transition-all shadow-[0_0_20px_rgba(163,198,68,0.4)] hover:shadow-[0_0_30px_rgba(163,198,68,0.6)]"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-kai-muted/30 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            {/* Alien Text Graphic from image reference */}
            <div className="mt-10 opacity-30 select-none hidden lg:block">
              <p className="font-mono text-[10px] tracking-[0.5em] text-kai-accent">
                01010100 01000001 0101011 01001011 00100000 01000101 01011000 01000101 01000011
              </p>
              <p className="font-mono text-[10px] tracking-[0.3em] text-kai-muted mt-1">
                SYSTEM_OPTIMIZED::THREAD_ALLOCATED::KAI_CORE_ACTIVE
              </p>
            </div>
          </div>

          {/* Hero Image / Interface Mockup */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative group">
            <div className="relative rounded-xl bg-kai-dark border border-kai-muted/20 shadow-2xl overflow-hidden transform group-hover:scale-[1.01] transition-transform duration-500 aspect-video">
              {/* Fake Browser Header */}
              <div className="h-8 bg-[#1a2e20] border-b border-kai-muted/10 flex items-center px-4 gap-2 z-20 relative">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                <div className="ml-4 h-4 w-64 bg-white/5 rounded-full"></div>
              </div>

              {/* Dashboard Content Mockup */}
              <div className="relative w-full h-full bg-[#0d1610]">
                {/* 1. Chart Background - Moved to background, low opacity */}
                <div className="absolute bottom-0 left-0 w-full h-48 px-10 pb-10 flex items-end gap-2 opacity-20 pointer-events-none">
                  <div className="w-1/5 h-[40%] bg-kai-accent/40 rounded-t"></div>
                  <div className="w-1/5 h-[70%] bg-kai-accent/60 rounded-t"></div>
                  <div className="w-1/5 h-[50%] bg-kai-accent/50 rounded-t"></div>
                  <div className="w-1/5 h-[90%] bg-kai-accent rounded-t"></div>
                  <div className="w-1/5 h-[65%] bg-kai-accent/70 rounded-t"></div>
                </div>

                {/* 2. Scrolling List - Foreground of the chart, Main Content */}
                <div className="absolute inset-0 z-10">
                  <ScrollingList />
                </div>

                {/* 3. Floating Widget - Top Right Only */}
                <div className="absolute inset-0 flex flex-col p-6 lg:p-10 bg-gradient-to-t from-kai-dark via-transparent to-transparent pointer-events-none z-20 opacity-80">
                  <div className="self-end bg-kai-card/90 backdrop-blur-md p-3 rounded-lg border border-kai-accent/20 mb-4 w-56 shadow-lg transform translate-x-2 animate-pulse">
                    <div className="h-1.5 w-20 bg-kai-accent rounded mb-1.5"></div>
                    <div className="h-1.5 w-full bg-white/10 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-white/10 rounded mt-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Companion Mockup */}
            <div className="absolute -bottom-6 -right-4 w-32 md:w-48 bg-kai-card rounded-2xl border border-kai-accent/30 shadow-2xl p-2 transform rotate-[-5deg] lg:rotate-[-8deg] hover:rotate-0 transition-transform duration-300 z-20">
              <div className="h-full w-full bg-kai-dark rounded-xl overflow-hidden flex flex-col">
                <div className="p-3 border-b border-white/5 flex justify-between items-center">
                  <div className="w-6 h-6 rounded-full bg-kai-accent/20 flex items-center justify-center text-[10px] text-kai-accent">K</div>
                </div>
                <div className="p-3 space-y-2">
                  <div className="bg-white/5 p-2 rounded-lg rounded-tl-none text-[8px] text-gray-300">
                    Resumo da reunião enviado.
                  </div>
                  <div className="bg-kai-accent/10 p-2 rounded-lg rounded-tr-none text-[8px] text-kai-accent text-right border border-kai-accent/20">
                    Perfeito, obrigado!
                  </div>
                </div>
                <div className="mt-auto p-3 flex justify-center pb-4">
                  <div className="w-8 h-8 rounded-full bg-kai-accent flex items-center justify-center shadow-[0_0_10px_rgba(163,198,68,0.5)]">
                    <div className="w-2 h-2 bg-kai-black rounded-full animate-ping"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;