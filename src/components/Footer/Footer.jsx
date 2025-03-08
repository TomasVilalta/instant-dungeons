import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Enjoying Instant Dungeons? Star it on{" "}
      <a
        href="https://github.com/TomasVilalta/instant-dungeons"
        target="_Blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>{" "}
      <span role="img" aria-label="GitHub">
        🌟
      </span>
    </footer>
  );
}

export default Footer;
