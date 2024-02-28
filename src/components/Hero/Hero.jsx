import React from "react";

import styles from "./Hero.module.css";
import DragonMouse from "../DragonMouse/DragonMouse";

function Hero() {
  const [prompt, setPrompt] = React.useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    console.log("submit:", prompt);
  };

  return (
    <>
      <main>
        <section id="home" className={styles.hero}>
          <h1 className={styles.nameTitle}>Instant Dungeons</h1>
          <h2 className={styles.title}>
            Generate Plot Hooks for Your Tabletop RPG <strong>Instantly</strong>
          </h2>
          <p className={styles.subtitle}>
            Give a place, location or setting and we'll generate some plot hooks ready to use in your next game. (Or the
            one you are running <strong>right now</strong> and didn't prepare for. Oops!)
          </p>

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
        </section>
      </main>
    </>
  );
}

export default Hero;
