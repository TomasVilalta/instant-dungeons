import React from "react";

import styles from "./Hero.module.css";
import DragonMouse from "../DragonMouse/DragonMouse";
import PromptInput from "../PromptInput/PromptInput";

function Hero() {
  return (
    <>
      <main>
        <section id="home" className={styles.hero}>
          <h2 className={styles.title}>
            Generate Plot Hooks for Your Tabletop RPG <strong>Instantly</strong>
          </h2>
          <p className={styles.subtitle}>
            Give a place, location or setting and we'll generate some plot hooks ready to use in your next game. (Or the
            one you are running <strong>right now</strong> and didn't prepare for. Oops!)
          </p>

          <PromptInput />
        </section>
      </main>
    </>
  );
}

export default Hero;
