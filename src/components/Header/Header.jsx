import { useState } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import { Info, Settings2 } from "lucide-react";
import Drawer from "../Drawer/Drawer";
import NavButton from "../NavButton";
import Tooltip from "../Tooltip/Tooltip";
import GeminiConfigPanel from "../GeminiConfigPanel/GeminiConfigPanel";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState(null);

  const toggleMenu = (panel) => {
    if (isOpen && activePanel === panel) {
      setIsOpen(false);
      setActivePanel(null);
    } else {
      setIsOpen(true);
      setActivePanel(panel);
    }
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
          <NavButton
            className={styles.menuButton}
            onClick={() => toggleMenu("settings")}
            active={isOpen && activePanel === "settings"}
          >
            <Settings2 />
          </NavButton>
          <NavButton
            className={styles.menuButton}
            onClick={() => toggleMenu("info")}
            active={isOpen && activePanel === "info"}
          >
            <Info />
          </NavButton>
          <nav className={styles.navigation}>
            {isOpen && (
              <Drawer handleDismiss={() => setIsOpen(false)}>
                <ul className={styles.drawerNavigationList}>
                  <li>
                    {activePanel === "settings" && <GeminiConfigPanel />}
                    {activePanel === "info" && (
                      <div className={styles.infoPanel}>
                        <h3>About Instant Dungeons</h3>
                        <p>
                          Instant Dungeons is a web application that utilizes AI
                          to generate plot hooks on the go for tabletop
                          role-playing games.
                        </p>
                        <p>
                          Just drop in a location and we&apos;ll generate some
                          plot hooks for you. You can use them to kickstart your
                          next adventure, get some inspiration, or straight up
                          throw them at your players to see where they take you!
                        </p>
                        <p>
                          <a
                            href="https://github.com/TomasVilalta/instant-dungeons"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Instant Dungeons is open source!
                          </a>
                        </p>
                      </div>
                    )}
                  </li>
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
