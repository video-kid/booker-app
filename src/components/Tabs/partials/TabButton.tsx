import styles from "../Tabs.module.scss";

type TabButtonProps = {
  active: boolean;
  children: JSX.Element | string;
  label: string;
  onClick: () => void;
};

const TabButton = ({
  active = false,
  children,
  label,
  ...props
}: TabButtonProps) => {
  return (
    <div
      role="tab"
      aria-selected={active}
      aria-controls={label}
      id={label}
      className={styles.button}
      {...props}
    >
      {children}
    </div>
  );
};

export default TabButton;
