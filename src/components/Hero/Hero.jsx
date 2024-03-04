import React from "react";
import styles from "./Hero.module.css";
import PromptInput from "../PromptInput/PromptInput";
import PromptResults from "../PromptResult/PromptResult";
import useGemini from "../../hooks/useGemini";
import Spinner from "../Spinner/Spinner";

function Hero() {
  const [generateContent, response, isLoading, isError] = useGemini();

  const handlePrompt = async (e, prompt) => {
    await generateContent({ prompt });
  };

  return (
    <>
      <main>
        <section id="home" className={styles.hero}>
          <h2 className={styles.title}>
            Generate Plot Hooks for Your Tabletop RPG <strong>Instantly</strong>
          </h2>
          <p className={styles.subtitle}>
            Get custom plot hooks ready to use in your next game. (Or maybe the one you are running{" "}
            <strong>right now</strong> and that you haven't prepared for. Oops!)
          </p>
          <PromptInput handleSubmit={handlePrompt} disabled={isLoading} />
        </section>

        <section id="Prompt Results" className={styles.promptResults}>
          <PromptResults plotHooks={response} />

          {isLoading && <Spinner />}
          {isError && <p>Something went wrong. Try again later.</p>}
        </section>
      </main>
    </>
  );
}

export default Hero;
