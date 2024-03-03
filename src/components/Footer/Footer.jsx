import React from "react";
import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { ArrowUp, ArrowUp01, ArrowUpCircle, Bug, Github, Mail } from "lucide-react";
import NavButton from "../NavButton/NavButton";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Logo className={styles.logo} />
        <nav className={styles.footerNav}>
          <h2 className={styles.footerTitle}>LINKS</h2>
          <ul className={styles.navItems}>
            <li>
              <NavButton
                href="https://github.com/TomasVilalta/instant-dungeons"
                target="_Blank"
                rel="noopener noreferrer"
                icon={<Github size={16} />}
              >
                Github
              </NavButton>
            </li>
            <li>
              <NavButton
                href="https://github.com/TomasVilalta/instant-dungeons"
                target="_Blank"
                rel="noopener noreferrer"
                icon={<Bug size={16} />}
              >
                Report a Bug
              </NavButton>
            </li>
            <li>
              <NavButton href="mailto:tomasfedericovilalta@gmail.com" icon={<Mail size={16} />}>
                Contact{" "}
              </NavButton>{" "}
            </li>
          </ul>
        </nav>
        <aside>
          <h2 className={styles.footerTitle}>THANKS!</h2>
          <p className={styles.text}>
            I hope you find this project useful! If you are enjoying it, consider giving it a star on{" "}
            <strong>Github!</strong>
          </p>
        </aside>
      </div>
      <small className={styles.footerBottom}>
        Made with 💖 by{" "}
        <a href="https://github.com/TomasVilalta" target="_Blank" rel="noopener noreferrer">
          {" "}
          Tomás Vilalta
        </a>{" "}
      </small>
    </footer>
  );
}

export default Footer;
