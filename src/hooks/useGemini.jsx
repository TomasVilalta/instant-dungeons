import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import React, { useEffect } from "react";
import { MODEL_NAME, generationConfig, safetySettings, parts } from "../config/geminiConfig";

export default function useGemini() {
  const [model, setModel] = React.useState(null);
  const [response, setResponse] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(API_KEY);
    setModel(genAI.getGenerativeModel({ model: MODEL_NAME }));
  }, []);

  const generateContent = async ({ prompt }) => {
    setIsLoading(true);
    setIsError(false);
    const promptSet = [...parts, { text: `input: ${prompt}` }];
    try {
      const result = await model.generateContent({
        contents: [{ role: "user", parts: promptSet }],
        generationConfig,
        safetySettings,
      });
      const response = await result.response;
      setIsLoading(false);
      setResponse(response.text());
      return response.text();
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
