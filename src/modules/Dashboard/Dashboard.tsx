import { ReactNode } from "react";
import { Sidebar } from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export { Dashboard };
