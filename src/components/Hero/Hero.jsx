import React from "react";
import styles from "./Hero.module.css";
import PromptInput from "../PromptInput/PromptInput";
import PromptResults from "../PromptResult/PromptResult";
import useGemini from "../../hooks/useGemini";

function Hero() {
  const [generateContent, response, isLoading, isError] = useGemini();

  const handlePrompt = async (e, prompt) => {
    e.preventDefault();
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
            Give us a location and we'll generate some plot hooks ready to use in your next game. (Or maybe the one you
            are running <strong>right now</strong> and that you haven't prepared for. Oops!)
          </p>
          <PromptInput handleSubmit={handlePrompt} disabled={isLoading} />
        </section>

        <PromptResults plotHooks={response} />

        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong. Try again later.</p>}
      </main>
    </>
  );
}

export default Hero;
