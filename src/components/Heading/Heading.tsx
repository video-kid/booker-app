import React, { ReactNode } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  children: ReactNode;
  level?: "primary" | "secondary" | "terciary" | "subheader";
};

const HeadingLevel = {
  primary(children: ReactNode) {
    return <h1 className={styles.primary}>{children}</h1>;
  },
  secondary(children: ReactNode) {
    return <h2 className={styles.secondary}>{children}</h2>;
  },
  terciary(children: ReactNode) {
    return <h3 className={styles.terciary}>{children}</h3>;
  },
  subheader(children: ReactNode) {
    return <h5 className={styles.subheader}>{children}</h5>;
  },
};

const Heading = ({ children, level = "primary" }: HeadingProps) => {
  return HeadingLevel[level](children);
};

export { Heading };
