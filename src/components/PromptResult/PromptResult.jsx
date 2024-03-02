import React, { useEffect } from "react";
import styles from "./PromptResult.module.css";
import PlotHookCard from "../PlotHookCard";

function PromptResults({
  plotHooks, // array of { id, prompt, plotHook }
}) {
  return (
    <>
      <section id="Prompt Results" className={styles.prompts}>
        {plotHooks.length > 0 &&
          plotHooks.map((plotHook) => {
            return <PlotHookCard key={plotHook.id} prompt={plotHook.prompt} plotHook={plotHook.plotHook} />;
          })}
      </section>
    </>
  );
}

export default PromptResults;
