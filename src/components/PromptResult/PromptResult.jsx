import React, { useEffect } from "react";
import styles from "./PromptResult.module.css";
import PlotHook from "../PlotHook";

function PromptResults({ plotHooks }) {
  return (
    <>
      <section id="Prompt Results" className={styles.prompts}>
        {plotHooks.length > 0 &&
          plotHooks.map((plotHook) => {
            const id = crypto.randomUUID();
            return <PlotHook key={id} plotHook={plotHook} />;
          })}
      </section>
    </>
  );
}

export default PromptResults;
