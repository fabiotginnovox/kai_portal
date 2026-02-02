import { AssistantService, MessageCreate } from "@/clients/innocore";
import { getAssistantSessionId, saveAssistantSessionId } from "@/contexts/DataContext";

export const sendMessageToKai = async (message: string, sessionId: string): Promise<string> => {
  try {
    const response = await AssistantService.iterateBusinessAutomationAnalysisAssistantIterateBusinessAutomationAnalysisPost(
      sessionId,
      [{
        content: message,
      }]
    )
    return response.content || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Erro ao comunicar com KaiAssist:", error);
    return "Ocorreu um erro ao conectar com o serviço. Verifique sua conexão e tente novamente.";
  }
};