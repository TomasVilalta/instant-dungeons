import React from "react";
import styles from "./PromptInput.module.css";

function PromptInput({ handleSubmit, disabled }) {
  const [prompt, setPrompt] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, prompt);
      }}
      className={styles.searchForm}
    >
      <label htmlFor="promptInput">
        <input
          className={styles.searchInput}
          disabled={disabled}
          id="promptInput"
          type="search"
          required
          placeholder="City, Forest, Dungeon, etc."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <input className={styles.submitButton} type="submit" value="Generate!" />
    </form>
  );
}

export default PromptInput;
