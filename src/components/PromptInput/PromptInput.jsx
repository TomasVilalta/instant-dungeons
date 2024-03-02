import React from "react";
import styles from "./PromptInput.module.css";
import { Sparkles } from "lucide-react";

function PromptInput({ handleSubmit, disabled }) {
  const [prompt, setPrompt] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, prompt);
      }}
      className={styles.promptForm}
    >
      <label htmlFor="promptInput"></label>
      {/* <i className={styles.icon}>
          <Sparkles size={24} />
        </i> */}
      <input
        className={styles.promptInput}
        disabled={disabled}
        id="promptInput"
        type="search"
        required
        placeholder="City, Forest, Dungeon, etc."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input className={styles.submitButton} type="submit" value="Generate!" />
    </form>
  );
}

export default PromptInput;
