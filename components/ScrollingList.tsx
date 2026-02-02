import React from 'react';

const itemList = [
  { issue: 'Tempo perdido em tarefas repetitivas (copiar/colar, preencher, organizar, resumir)', solution: 'automação com IA.' },
  { issue: 'Conhecimento espalhado (docs, e-mails, chats, drive)', solution: 'busca + respostas com contexto e fontes internas.' },
  { issue: 'Atendimento inconsistente (respostas diferentes por pessoa/canal)', solution: 'padronização de tom, playbooks e QA.' },
  { issue: 'Atraso em follow-ups e rotinas (cobranças, retornos, status)', solution: 'agentes que executam/lembram/encaminham.' },
  { issue: 'Baixa qualificação de leads', solution: 'triagem, perguntas-chave, roteamento e registro no CRM.' },
  { issue: 'Onboarding e treinamento lentos', solution: 'tutor interno com “como fazemos aqui” + checklists.' },
  { issue: 'Reuniões viram caos (sem resumo, sem decisão, sem dono)', solution: 'ata, decisões, tarefas e responsáveis.' },
  { issue: 'Operação sem visibilidade (o que trava, onde perde dinheiro)', solution: 'relatórios e alertas de gargalos.' },
  { issue: 'Risco de erro humano (processo manual, variação)', solution: 'validações, templates e trilhas.' },
  { issue: 'Troca constante de contexto (muitas ferramentas, muita aba)', solution: 'interface única por chat/fluxo.' },
  { issue: 'Alto volume de trabalho repetitivo + alto custo de erro', solution: '' },
  { issue: 'Informação crítica distribuída em várias fontes', solution: '' },
  { issue: 'Atendimento/operacional depende de “pessoas-chave”', solution: '' },
  { issue: 'Necessidade de padronização e execução em múltiplos canais', solution: '' },
];

const ScrollingList: React.FC = () => {
  return (
    <div className="relative w-full h-full overflow-hidden mask-linear-gradient">
      {/* Gradient Masks for smooth fade out at top/bottom */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-kai-card to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-15 bg-gradient-to-t from-kai-card to-transparent z-10 pointer-events-none"></div>

      <div className="animate-scroll-vertical hover:pause-animation">
        {/* Render list twice for seamless loop */}
        {[...Array(2)].map((_, listIndex) => (
          <div key={listIndex} className="pb-4">
            {itemList.map((item, index) => (
              <div key={`${listIndex}-${index}`} className="py-3 px-10 font-inter text-sm text-kai-text leading-snug tracking-wide">
                <span className="text-white opacity-95 font-medium shadow-black drop-shadow-md">• {item.issue}</span>
                {item.solution && (
                  <>
                    <span className="mx-2 text-kai-accent opacity-100 font-bold">→</span>
                    <span className="text-white font-semibold drop-shadow-md">{item.solution}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingList;
