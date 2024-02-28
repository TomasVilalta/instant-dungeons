import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <img src="./public/instant-dungeons-Logo.png" alt="Instant Dungeons Logo" className={styles.logo} />

        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Github</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
