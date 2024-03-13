import React from "react";
import styles from "./Header.module.css";
import aaa from "../NavButton/NavButton.module.css";
import logo from "../../assets/instant-dungeons-Logo.png";
import Logo from "../Logo/Logo";
import { Cog, Info, Menu, Settings } from "lucide-react";
import Drawer from "../Drawer";
import NavButton from "../NavButton";
import Tooltip from "../Tooltip/Tooltip";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Tooltip>
            <Logo />
          </Tooltip>
        </div>
        <div className={styles.right}>
          <NavButton className={styles.menuButton} onClick={toggleMenu}>
            <Menu />
          </NavButton>
          <nav className={styles.navigation}>
            {/* Desktop nav */}
            <ul className={styles.navigationList}>
              <NavListItems />
            </ul>
            {/* Mobile nav */}
            {isOpen && (
              <Drawer handleDismiss={toggleMenu}>
                <ul className={styles.drawerNavigationList}>
                  <NavListItems />
                </ul>
              </Drawer>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

function NavListItems() {
  return (
    <>
      <li>
        <NavButton className={styles.navButton}>Home</NavButton>
      </li>
      <li>
        <NavButton className={styles.navButton}>Settings</NavButton>
      </li>
      <li>
        <NavButton className={styles.navButton}>About</NavButton>
      </li>
    </>
  );
}

export default Header;
