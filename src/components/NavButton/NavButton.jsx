import React from "react";
import styles from "./NavButton.module.css";
import { Github } from "lucide-react";

function NavButton({ href, children, className, icon, ...rest }) {
  const Tag = href ? "a" : "button";
  const buttonStyle = `${styles.navButton} ${className}`;

  return (
    <Tag className={buttonStyle} href={href} {...rest}>
      {icon}
      {children}
    </Tag>
  );
}

export default NavButton;
