import React from "react";
import styles from "./PlotHook.module.css";
import { Copy } from "lucide-react";
import { toast } from "sonner";

function PlotHookCard({ prompt, plotHook }) {
  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(plotHook);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <article className={styles.hookCard}>
      <h3 className={styles.promptTitle}>{prompt.toUpperCase()}</h3>
      {plotHook}
      <button onClick={writeClipboardText} className={styles.copyButton}>
        <Copy className={styles.copyIcon} size={18} />
      </button>
    </article>
  );
}

export default PlotHookCard;
