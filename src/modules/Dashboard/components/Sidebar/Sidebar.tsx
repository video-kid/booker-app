import Link from "next/link";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
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
