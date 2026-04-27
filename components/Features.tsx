import React from 'react';
import { Network, BarChart3, Bot, CheckCircle2 } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Seg', value: 40 },
  { name: 'Ter', value: 30 },
  { name: 'Qua', value: 60 },
  { name: 'Qui', value: 45 },
  { name: 'Sex', value: 80 },
  { name: 'Sab', value: 90 },
  { name: 'Dom', value: 75 },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-kai-bg-page relative">
       <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Intelligent Workflows */}
          <div className="group relative bg-[#EAE7DD] border border-[#D9D5C7] rounded-[40px] p-8 overflow-hidden hover:shadow-xl transition-all duration-500 shadow-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-kai-accent/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="t-label text-[#849a30] mb-2 block">CONHECIMENTO</span>
                  <h3 className="t-h3 text-[#1f3830] text-3xl font-display">Fluxos de Trabalho Inteligentes</h3>
                </div>
                <Network className="text-[#1f3830] w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-white/40 rounded-2xl border border-[#D9D5C7] p-4 flex items-center justify-center">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-lg bg-[#1f3830]/10 border border-[#1f3830]/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#1f3830] rounded-full"></div>
                    </div>
                    <div className="w-8 h-[2px] bg-[#1f3830]/10"></div>
                    <div className="w-10 h-10 rounded-lg bg-[#849a30]/20 border border-[#849a30]/40 flex items-center justify-center animate-pulse">
                         <div className="w-2 h-2 bg-[#849a30] rounded-full"></div>
                    </div>
                     <div className="w-8 h-[2px] bg-[#1f3830]/10"></div>
                    <div className="w-10 h-10 rounded-lg bg-[#1f3830]/10 border border-[#1f3830]/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#1f3830] rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="t-body text-[#4A4538] text-lg mb-6 min-h-[60px] leading-relaxed">
              O KaiAssist organiza informações, responde mensagens e executa tarefas de marketing e suporte instantaneamente.
            </p>

            <ul className="space-y-3 mb-8">
                {['Responder E-mails', 'Criar Resumos', 'Triagem de Suporte'].map(item => (
                    <li key={item} className="flex items-center text-sm text-[#6B6557]">
                        <CheckCircle2 className="w-4 h-4 text-[#849a30] mr-3" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end">
                <span className="text-xl font-display italic text-[#1f3830]">kaiAssist</span>
            </div>
          </div>

          {/* Card 2: Data-Driven Insights */}
          <div className="group relative bg-[#EAE7DD] border border-[#D9D5C7] rounded-[40px] p-8 overflow-hidden hover:shadow-xl transition-all duration-500 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="t-label text-[#4d633b] mb-2 block">AUTOMAÇÃO</span>
                  <h3 className="t-h3 text-[#1f3830] text-3xl font-display">Insights Baseados em Dados</h3>
                </div>
                <BarChart3 className="text-[#1f3830] w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-white/40 rounded-2xl border border-[#D9D5C7] overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4d633b" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#4d633b" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#EAE7DD', border: '1px solid #D9D5C7', borderRadius: '12px' }}
                            itemStyle={{ color: '#4d633b' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#4d633b" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <p className="t-body text-[#4A4538] text-lg mb-6 min-h-[60px] leading-relaxed">
              Análise estratégica e preparação de relatórios. O KaiAssist entende o contexto profundo do seu negócio.
            </p>

            <ul className="space-y-3 mb-8">
                {['Dashboards Ativos', 'Resumos de KPI', 'Contexto de Mercado'].map(item => (
                    <li key={item} className="flex items-center text-sm text-[#6B6557]">
                        <CheckCircle2 className="w-4 h-4 text-[#4d633b] mr-3" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end gap-2">
                <span className="text-xl font-display italic text-[#1f3830]">kaiAssist</span>
                <span className="bg-[#4d633b]/10 text-[#4d633b] text-[10px] font-bold px-2 py-0.5 rounded border border-[#4d633b]/20 uppercase tracking-tighter">Plus</span>
            </div>
          </div>

          {/* Card 3: Strategic AI Agents */}
          <div className="group relative bg-[#EAE7DD] border border-[#D9D5C7] rounded-[40px] p-8 overflow-hidden hover:shadow-xl transition-all duration-500 shadow-sm">
            <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="t-label text-[#1f3830] mb-2 block">INTELIGÊNCIA</span>
                  <h3 className="t-h3 text-[#1f3830] text-3xl font-display">Agentes de IA Estratégicos</h3>
                </div>
                <Bot className="text-[#1f3830] w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-white/40 rounded-2xl border border-[#D9D5C7] relative overflow-hidden flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-12 h-12 rounded-full border-2 border-[#1f3830]/40 bg-[#1f3830]/5 flex items-center justify-center shadow-[0_0_15px_rgba(31,56,48,0.2)]">
                        <div className="w-2 h-2 bg-[#1f3830] rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute w-20 h-20 rounded-full border border-[#1f3830]/10 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#849a30] rounded-full"></div>
                    </div>
                    <div className="absolute w-24 h-24 rounded-full border border-[#1f3830]/5 animate-reverse-spin">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-[#1f3830]/40 rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="t-body text-[#4A4538] text-lg mb-6 min-h-[60px] leading-relaxed">
              Crie agentes personalizados que conectam sistemas e automatizam fluxos inteiros da sua empresa.
            </p>

            <ul className="space-y-3 mb-8">
                {['Fluxos de Automação', 'Integração de APIs', 'Agentes Multi-Task'].map(item => (
                    <li key={item} className="flex items-center text-sm text-[#6B6557]">
                        <CheckCircle2 className="w-4 h-4 text-[#1f3830] mr-3" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end gap-2">
                <span className="text-xl font-display italic text-[#1f3830]">kaiAssist</span>
                <span className="bg-[#1f3830] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Pro</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;