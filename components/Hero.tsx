import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlippingCard } from './ui/flipping-card';

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
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl mx-auto">
              Transforme seu Dia com <span className="text-kai-accent">KaiAssist</span>:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kai-accent to-emerald-400">
                Pequenas Automações, Grande Impacto.
              </span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-kai-muted max-w-3xl mx-auto font-light">
              Descubra o assistente de IA que libera seu tempo das tarefas repetitivas.
              <br className="hidden md:block" />Automação inteligente, resultados instantâneos.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <FlippingCard
                width={350}
                height={400}
                frontContent={
                  <GenericCardFront 
                    data={{
                      imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=300",
                      imageAlt: "KaiAssist AI",
                      title: "",
                      description: "Toque ou passe o mouse para descobrir se você e seu time já estão prontos para a era da Automação com IA"
                    }} 
                  />
                }
                backContent={
                  <GenericCardBack 
                    data={{
                      description: "Receba um relatório gratuito sobre o quanto sua empresa está apta para a automação com IA",
                      buttonText: "AI MATURITY"
                    }} 
                  />
                }
              />
              
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-kai-muted/30 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all mt-6"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardData {
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

function GenericCardFront({ data }: { data: CardData["front"] }) {
  return (
    <div className="flex flex-col h-full w-full p-4">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="w-full h-auto object-cover flex-grow min-h-0 rounded-md"
      />
      <div className="p-4 flex flex-col items-center justify-center text-center">
        <p className="text-[16px] font-medium text-zinc-900 leading-relaxed">
          {data.description}
        </p>
      </div>
    </div>
  );
}

function GenericCardBack({ data }: { data: CardData["back"] }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-8 text-center">
      <p className="text-[18px] font-semibold text-zinc-900 leading-tight">
        {data.description}
      </p>
      <a 
        href="#demo"
        className="mt-8 bg-[#95B142] text-zinc-950 px-10 py-3 rounded-full font-bold text-[16px] transition-all hover:scale-105 shadow-[0_4px_15px_rgba(149,177,66,0.3)] tracking-wide uppercase"
      >
        {data.buttonText}
      </a>
    </div>
  );
}

export default Hero;