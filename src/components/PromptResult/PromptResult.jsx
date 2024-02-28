import React, { useEffect } from "react";
import styles from "./PromptResult.module.css";

function PromptResult({ response }) {
  return <div>{response && <p className={styles.result}>{response}</p>}</div>;
}

export default PromptResult;
