import React from "react";
import styles from "./PromptInput.module.css";

function PromptInput() {
  const [prompt, setPrompt] = React.useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("submit:", prompt);
  };
  return (
    <form onSubmit={handleSumit} className={styles.searchForm}>
      <label htmlFor="promptInput">
        <input
          className={styles.searchInput}
          id="promptInput"
          type="text"
          placeholder="Enter a location or setting"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <input className={styles.submitButton} type="submit" value="Generate!" />
    </form>
  );
}

export default PromptInput;
