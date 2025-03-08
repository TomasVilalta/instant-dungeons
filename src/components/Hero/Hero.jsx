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
            Just-add-water <strong>plot hooks</strong> for your TTRPGs
          </h2>
          <p className={styles.subtitle}>
            No prep? No problem. Drop in a location, and we&apos;ll whip up
            fresh adventure hooks in seconds—so you can run a great game on the
            fly.
          </p>
          <PromptInput handleSubmit={handlePrompt} disabled={isLoading} />
        </div>

        <section id="Prompt Results" className={styles.promptResults}>
          {isLoading && <Spinner style={{ marginTop: "64px" }} />}
          {error && (
            <MessageCard
              className={styles.errorCard}
              type="error"
              title={"Sorry!"}
              message="We couldn't generate a response for that prompt. Plase try again or try a different prompt."
              icon={<Error />}
            />
          )}
          <PromptResults plotHooks={plotHooks} />
        </section>
      </main>
    </>
  );
}

export default Hero;
