import styles from "../Tabs.module.scss";

type TabButtonProps = {
  active: boolean;
  children: JSX.Element | string;
  onClick: () => void;
};

const TabButton = ({ active = false, children, ...props }: TabButtonProps) => {
  return (
    <div role="button" {...props} className={styles.button}>
      {children}
    </div>
  );
};

export default TabButton;
