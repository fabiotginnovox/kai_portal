import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FlippingCard } from './ui/flipping-card';

const Hero: React.FC = () => {
  return (
    <div id="about" className="relative pt-24 pb-10 overflow-hidden sm:pt-32 sm:pb-10 lg:pb-10 bg-kai-black">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-kai-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="lg:col-span-12 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight mb-8 leading-none max-w-5xl mx-auto">
              <span className="block text-kai-accent">Método <span className="bg-kai-dark/60 border border-kai-accent/20 px-3 py-0.5 rounded-lg inline-block align-middle transform -translate-y-[2px]">KAI</span> de Automação com IA</span>
              <span className="block text-[#FF2D9E]">para preparar sua equipe,</span>
              <span className="block text-[#FFF500]">estruturar seus processos</span>
              <span className="block text-[#00FF85]">e transformar sua empresa</span>
              <span className="block text-[#00E0FF]">com inteligência escalável</span>
            </h1>

            <p className="mt-12 text-lg md:text-[1.8rem] max-w-4xl mx-auto font-medium leading-relaxed">
              <span className="block text-[#FF2D9E] mb-2">Sua equipe preparada para trabalhar com IA, com o apoio do nosso AI Maturity para avaliar o nível atual.</span>
              <span className="block text-[#FFF500] mb-2">Sua operação organizada com um mapeamento claro de processos e uma priorização prática das melhores oportunidades.</span>
              <span className="block text-[#00FF85]">E sua empresa pronta para o Método Kai de automações inteligentes que realmente escalam.</span>
            </p>

            <div className="mt-12 flex flex-row flex-wrap items-center justify-center gap-6">
              <FlippingCard
                width={350}
                height={400}
                bgColor="rgba(255, 45, 158, 1)"
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

              <FlippingCard
                width={350}
                height={400}
                bgColor="rgba(255, 246, 2, 1)"
                frontContent={
                  <GenericCardFront 
                    data={{
                      imageSrc: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=400&h=300",
                      imageAlt: "Mapeamento de Processos",
                      title: "",
                      description: "O Mapeamento de Processos é a chave para preparar sua empresa para a era da automação com IA."
                    }} 
                  />
                }
                backContent={
                  <GenericCardBack 
                    data={{
                      description: "Estruture sua automação de forma estratégica e descubra os gargalos do seu negócio.",
                      buttonText: "MAPEAMENTO"
                    }} 
                  />
                }
              />

              <FlippingCard
                width={350}
                height={400}
                bgColor="rgba(14, 255, 132, 1)"
                frontContent={
                  <GenericCardFront 
                    data={{
                      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=300",
                      imageAlt: "Método Kai",
                      title: "",
                      description: "O Método Kai: Automação Inteligente desenhada para escalar seu negócio de forma exponencial."
                    }} 
                  />
                }
                backContent={
                  <GenericCardBack 
                    data={{
                      description: "Contrate agora mesmo o Método Kai de Automação.",
                      buttonText: "CONTRATAR"
                    }} 
                  />
                }
              />
            </div>
            
            <div className="mt-12 flex justify-center">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 border border-kai-muted/30 text-base font-medium rounded-full text-white hover:bg-white/5 transition-all"
              >
                Saiba Mais
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div className="mt-24 mb-6 text-center">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                <span className="text-[#FF2D9E]">K</span>nowledge, <span className="text-[#FFF500]">A</span>utomation, <span className="text-[#00FF85]">I</span>ntelligence
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
        href="#pricing"
        className="mt-8 bg-zinc-950 text-white px-10 py-3 rounded-full font-bold text-[16px] transition-all hover:scale-105 hover:bg-zinc-800 shadow-xl tracking-wide uppercase"
      >
        {data.buttonText}
      </a>
    </div>
  );
}

export default Hero;