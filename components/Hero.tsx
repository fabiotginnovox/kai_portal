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
          <div className="lg:col-span-12 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto">
              Transforme seu Dia com <span className="text-kai-accent">KaiAssist</span>:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kai-accent to-emerald-400">
                Pequenas Automações, Grande Impacto.
              </span>
            </h1>

            <p className="mt-4 text-xl text-kai-muted max-w-3xl mx-auto font-light">
              Descubra o assistente de IA que libera seu tempo das tarefas repetitivas.
              <br />Automação inteligente, resultados instantâneos.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-full text-kai-black bg-kai-accent hover:bg-kai-accentHover transition-all shadow-[0_0_20px_rgba(163,198,68,0.4)] hover:shadow-[0_0_30px_rgba(163,198,68,0.6)]"
              >
                Começar Agora
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-kai-muted/30 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all"
              >
                Saiba Mais
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
          <div className="lg:col-span-12 mt-16 relative group max-w-5xl mx-auto w-full">
            <div className="relative rounded-2xl bg-[#0d1610] border border-kai-accent/20 shadow-[0_0_50px_rgba(163,198,68,0.15)] overflow-hidden transform transition-transform duration-500 aspect-[16/10] flex flex-col">

              {/* Fake Browser Header */}
              <div className="h-10 bg-[#1a2e20] border-b border-kai-accent/10 flex items-center px-6 gap-2 z-20 relative">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="ml-auto text-[10px] text-kai-accent/70 uppercase tracking-[0.2em] font-mono">LIVE_SESSION_ACTIVE</div>
              </div>

              {/* Chat Content Background (Circuit Board Style) */}
              <div className="relative flex-1 bg-[#050a06] overflow-hidden flex flex-col">
                {/* Circuit Board Pattern Simulation */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute top-10 left-10 w-32 h-32 border border-kai-accent/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-20 right-20 w-40 h-40 border border-kai-accent/20 rounded-full blur-3xl opacity-50" />
                </div>

                {/* Chat Bubble from Image */}
                <div className="relative z-10 p-8 flex flex-col items-center justify-center h-full">
                  <div className="bg-[#e8f5e9] text-[#1a2e20] p-6 rounded-2xl rounded-tl-none max-w-lg shadow-xl transform animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-sm md:text-base leading-relaxed font-medium">
                      Olá! 😊 Sou o <span className="font-bold text-kai-black">KaiAssist</span>, seu parceiro de produtividade.
                      Estou aqui para eliminar as pequenas tarefas que te atrasam. Imagine o que podemos fazer juntos!
                      <br /><br />
                      Qual é a primeira automação que você gostaria de explorar?
                    </p>
                  </div>
                </div>

                {/* Input Area Simulation */}
                <div className="p-4 bg-kai-dark/80 backdrop-blur-sm border-t border-kai-accent/10 mt-auto">
                  <div className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                    <span className="text-kai-muted text-sm flex-1">Descreva sua próxima automação criativa aqui...</span>
                    <div className="bg-kai-accent text-kai-black p-2 rounded-lg">
                      <Send size={18} />
                    </div>
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