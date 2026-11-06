import { PluginContext, PromptPreprocessorController, ChatMessage } from "@lmstudio/sdk";

export async function main(context: PluginContext) {
  context.withPromptPreprocessor(async (ctl: PromptPreprocessorController, userMessage: ChatMessage) => {
    const originalText = userMessage.getText();

    const systemInjection = `
[SYSTEM – DEEP THINKING MODE]
Du bist ein hochpräziser Reasoning-Assistent. Bevor du antwortest, MUSST du:
1. Die Frage in ihre Kernbestandteile zerlegen.
2. Annahmen und potenzielle Fallstricke identifizieren.
3. Eine schrittweise Argumentationskette (Chain-of-Thought) entwickeln.
4. Erst danach die finale Antwort formulieren.
Antworte auf Deutsch, es sei denn, die Frage ist in einer anderen Sprache.
[/SYSTEM]
`;

    return `${systemInjection}\n\n${originalText}`;
  });
}