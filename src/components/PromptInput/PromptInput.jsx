import React from "react";
import styles from "./PromptInput.module.css";
import { Sparkles } from "lucide-react";

function PromptInput({ handleSubmit, disabled }) {
  const [prompt, setPrompt] = React.useState("");
  const buttonStyle = `${styles.submitButton} ${disabled && styles.disabled}`;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!prompt || disabled) return;
        handleSubmit(e, prompt);
      }}
      className={styles.promptForm}
    >
      <label htmlFor="promptInput"></label>

      <input
        className={`${styles.promptInput}`}
        disabled={disabled}
        id="promptInput"
        type="search"
        placeholder="City, Forest, Dungeon, etc."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className={buttonStyle} type="submit">
        Generate
        <Sparkles className={styles.buttonIcon} />
      </button>
    </form>
  );
}

export default PromptInput;
