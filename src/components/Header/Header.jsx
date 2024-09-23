import React from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { History, Info, Settings2 } from "lucide-react";
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
            <Settings2 />
          </NavButton>
          <NavButton className={styles.menuButton} onClick={toggleMenu}>
            <History />
          </NavButton>
          <NavButton className={styles.menuButton} onClick={toggleMenu}>
            <Info />
          </NavButton>

          <nav className={styles.navigation}>
            {isOpen && (
              <Drawer handleDismiss={toggleMenu}>
                <ul className={styles.drawerNavigationList}>
                  <li>
                    <NavButton className={styles.navButton}>Home</NavButton>
                  </li>{" "}
                </ul>
              </Drawer>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
