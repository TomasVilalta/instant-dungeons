import React, { Children } from "react";
import styles from "./Tooltip.module.css";

function Tooltip({ children }) {
  return <div className={styles.tooltip}>{children}</div>;
}

export default Tooltip;
