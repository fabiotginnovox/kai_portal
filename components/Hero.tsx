import React from 'react';
import { ArrowRight, Send, Bot, User, Loader2 } from 'lucide-react';
import { sendMessageToKai } from '../services/geminiService';
import { ChatMessage } from '../types';
import { getAssistantSessionId, saveAssistantSessionId } from '@/contexts/DataContext';
import { AssistantService } from '@/clients/innocore';
import MessageText from './MessageText/MessageText';

const Hero: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');
  const [messages, setMessages] = React.useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá! 😊 Sou o KaiAssist, seu parceiro de produtividade. Estou aqui para eliminar as pequenas tarefas que te atrasam. Imagine o que podemos fazer juntos!\n\nQual é a primeira automação que você gostaria de explorar?',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    let sessionId = getAssistantSessionId();
    if (!sessionId) {
      try {
        const session = await AssistantService.createBusinessAutomationAnalysisAssistantCreateBusinessAutomationAnalysisPost();
        sessionId = session.id;
        saveAssistantSessionId(sessionId);
      } catch (err) {
        console.error("Erro ao criar sessão:", err);
        sessionId = "hero-demo-session";
      }
    }

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToKai(userMsg.text, sessionId!);
      const botMsg: ChatMessage = { role: 'model', text: response.message.content, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

          {/* Hero Image / Interface Mockup */}
          <div className="lg:col-span-12 mt-16 relative group max-w-5xl mx-auto w-full">
            <div className="relative rounded-2xl bg-[#0d1610] border border-kai-accent/30 shadow-[0_0_50px_rgba(163,198,68,0.2)] overflow-hidden transform transition-transform duration-500 aspect-[16/10] flex flex-col">

              {/* Fake Browser Header */}
              <div className="h-10 bg-[#1a2e20] border-b border-kai-accent/20 flex items-center px-6 gap-2 z-20 relative">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="ml-auto text-[10px] text-kai-accent uppercase tracking-[0.2em] font-mono opacity-80">LIVE_SESSION_ACTIVE</div>
              </div>

              {/* Chat Content Background (Circuit Board Style) */}
              <div className="relative flex-1 bg-[#050a06] overflow-hidden flex flex-col">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-kai-accent/5 via-transparent to-emerald-900/10" />
                  <div className="absolute top-10 left-10 w-64 h-64 border border-kai-accent/10 rounded-full blur-3xl" />
                </div>

                {/* Messages Area */}
                <div className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8 space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'model' ? 'bg-kai-accent text-kai-black' : 'bg-white/10 text-white'}`}>
                        {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
                      </div>
                      <div className={`${msg.role === 'model' ? 'bg-[#e8f5e9] text-[#1a2e20]' : 'bg-kai-card text-white border border-white/10'} p-4 rounded-2xl ${msg.role === 'model' ? 'rounded-tl-none' : 'rounded-tr-none'} max-w-md shadow-lg`}>
                        <MessageText content={msg.text} userSent={msg.role === 'user'} />
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex gap-3">
                      <div className="bg-kai-accent text-kai-black w-8 h-8 rounded-full flex items-center justify-center"><Bot size={18} /></div>
                      <div className="bg-kai-dark border border-kai-accent/20 rounded-2xl p-4 flex items-center gap-2">
                        <span className="text-xs text-kai-accent animate-pulse font-mono">PROCESSANDO...</span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-[#0d1610]/95 backdrop-blur-sm border-t border-kai-accent/20 mt-auto z-20">
                  <form onSubmit={handleSend} className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-xl px-4 py-1">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Descreva sua próxima automação criativa aqui..."
                      className="bg-transparent text-kai-text text-sm flex-1 py-3 outline-none placeholder:text-kai-muted/50"
                      disabled={isLoading}
                    />
                    <button
                      type="submit"
                      disabled={isLoading || !inputValue.trim()}
                      className="bg-kai-accent text-kai-black p-2 rounded-lg hover:scale-110 transition-transform disabled:opacity-50"
                    >
                      {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={18} />}
                    </button>
                  </form>
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