import React from "react";
import styles from "./PromptInput.module.css";
import { Sparkles } from "lucide-react";

const INPUT_SUGGESTIONS = [
  "A small farmer's village...",
  "The spell archive of a wizard guild...",
  "A murder scene involving a nobleman...",
  "A janky art museum...",
  "The dock district of a city, frequented by lowlifes...",
  "The ruins of an ancient castle...",
  "A secret underground fighting ring in the slums...",
  "A cursed battlefield littered with the remnants of war...",
  "A hidden underground cave...",
  "A bustling city market...",
  "A peaceful monastery...",
  "The training grounds of a prestigious knight academy...",
  "An old lady's home the players just broke into...",
];

function PromptInput({ handleSubmit, disabled }) {
  const [prompt, setPrompt] = React.useState("");
  const buttonStyle = `${styles.submitButton} ${disabled && styles.disabled}`;

  const randomSuggestion =
    INPUT_SUGGESTIONS[Math.floor(Math.random() * INPUT_SUGGESTIONS.length)];

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
        placeholder={randomSuggestion}
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
