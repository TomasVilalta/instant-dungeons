import React from "react";
import styles from "./Logo.module.css";
import logo from "../../assets/instant-dungeons-Logo.png";

function Logo({ className }) {
  const logoStyle = `${styles.logoContainer} ${className}`;

  return (
    <article className={logoStyle}>
      <img src={logo} alt="Instant Dungeons Logo" className={styles.logo} />
      <a href="" className={styles.nameTitle}>
        Instant Dungeons
      </a>
    </article>
  );
}

export default Logo;
