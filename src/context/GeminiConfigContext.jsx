import { createContext, useContext, useState, useEffect } from "react";
import { generationConfig as defaultGenerationConfig } from "../config/geminiConfig";

const GeminiConfigContext = createContext();

export function GeminiConfigProvider({ children }) {
  const [generationConfig, setGenerationConfig] = useState(() => {
    const savedConfig = localStorage.getItem("geminiConfig");
    return savedConfig ? JSON.parse(savedConfig) : defaultGenerationConfig;
  });

  useEffect(() => {
    localStorage.setItem("geminiConfig", JSON.stringify(generationConfig));
  }, [generationConfig]);

  const updateConfig = (newConfig) => {
    setGenerationConfig({ ...generationConfig, ...newConfig });
  };

  const resetConfig = () => {
    setGenerationConfig(defaultGenerationConfig);
  };

  return (
    <GeminiConfigContext.Provider
      value={{ generationConfig, updateConfig, resetConfig }}
    >
      {children}
    </GeminiConfigContext.Provider>
  );
}

export function useGeminiConfig() {
  const context = useContext(GeminiConfigContext);
  if (context === undefined) {
    throw new Error(
      "useGeminiConfig must be used within a GeminiConfigProvider"
    );
  }
  return context;
}
