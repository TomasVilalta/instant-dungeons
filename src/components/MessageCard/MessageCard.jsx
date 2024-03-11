import React from "react";
import styles from "./MessageCard.module.css";

function MessageCard({
  type, //error, success, warning, info
  title,
  message,
  icon,
  className,
}) {
  const cardStyle = `${styles.card} ${styles[type]} ${className}`;
  return (
    <article className={cardStyle}>
      {icon}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p>{message}</p>
      </div>
    </article>
  );
}

export default MessageCard;
