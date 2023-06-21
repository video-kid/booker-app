import Link from "next/link";
import styles from "./Header.module.css";
import dashboardStyles from "../../Dashboard.module.scss";

const Header = () => {
  return (
    <header className={`${styles.header} ${dashboardStyles.header}`}>
      <Link className={styles.logo} href="/">
        Booker
      </Link>
    </header>
  );
};

export { Header };
