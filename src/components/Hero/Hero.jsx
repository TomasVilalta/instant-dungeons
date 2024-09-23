import styles from "./Hero.module.css";
import PromptInput from "../PromptInput/PromptInput";
import PromptResults from "../PromptResult/PromptResult";
import useGemini from "../../hooks/useGemini";
import Spinner from "../Spinner/Spinner";
import MessageCard from "../MessageCard/MessageCard";
import { XCircle as Error } from "lucide-react";

function Hero() {
  const [generateContent, plotHooks, isLoading, error] = useGemini();

  const handlePrompt = async (e, prompt) => {
    await generateContent({ prompt });
  };

  return (
    <>
      <main>
        <div id="home" className={styles.hero}>
          <h2 className={styles.title}>
            Just-add-water plot hooks for your TTRPGs
          </h2>
          <p className={styles.subtitle}>
            Just type in a location, character, or event and we'll get you some
            adventure ideas.
            <br /> Hell, your players may never notice you were not prepared.
          </p>
          <PromptInput handleSubmit={handlePrompt} disabled={isLoading} />
        </div>

        <section id="Prompt Results" className={styles.promptResults}>
          {isLoading && <Spinner style={{ marginTop: "64px" }} />}
          {!error && <PromptResults plotHooks={plotHooks} />}

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
