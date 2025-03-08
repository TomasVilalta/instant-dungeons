import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import { MODEL_NAME, safetySettings, parts } from "../config/geminiConfig";
import { splitResponse } from "../helpers/splitResponse";
import { useGeminiConfig } from "../context/GeminiConfigContext";

export default function useGemini() {
  const { generationConfig } = useGeminiConfig();
  const [model, setModel] = React.useState(null);
  const [plotHooks, setPlotHooks] = React.useState(() => {
    const plotHooks = window.localStorage.getItem("plotHooks");
    return plotHooks ? JSON.parse(plotHooks) : [];
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    setModel(genAI.getGenerativeModel({ model: MODEL_NAME }));
  }, []);

  const generateContent = async ({ prompt }) => {
    setIsLoading(true);
    setError("");
    const promptSet = [...parts, { text: `input: ${prompt}` }];
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: promptSet }],
        generationConfig,
        safetySettings,
      });
      const data = await result.response;
      setIsLoading(false);

      const plotHooksText = splitResponse(data.text());

      if (plotHooksText === "error") {
        setError("Bad model response");
        return "Bad model response";
      }

      const newPlotHooks = plotHooksText.map((plotHook) => {
        return {
          id: crypto.randomUUID(),
          prompt: prompt,
          plotHook: plotHook,
        };
      });
      const allPlotHooks = [...newPlotHooks, ...plotHooks];
      setPlotHooks(allPlotHooks);
      window.localStorage.setItem("plotHooks", JSON.stringify(allPlotHooks));

      return plotHooks;
    } catch (err) {
      setIsLoading(false);
      setError("Something went wrong");
      throw new Error("Something went wrong");
    }
  };

  return [generateContent, plotHooks, isLoading, error];
}
