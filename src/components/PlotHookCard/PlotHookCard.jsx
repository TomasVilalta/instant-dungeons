import React from "react";
import styles from "./PlotHookCard.module.css";
import { CheckCircle, Copy } from "lucide-react";
import { toast } from "sonner";

function PlotHookCard({ prompt, plotHook, animationDelayMs }) {
  const [copied, setCopied] = React.useState(false);
  async function writeClipboardText() {
    try {
      await navigator.clipboard.writeText(plotHook);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (error) {
      toast.error("Failed to copy to clipboard");
    }
  }
  // make prompt lowercase and first letter uppercase
  const promptLowerCase =
    prompt.toLowerCase().charAt(0).toUpperCase() +
    prompt.toLowerCase().slice(1);

  return (
    <article
      className={styles.hookCard}
      style={{ animationDelay: `${animationDelayMs}ms` }}
    >
      <h3 className={styles.promptTitle}>{promptLowerCase}</h3>
      <p>{plotHook}</p>
      <button
        onClick={writeClipboardText}
        className={styles.copyButton}
        disabled={copied}
      >
        {!copied && <Copy className={styles.copyIcon} size={18} />}
        {copied && <CheckCircle className={styles.copyIcon} size={18} />}
      </button>
    </article>
  );
}

export default PlotHookCard;
