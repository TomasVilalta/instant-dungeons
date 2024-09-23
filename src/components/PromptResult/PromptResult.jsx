import React, { useEffect } from "react";
import styles from "./PromptResult.module.css";
import PlotHookCard from "../PlotHookCard";

function PromptResults({
  plotHooks, // array of { id, prompt, plotHook }
}) {
  return (
    <>
      <div className={styles.cards}>
        {plotHooks.length > 0 &&
          plotHooks.map((plotHook, index) => {
            return (
              <PlotHookCard
                key={plotHook.id}
                prompt={plotHook.prompt}
                plotHook={plotHook.plotHook}
                animationDelayMs={index * 50}
              />
            );
          })}
      </div>
    </>
  );
}

export default PromptResults;
