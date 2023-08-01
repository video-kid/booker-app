import TabPanel from "./partials/TabPanel";
import TabButton from "./partials/TabButton";
import { TabsProps } from "./types";
import styles from "./Tabs.module.scss";
import { useTabs } from "./useTabs";

const Tabs = ({ tabsConfig, selectedTabKey }: TabsProps) => {
  const { currentTab, setTab } = useTabs(
    tabsConfig,
    selectedTabKey ?? Object.keys(tabsConfig)[0]
  );

  return currentTab ? (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        {Object.keys(tabsConfig).map((tabId, key) => (
          <TabButton
            key={key}
            onClick={() => setTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
            label={tabsConfig[tabId].label}
          >
            {tabsConfig[tabId].label}
          </TabButton>
        ))}
      </nav>
      <div className={styles.panel}>
        <TabPanel
          label={tabsConfig[currentTab].label}
          content={tabsConfig[currentTab].panelContent}
        />
      </div>
    </div>
  ) : null;
};

export { Tabs };
