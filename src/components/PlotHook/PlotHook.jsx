import React from "react";
import styles from "./PlotHook.module.css";

function PlotHook({ plotHook }) {
  const key = Math.random();
  return (
    <article key={key} className={styles.prompt}>
      {plotHook}
    </article>
  );
}

export default PlotHook;
