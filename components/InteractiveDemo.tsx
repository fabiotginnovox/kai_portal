import React, { useState, useRef, useEffect, useContext } from 'react';
import { Send, Loader2, Bot, User, Download } from 'lucide-react';
import { sendMessageToKai } from '../services/geminiService';
import { ChatMessage } from '../types';
import { AuthContext } from '../contexts/AuthContext';
import { getAssistantSessionId, saveAssistantSessionId, getUserToken, getAnonymousUserToken, deleteAnonymousUserToken, deleteAssistantSessionId } from '@/contexts/DataContext';
import { AssistantService } from '@/clients/innocore';
import MessageText from './MessageText/MessageText';


const InteractiveDemo: React.FC = () => {
  const { createAnonymousUser } = useContext(AuthContext);
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá! 😊 Sou o KaiAssist, seu parceiro de produtividade. Estou aqui para eliminar as pequenas tarefas que te atrasam. Imagine o que podemos fazer juntos!\n\nQual é a primeira automação que você gostaria de explorar?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length === 1) return;
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // This runs on component mount (including page refresh)
    const initializeOnRefresh = () => {
      deleteAnonymousUserToken();
      deleteAssistantSessionId();
    };

    initializeOnRefresh();
  }, []);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    // Check authentication directly from localStorage instead of context
    const hasToken = !!getUserToken() || !!getAnonymousUserToken();
    if (!hasToken) {
      await createAnonymousUser();
    }
    let sessionId: string = "";
    if (!getAssistantSessionId()) {
      const session = await AssistantService.createBusinessAutomationAnalysisAssistantCreateBusinessAutomationAnalysisPost();
      sessionId = session.id;
      saveAssistantSessionId(sessionId);
    } else {
      sessionId = getAssistantSessionId()!;
    }

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToKai(userMessage.text, sessionId);
      const botMessage: ChatMessage = {
        role: 'model',
        text: response.message.content,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setBlueprint(response.blueprint || null);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDownloadBlueprint = () => {
    if (!blueprint) return;

    const blob = new Blob([blueprint], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `blueprint-${new Date().toISOString()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <section id="demo" className="py-24 bg-[#08100b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experimente o <span className="text-kai-accent">KaiAssist</span> Agora
          </h2>
          <p className="text-kai-muted max-w-2xl mx-auto">
            Veja como o assistente "plug-and-play" responde instantaneamente.
            Sem configurações complicadas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-kai-card border border-kai-muted/20 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="p-4 bg-kai-dark border-b border-white/5 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            <div className="ml-auto text-xs text-kai-muted uppercase tracking-widest font-mono">LIVE_SESSION_ACTIVE</div>
            {blueprint && (
              <button
                onClick={handleDownloadBlueprint}
                className="ml-3 p-2 bg-kai-accent text-kai-black rounded-lg hover:bg-kai-accentHover transition-colors flex items-center gap-2"
                title="Download Blueprint"
              >
                <Download size={16} />
                <span className="text-xs font-medium">Blueprint</span>
              </button>
            )}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-kai-card to-kai-black">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'model' ? 'bg-kai-accent text-kai-black' : 'bg-white/10 text-white'}`}>
                  {msg.role === 'model' ? <Bot size={18} /> : <User size={18} />}
                </div>
                <MessageText content={msg.text} userSent={msg.role === 'user'} />
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kai-accent text-kai-black flex items-center justify-center">
                  <Bot size={18} />
                </div>
                <div className="bg-kai-dark border border-kai-accent/20 rounded-2xl p-4 flex items-center gap-2">
                  <span className="text-xs text-kai-accent animate-pulse">Pensando</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-kai-accent rounded-full animate-bounce delay-75"></div>
                    <div className="w-1 h-1 bg-kai-accent rounded-full animate-bounce delay-150"></div>
                    <div className="w-1 h-1 bg-kai-accent rounded-full animate-bounce delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-kai-dark border-t border-white/5">
            <form onSubmit={handleSend} className="relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Descreva sua próxima automação criativa aqui..."
                className="w-full bg-kai-card text-white pl-4 pr-12 py-4 rounded-xl border border-white/10 focus:border-kai-accent focus:ring-1 focus:ring-kai-accent outline-none placeholder-kai-muted/50 transition-all"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-2 top-2 p-2 bg-kai-accent text-kai-black rounded-lg hover:bg-kai-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>

        {/* Comparison Text Block */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 text-sm text-kai-muted">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-kai-accent rounded-full"></span>
              Posicionamento KaiAssist
            </h4>
            <p>É a versão "plug-and-play" do ecossistema KAI — simples, acessível e voltada para produtividade imediata.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-600 rounded-full"></span>
              Posicionamento KaiAssist Pro
            </h4>
            <p>É o assistente para empresas que querem automação real. Enquanto o KaiAssist trabalha por tarefa, o KaiAssist Pro trabalha por processo.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveDemo;