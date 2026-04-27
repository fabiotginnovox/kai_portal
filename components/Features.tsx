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
          <div className="group relative bg-kai-bg-surface border border-kai-border-default rounded-2xl p-6 overflow-hidden hover:border-kai-accent-primary/40 transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-kai-accent/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
            
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-kai-fg-primary">Intelligent Workflows</h3>
                <Network className="text-kai-accent w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-kai-bg-sunken rounded-xl border border-kai-border-default p-4 flex items-center justify-center">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="w-8 h-[2px] bg-white/10"></div>
                    <div className="w-10 h-10 rounded-lg bg-kai-accent/20 border border-kai-accent/40 flex items-center justify-center animate-pulse">
                         <div className="w-2 h-2 bg-kai-accent rounded-full"></div>
                    </div>
                     <div className="w-8 h-[2px] bg-white/10"></div>
                    <div className="w-10 h-10 rounded-lg bg-emerald-900/40 border border-emerald-500/30 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="text-kai-muted text-sm mb-6 min-h-[60px]">
              O KaiAssist organiza informações, responde mensagens e executa tarefas de marketing e suporte instantaneamente.
            </p>

            <ul className="space-y-2 mb-8">
                {['Responder E-mails', 'Criar Resumos', 'Triagem de Suporte'].map(item => (
                    <li key={item} className="flex items-center text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-kai-accent mr-2" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end">
                <span className="text-lg font-bold text-kai-accent">kaiAssist</span>
            </div>
          </div>

          {/* Card 2: Data-Driven Insights */}
          <div className="group relative bg-kai-card border border-kai-muted/20 rounded-2xl p-6 overflow-hidden hover:border-kai-accent/40 transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-kai-fg-primary">Data-Driven Insights</h3>
                <BarChart3 className="text-kai-accent w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-kai-dark/50 rounded-xl border border-white/5 overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#A3C644" stopOpacity={0.4}/>
                                <stop offset="95%" stopColor="#A3C644" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#0d1610', border: 'none', borderRadius: '8px' }}
                            itemStyle={{ color: '#A3C644' }}
                        />
                        <Area type="monotone" dataKey="value" stroke="#A3C644" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <p className="text-kai-muted text-sm mb-6 min-h-[60px]">
              Análise estratégica e preparação de relatórios. O KaiAssist entende o contexto profundo do seu negócio.
            </p>

            <ul className="space-y-2 mb-8">
                {['Dashboards Ativos', 'Resumos de KPI', 'Contexto de Mercado'].map(item => (
                    <li key={item} className="flex items-center text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-kai-accent mr-2" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end gap-2">
                <span className="text-lg font-bold text-kai-accent">kaiAssist</span>
                <span className="bg-kai-accent/20 text-kai-accent text-[10px] font-bold px-2 py-0.5 rounded border border-kai-accent/30 uppercase tracking-tighter">Plus</span>
            </div>
          </div>

          {/* Card 3: Strategic AI Agents */}
          <div className="group relative bg-kai-bg-surface border border-kai-accent-primary/30 rounded-2xl p-6 overflow-hidden shadow-[0_0_30px_rgba(38,92,74,0.05)] hover:shadow-[0_0_40px_rgba(38,92,74,0.1)] transition-all duration-300">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-kai-fg-primary">Strategic AI Agents</h3>
                <Bot className="text-kai-accent w-6 h-6" />
            </div>

            <div className="h-32 mb-6 bg-kai-dark/50 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute w-12 h-12 rounded-full border-2 border-kai-accent/40 bg-kai-accent/5 flex items-center justify-center shadow-[0_0_15px_rgba(163,198,68,0.3)]">
                        <div className="w-2 h-2 bg-kai-accent rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute w-20 h-20 rounded-full border border-white/10 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div className="absolute w-24 h-24 rounded-full border border-white/5 animate-reverse-spin">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                    </div>
                </div>
            </div>

            <p className="text-kai-muted text-sm mb-6 min-h-[60px]">
              Crie agentes personalizados que conectam sistemas e automatizam fluxos inteiros da sua empresa.
            </p>

            <ul className="space-y-2 mb-8">
                {['Fluxos de Automação', 'Integração de APIs', 'Agentes Multi-Task'].map(item => (
                    <li key={item} className="flex items-center text-xs text-gray-400">
                        <CheckCircle2 className="w-3 h-3 text-kai-accent mr-2" />
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex items-center justify-end gap-2">
                <span className="text-lg font-bold text-kai-accent">kaiAssist</span>
                <span className="bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Pro</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;