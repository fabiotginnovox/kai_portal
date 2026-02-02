import { AssistantService, Business_Analysis_Message } from "@/clients/innocore";

export const sendMessageToKai = async (message: string, sessionId: string): Promise<Business_Analysis_Message> => {
  try {
    const response = await AssistantService.iterateBusinessAutomationAnalysisAssistantIterateBusinessAutomationAnalysisPost(
      sessionId,
      [{
        content: message,
      }]
    )
    if (!response) {
      return {
        message: {
          content: "Desculpe, não consegui obter uma resposta do KaiAssist no momento.",
        },
        blueprint: null,
      }
    }
    return response;
  } catch (error) {
    return {
        message: {
          content: "Desculpe, não consegui obter uma resposta do KaiAssist no momento.",
        },
        blueprint: null,
      }
  }
};