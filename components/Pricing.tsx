import React from 'react';
import { Check, Zap, Rocket, Building2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Iniciante',
      price: 'R$ 49',
      period: '/mês',
      description: 'Ideal para quem está começando a automatizar suas primeiras tarefas.',
      features: [
        '5 Automações Básicas',
        'Suporte por E-mail',
        'Integrações Essenciais',
        'Relatórios Básicos'
      ],
      color: 'kai-pink',
      icon: <Rocket className="w-6 h-6 text-kai-pink" />,
      buttonText: 'Começar Agora'
    },
    {
      name: 'Profissional',
      price: 'R$ 149',
      period: '/mês',
      description: 'Para empresas que buscam escala e inteligência operacional real.',
      features: [
        '50 Automações Avançadas',
        'Suporte Prioritário (Chat/E-mail)',
        'Integrações Avançadas (APIs)',
        'Relatórios Detalhados',
        'Treinamento Inicial'
      ],
      color: 'kai-yellow',
      icon: <Zap className="w-6 h-6 text-kai-yellow" />,
      buttonText: 'Assinar Plano',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Sob Consulta',
      period: '',
      description: 'Solução sob medida para operações complexas e alto volume.',
      features: [
        'Automações Ilimitadas',
        'Gerente de Conta Dedicado',
        'Integrações Customizadas',
        'Segurança de Nível Corporativo',
        'SLA & Treinamento VIP'
      ],
      color: 'kai-green',
      icon: <Building2 className="w-6 h-6 text-kai-green" />,
      buttonText: 'Falar com Consultor'
    }
  ];

  const colorMap = {
    'kai-pink': {
      text: 'text-kai-pink',
      border: 'border-kai-pink',
      borderBg: 'border-kai-pink/20',
      bg: 'bg-kai-pink',
      bgOpacity: 'bg-kai-pink/10',
      shadow: 'shadow-[0_0_40px_rgba(255,45,158,0.1)]',
      btnShadow: 'shadow-[0_10px_20px_-5px_rgba(255,45,158,0.3)]',
      hoverBorder: 'hover:border-kai-pink/30'
    },
    'kai-yellow': {
      text: 'text-kai-yellow',
      border: 'border-kai-yellow',
      borderBg: 'border-kai-yellow/20',
      bg: 'bg-kai-yellow',
      bgOpacity: 'bg-kai-yellow/10',
      shadow: 'shadow-[0_0_40px_rgba(255,245,0,0.15)]',
      btnShadow: 'shadow-[0_10px_20px_-5px_rgba(255,245,0,0.3)]',
      hoverBorder: 'hover:border-kai-yellow/30'
    },
    'kai-green': {
      text: 'text-kai-green',
      border: 'border-kai-green',
      borderBg: 'border-kai-green/20',
      bg: 'bg-kai-green',
      bgOpacity: 'bg-kai-green/10',
      shadow: 'shadow-[0_0_40px_rgba(0,255,133,0.1)]',
      btnShadow: 'shadow-[0_10px_20px_-5px_rgba(0,255,133,0.3)]',
      hoverBorder: 'hover:border-kai-green/30'
    }
  };

  return (
    <section id="pricing" className="py-24 bg-kai-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-kai-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plano de Preços - <span className="text-kai-accent">Método KAI</span>
          </h2>
          <p className="text-kai-muted text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para impulsionar sua automação e transformar seu negócio com inteligência escalável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const styles = colorMap[plan.color as keyof typeof colorMap];
            return (
              <div
                key={plan.name}
                className={`relative group bg-kai-card border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular 
                    ? styles.border + '/50 ' + styles.shadow
                    : 'border-white/10 ' + styles.hoverBorder
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-8 bg-kai-yellow text-kai-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                    Popular
                  </div>
                )}

                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-xl ${styles.bgOpacity} border ${styles.borderBg}`}>
                    {plan.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-lg">{plan.name}</div>
                    <div className={`h-1 w-12 ${styles.bg} ml-auto mt-1 rounded-full`} />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-kai-muted text-sm">{plan.period}</span>
                  </div>
                  <p className="text-kai-muted text-sm mt-4 min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start text-sm text-kai-text/80">
                      <Check className={`w-4 h-4 mr-3 mt-0.5 shrink-0 ${styles.text}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${
                    plan.popular
                      ? `${styles.bg} text-kai-black hover:scale-[1.02] ${styles.btnShadow}`
                      : `bg-white/5 text-white border border-white/10 hover:bg-white/10 ${styles.hoverBorder.replace('/30', '/50')}`
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
