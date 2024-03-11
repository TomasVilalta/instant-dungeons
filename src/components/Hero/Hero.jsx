import React from "react";
import styles from "./Hero.module.css";
import PromptInput from "../PromptInput/PromptInput";
import PromptResults from "../PromptResult/PromptResult";
import useGemini from "../../hooks/useGemini";
import Spinner from "../Spinner/Spinner";
import MessageCard from "../MessageCard/MessageCard";
import { XCircle as Error } from "lucide-react";

function Hero() {
  const [generateContent, response, isLoading, error] = useGemini();

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
          {!error && <PromptResults plotHooks={response} />}

          {isLoading && <Spinner />}
          {error && (
            <MessageCard
              className={styles.errorCard}
              type="error"
              title={error}
              message="Please try again or try a different prompt"
              icon={<Error />}
            />
          )}
        </section>
      </main>
    </>
  );
}

export default Hero;
