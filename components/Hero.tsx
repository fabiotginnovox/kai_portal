import React from 'react';
import { ArrowRight, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageToKai } from '../services/geminiService';
import { ChatMessage } from '../types';
import { getAssistantSessionId, saveAssistantSessionId } from '@/contexts/DataContext';
import { AssistantService } from '@/clients/innocore';
import MessageText from './MessageText/MessageText';

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;