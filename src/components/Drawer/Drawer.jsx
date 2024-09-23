import React from "react";
import { X as Close } from "lucide-react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";

import styles from "./Drawer.module.css";

function Drawer({ handleDismiss, children }) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === "Escape") {
        handleDismiss();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleDismiss]);

  return (
    <FocusLock returnFocus={true}>
      <div className={styles.wrapper}>
        {/* <div className={styles.backdrop} onClick={handleDismiss} /> */}
        <div className={styles.drawer}>
          <div>{children}</div>
          <button className={styles.closeBtn} onClick={handleDismiss}>
            <Close size={18} /> Dismiss
          </button>
        </div>
      </div>
    </FocusLock>
  );
}

export default Drawer;
