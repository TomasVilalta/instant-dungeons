import styles from "./NavButton.module.css";

function NavButton({ href, children, className = "", icon, active, ...rest }) {
  const Tag = href ? "a" : "button";
  const buttonStyle = `${styles.navButton} ${
    active ? styles.active : ""
  } ${className}`;

  return (
    <Tag {...rest} className={buttonStyle} href={href}>
      {icon}
      {children}
    </Tag>
  );
}

export default NavButton;
