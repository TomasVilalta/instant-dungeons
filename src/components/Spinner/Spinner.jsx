import React from "react";
import styles from "./Spinner.module.css";

const LOADING_MESSAGES = [
  "Calling the goblins...",
  "Feeding the dragons...",
  "Polishing the swords...",
  "Sharpening the axes...",
  "Hunting the trolls...",
  "Finding the treasure...",
  "Defeating the orcs...",
  "Brewing potions...",
];

function Spinner({ style }) {
  const randomMessage =
    LOADING_MESSAGES[Math.floor(Math.random() * LOADING_MESSAGES.length)];

  return (
    <div className={styles.wrap}>
      <span style={style} className={styles.loader}></span>
      {randomMessage}
    </div>
  );
}

export default Spinner;
