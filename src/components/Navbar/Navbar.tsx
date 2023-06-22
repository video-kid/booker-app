import { ReactNode } from "react";
import styles from "./Navbar.module.scss";

type NavbarProps = {
  children: ReactNode;
};

const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <nav className={styles.navbar} {...props}>
      {children}
    </nav>
  );
};

export { Navbar };
