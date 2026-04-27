import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlippingCard } from './ui/flipping-card';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  return (
    <div id="methodology" className="relative pt-24 pb-10 overflow-hidden sm:pt-32 sm:pb-10 lg:pb-10 bg-kai-bg-page">


      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-12 text-center">
            <h1 className="t-hero text-[3.5rem] md:text-[5rem] lg:text-[6.5rem] mb-16 max-w-7xl mx-auto text-kai-fg-primary">
              Método <span className="font-display not-italic font-normal text-kai-brand-olive">KAI</span> de Automação com IA
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20 px-4">
              {/* Column 1 */}
              <div className="flex flex-col items-center">
                <h2 className="t-h2 text-[#849a30] mb-8 text-center lg:h-32 flex items-center">
                  para preparar sua equipe,
                </h2>
                <p className="t-body text-kai-fg-secondary text-center max-w-sm mb-12 lg:h-24">
                  Sua equipe preparada para trabalhar<br /> com IA, com o apoio do nosso<br /> <span className="text-[#849a30] font-bold">AI Maturity</span> para avaliar o nível atual.
                </p>
                <FlippingCard
                  width={340}
                  height={440}
                  bgColor="#849a30"
                  className="border border-white/10"
                  frontContent={
                    <GenericCardFront 
                      colorClass="text-white"
                      data={{
                        imageSrc: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=600&h=450",
                        imageAlt: "KaiAssist AI",
                        title: "",
                        description: "Toque ou passe o mouse para descobrir se você e seu time já estão prontos para a era da Automação com IA"
                      }} 
                    />
                  }
                  backContent={
                    <GenericCardBack 
                      colorClass="text-white"
                      data={{
                        description: "Receba um relatório gratuito sobre o quanto sua empresa está apta para a automação com IA",
                        buttonText: "AI MATURITY"
                      }} 
                    />
                  }
                />
              </div>
              
              {/* Column 2 */}
              <div className="flex flex-col items-center">
                <h2 className="t-h2 text-[#4d633b] mb-8 text-center lg:h-32 flex items-center">
                  estruturar seus processos
                </h2>
                <p className="t-body text-kai-fg-secondary text-center max-w-sm mb-12 lg:h-24">
                  Sua operação organizada com um<br /> <span className="text-[#4d633b] font-bold">Mapeamento Claro de Processos</span> e uma<br /> priorização prática das melhores<br /> oportunidades.
                </p>
                <FlippingCard
                  width={340}
                  height={440}
                  bgColor="#4d633b"
                  className="border border-white/10"
                  frontContent={
                    <GenericCardFront 
                      colorClass="text-white"
                      data={{
                        imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600&h=450",
                        imageAlt: "Mapeamento de Processos",
                        title: "",
                        description: "O Mapeamento de Processos é a chave para preparar sua empresa para a era da automação com IA."
                      }} 
                    />
                  }
                  backContent={
                    <GenericCardBack 
                      colorClass="text-white"
                      data={{
                        description: "Estruture sua automação de forma estratégica e descubra os gargalos do seu negócio.",
                        buttonText: "MAPEAMENTO"
                      }} 
                    />
                  }
                />
              </div>

              {/* Column 3 */}
              <div className="flex flex-col items-center">
                <h2 className="t-h2 text-[#1A3830] mb-8 text-center lg:h-32 flex items-center">
                  com inteligência escalável
                </h2>
                <p className="t-body text-kai-fg-secondary text-center max-w-sm mb-12 lg:h-24">
                  E sua empresa pronta para o <span className="text-[#1A3830] font-bold">Método Kai</span> de automações inteligentes que realmente escalam.
                </p>
                <FlippingCard
                  width={340}
                  height={440}
                  bgColor="#1A3830"
                  className="border border-white/10"
                  frontContent={
                    <GenericCardFront 
                      colorClass="text-white"
                      data={{
                        imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=450",
                        imageAlt: "Método Kai",
                        title: "",
                        description: "O Método Kai: Automação Inteligente desenhada para escalar seu negócio de forma exponencial."
                      }} 
                    />
                  }
                  backContent={
                    <GenericCardBack 
                      colorClass="text-white"
                      data={{
                        description: "Contrate agora mesmo o Método Kai de Automação.",
                        buttonText: "CONTRATAR"
                      }} 
                    />
                  }
                />
              </div>
            </div>
            
            <div className="mt-20 flex justify-center">
              <a
                href="#features"
                className="group inline-flex items-center justify-center px-10 py-4 bg-[#1e3830] border border-white/20 text-lg font-bold rounded-full text-white hover:bg-white hover:text-[#1e3830] transition-all duration-300"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-24 mb-12 text-center opacity-70">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-kai-fg-primary">
                <span className="text-[#849a30]">K</span>nowledge, <span className="text-[#4d633b]">A</span>utomation, <span className="text-[#1A3830]">I</span>ntelligence
              </h2>
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

function GenericCardFront({ data, colorClass }: { data: CardData["front"], colorClass: string }) {
  return (
    <div className="flex flex-col h-full w-full p-6">
      <div className="relative aspect-[4/3] w-full mb-6 overflow-hidden rounded-xl border border-black/10 shadow-inner">
        <img
          src={data.imageSrc}
          alt={data.imageAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="flex flex-col items-center justify-center text-center px-2">
        <p className={cn("text-lg md:text-[20px] font-bold leading-tight drop-shadow-sm", colorClass)}>
          {data.description}
        </p>
      </div>
    </div>
  );
}

function GenericCardBack({ data, colorClass = "text-zinc-950" }: { data: CardData["back"], colorClass?: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-10 text-center">
      <p className={cn("text-[22px] font-bold leading-snug mb-10", colorClass)}>
        {data.description}
      </p>
      <a 
        href="#pricing"
        className="bg-zinc-950 text-white px-12 py-4 rounded-full font-black text-[18px] transition-all hover:scale-105 hover:bg-zinc-800 shadow-2xl tracking-widest uppercase"
      >
        {data.buttonText}
      </a>
    </div>
  );
}

export default Hero;