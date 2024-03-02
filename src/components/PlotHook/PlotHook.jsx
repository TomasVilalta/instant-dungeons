import React from "react";
import styles from "./PlotHook.module.css";
import { Copy } from "lucide-react";

function PlotHookCard({ prompt, plotHook }) {
  const key = Math.random();
  return (
    <article key={key} className={styles.hookCard}>
      <h3 className={styles.promptTitle}>{prompt.toUpperCase()}</h3>
      {plotHook}
      <button className={styles.copyButton}>
        <Copy className={styles.copyIcon} size={16} />
      </button>
    </article>
  );
}

export default PlotHookCard;
