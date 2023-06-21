import { ReactNode } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/Header/Header";
import styles from "./Dashboard.module.scss";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.page}>
      <Header />
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export { Dashboard };
