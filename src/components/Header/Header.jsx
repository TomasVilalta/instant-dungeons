import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/instant-dungeons-Logo.png";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          {/* <img src={logo} alt="Instant Dungeons Logo" className={styles.logo} />
          <a href="" className={styles.nameTitle}>
            Instant Dungeons
          </a> */}
          <Logo />
        </div>

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
