import Link from "next/link";
import styles from "./Sidebar.module.css";
import dashboardStyles from "../../Dashboard.module.scss";
import { useState } from "react";

export const Sidebar = () => {
  const [sidebarHide, setSidebarHide] = useState<boolean>(false);
  return (
    <aside
      className={`${styles.sidebar} ${dashboardStyles.sidebar} ${
        sidebarHide ? dashboardStyles.hidden : ""
      }`}
    >
      <button className={"button"} onClick={() => setSidebarHide(!sidebarHide)}>
        hide
      </button>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link className={styles.menuElement} href="/bands">
              Bands List
            </Link>
          </li>
          <li>
            <Link className={styles.menuElement} href="/events">
              Events List
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
