import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import React, { useEffect } from "react";
import { MODEL_NAME, generationConfig, safetySettings, parts } from "../config/geminiConfig";
import { splitResponse } from "../helpers/splitResponse";

export default function useGemini() {
  const [model, setModel] = React.useState(null);
  const [response, setResponse] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    setModel(genAI.getGenerativeModel({ model: MODEL_NAME }));
  }, []);

  const generateContent = async ({ prompt }) => {
    setIsLoading(true);
    setResponse([]);
    setIsError(false);
    const promptSet = [...parts, { text: `input: ${prompt}` }];
    console.log("promptSet", promptSet);
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: promptSet }],
        generationConfig,
        safetySettings,
      });
      const data = await result.response;
      setIsLoading(false);
      const plotHooksText = splitResponse(data.text());

      const plotHooks = plotHooksText.map((plotHook) => {
        return {
          id: crypto.randomUUID(),
          prompt: prompt,
          plotHook: plotHook,
        };
      });
      console.log("plotHooks", { plotHooks });

      setResponse(plotHooks);
      return plotHooks;
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      if (err.response.promptFeedback) {
        return "Prompt was blocked due to safety reasons. Try another prompt.";
      }
      if (!err.response.text()) {
        return "No response was generated. Try again or try another prompt.";
      }
      throw new Error("Something went wrong");
    }
  };

  return [generateContent, response, isLoading, isError];
}
