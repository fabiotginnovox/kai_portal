import React, { useState, useRef, useEffect, useContext } from 'react';
import { Send, Loader2, Bot, User, Download } from 'lucide-react';
import { sendMessageToKai, sendMessageToKaiMaturidade } from '../services/geminiService';
import { ChatMessage } from '../types';
import { AuthContext } from '../contexts/AuthContext';
import { getAssistantSessionId, saveAssistantSessionId, getUserToken, getAnonymousUserToken, deleteAnonymousUserToken, deleteAssistantSessionId } from '@/contexts/DataContext';
import { KaiAssistService } from '@/clients/innocore';
import MessageText from './MessageText/MessageText';


const InteractiveDemo: React.FC = () => {
  const { createAnonymousUser } = useContext(AuthContext);
  const [analysisMode, setAnalysisMode] = useState<'Automação' | 'Maturidade'>('Automação');
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [maturidade, setMaturidade] = useState<string | null>(null);
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
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`;
    }
  };

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    if (messages.length === 1) return;
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    adjustTextareaHeight();
  }, [inputValue]);

  useEffect(() => {
    // This runs on component mount (including page refresh)
    const initializeOnRefresh = () => {
      deleteAnonymousUserToken();
      deleteAssistantSessionId();
    };

    initializeOnRefresh();
  }, []);

  const handleSend = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    setIsLoading(true);
    const hasToken = !!getUserToken() || !!getAnonymousUserToken();
    if (!hasToken) {
      await createAnonymousUser();
    }
    let sessionId = getAssistantSessionId();
    if (!sessionId) {
      if (analysisMode === 'Maturidade') {
        const session = await KaiAssistService.createConversationalAssessorKaiAssistCreateConversationalAssessorPost();
        sessionId = session.id;
        saveAssistantSessionId(sessionId);
      }
       else {
        const session = await KaiAssistService.createBusinessAutomationAnalysisKaiAssistCreateBusinessAutomationAnalysisPost();
        sessionId = session.id;
        saveAssistantSessionId(sessionId);
      }
    }

    const userMessage: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    try {
      if (analysisMode === 'Maturidade') {
        const response = await sendMessageToKaiMaturidade(userMessage.text, sessionId);
        const botMessage: ChatMessage = {
          role: 'model',
          text: response.message,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        if (response.handoff) {
          setMaturidade(response.message);
        }
      } else {
        const response = await sendMessageToKai(userMessage.text, sessionId);
        const botMessage: ChatMessage = {
          role: 'model',
          text: response.message.content,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        setBlueprint(response.blueprint || null);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
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

  const handleDownloadMaturidade = () => {
    if (!maturidade) return;

    const blob = new Blob([maturidade], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `maturidade-${new Date().toISOString()}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleToggleAnalysisMode = () => {
    setAnalysisMode((prev) => (prev === 'Automação' ? 'Maturidade' : 'Automação'));
    deleteAssistantSessionId();
    let msg = "";
    if (analysisMode === 'Automação') {
      msg = 'Olá! 😊 Sou o KaiAssist, seu parceiro de produtividade. Vamos começar por analisar o grau de maturidade da sua organização.';
    } else {
      msg = 'Olá! 😊 Sou o KaiAssist, seu parceiro de produtividade. Estou aqui para eliminar as pequenas tarefas que te atrasam. Imagine o que podemos fazer juntos!\n\nQual é a primeira automação que você gostaria de explorar?';
    }
    setMessages([
      {
        role: 'model',
        text: msg,
        timestamp: new Date()
      }]);
    setBlueprint(null);
    setMaturidade(null);
  };

  return (    
    <div id="demo" className="lg:col-span-12 mt-10 relative group max-w-5xl mx-auto w-full">
      <div className="relative rounded-2xl bg-[#0d1610] border border-kai-accent/30 shadow-[0_0_50px_rgba(163,198,68,0.2)] overflow-hidden transform transition-transform duration-500 aspect-[16/10] flex flex-col">

        {/* Fake Browser Header */}
        <div className="h-10 bg-[#1a2e20] border-b border-kai-accent/20 flex items-center px-6 gap-2 z-20 relative">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleAnalysisMode}
              aria-pressed={analysisMode === 'Maturidade'}
              className="relative w-11 h-6 rounded-full transition-colors bg-white/15 border border-white/20"
              title="Alternar entre Automação e Maturidade"
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-kai-accent transition-all ${analysisMode === 'Maturidade' ? 'left-5' : 'left-0.5'}`}
              />
            </button>
            <span className="text-[10px] text-kai-accent tracking-[0.12em] font-mono opacity-90 min-w-[92px] text-right">
              {analysisMode}
            </span>
          </div>
          <div className="text-[10px] text-kai-accent uppercase tracking-[0.2em] font-mono opacity-80">
            LIVE_SESSION_ACTIVE
          </div>
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
            {maturidade && (
              <button
                onClick={handleDownloadMaturidade}
                className="ml-3 p-2 bg-kai-accent text-kai-black rounded-lg hover:bg-kai-accentHover transition-colors flex items-center gap-2"
                title="Download Maturidade"
              >
                <Download size={16} />
                <span className="text-xs font-medium">Maturidade</span>
              </button>
            )}
        </div>

        {/* Chat Content Background (Circuit Board Style) */}
        <div className="relative flex-1 bg-[#050a06] overflow-hidden flex flex-col">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-kai-accent/5 via-transparent to-emerald-900/10" />
            <div className="absolute top-10 left-10 w-64 h-64 border border-kai-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Messages Area */}
          <div ref={messagesContainerRef} className="relative z-10 flex-1 overflow-y-auto p-4 md:p-8 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
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
                  <span className="text-xs text-white animate-pulse font-mono">PROCESSANDO...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-[#0d1610]/95 backdrop-blur-sm border-t border-kai-accent/20 mt-auto z-20">
            <form onSubmit={handleSend} className="flex gap-4 items-end bg-white/5 border border-white/10 rounded-xl px-4 py-1">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={analysisMode === 'Automação' ? "Descreva sua próxima automação criativa aqui..." : "Descreva sua próxima análise de maturidade aqui..."}
                className="bg-transparent text-kai-text text-sm flex-1 py-3 outline-none placeholder:text-kai-muted/50 resize-none overflow-hidden"
                disabled={isLoading}
                rows={1}
                style={{ minHeight: '24px', maxHeight: '128px' }}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-kai-accent text-kai-black p-2 rounded-lg hover:scale-110 transition-transform disabled:opacity-50 flex-shrink-0"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDemo;