import React from "react";
import styles from "./NavButton.module.css";

function NavButton({ href, children, className = "", icon, ...rest }) {
  const Tag = href ? "a" : "button";
  const buttonStyle = `${styles.navButton} ${className}`;
  console.log(buttonStyle);

  return (
    <Tag {...rest} className={buttonStyle} href={href}>
      {icon}
      {children}
    </Tag>
  );
}

export default NavButton;
