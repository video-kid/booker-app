import { ReactNode } from "react";
import styles from "./Section.module.scss";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};

export { Section };
