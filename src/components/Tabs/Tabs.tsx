import TabPanel from "./partials/TabPanel";
import TabButton from "./partials/TabButton";
import { useState } from "react";
import { TabConfig, TabsProps } from "./types";
import styles from "./Tabs.module.scss";

const Tabs = ({ tabsConfig, selectedTabKey }: TabsProps) => {
  const [selectedTab, changeTab] = useState<keyof TabConfig>(
    selectedTabKey ?? Object.keys(tabsConfig)[0]
  );

  let currentTab: keyof TabConfig;
  if (Object.keys(tabsConfig).length && tabsConfig[selectedTab]) {
    currentTab = selectedTab;
  } else {
    currentTab = Object.keys(tabsConfig).length && Object.keys(tabsConfig)[0];
  }

  return currentTab ? (
    <div className={styles.wrapper}>
      <nav className={styles.navigation}>
        {Object.keys(tabsConfig).map((tabId, key) => (
          <TabButton
            key={key}
            onClick={() => changeTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
          >
            {tabsConfig[tabId].label}
          </TabButton>
        ))}
      </nav>
      <div className={styles.panel}>
        <TabPanel content={tabsConfig[currentTab].panelContent} />
      </div>
    </div>
  ) : null;
};

export { Tabs };
