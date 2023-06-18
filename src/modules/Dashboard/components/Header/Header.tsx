import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/">
        Booker
      </Link>
    </header>
  );
};

export default Header;
