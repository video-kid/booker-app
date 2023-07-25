import TabPanel from "./partials/TabPanel";
import TabButton from "./partials/TabButton";
import { useState } from "react";

type SingleTabConfig = {
  label: string;
  panelContent: JSX.Element;
};

type TabConfig = {
  [key: string]: SingleTabConfig;
};

const tabsObj: TabConfig = {
  tab1: {
    label: "tab 1 label",
    panelContent: (
      <div>
        <h1>panel 1 test content</h1>
      </div>
    ),
  },
  tab2: {
    label: "tab 2 label",
    panelContent: (
      <div>
        <div>panel 2 test content</div>
      </div>
    ),
  },
  tab3: {
    label: "tab 3 label",
    panelContent: <h1>panel 3 test content</h1>,
  },
};

const Tabs = ({ selectedTabId = Object.keys(tabsObj)[0] }) => {
  const [selectedTab, changeTab] = useState<keyof TabConfig>(selectedTabId);

  let currentTab: keyof TabConfig;
  if (Object.keys(tabsObj).length && tabsObj[selectedTab]) {
    currentTab = selectedTab;
  } else {
    currentTab = Object.keys(tabsObj).length && Object.keys(tabsObj)[0];
  }

  return currentTab ? (
    <div className="tab-wrapper">
      <nav className="tab-buttons-wrapper">
        {Object.keys(tabsObj).map((tabId, key) => (
          <TabButton
            key={key}
            onClick={() => changeTab(tabId)}
            active={currentTab === tabId}
            data-testid={`tab_${tabId}`}
          >
            {tabsObj[tabId].label}
          </TabButton>
        ))}
      </nav>
      <div className="tab-panels-wrapper">
        <TabPanel content={tabsObj[currentTab].panelContent} />
      </div>
    </div>
  ) : null;
};

export default Tabs;
