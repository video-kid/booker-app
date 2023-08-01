import { useState } from "react";
import { TabConfig } from "./types";

export const useTabs = (
  tabsConfig: TabConfig,
  selectedTabKey: keyof TabConfig
): {
  setTab: (label: keyof TabConfig) => void;
  currentTab: string | number;
} => {
  const [selectedTab, changeTab] = useState<keyof TabConfig>(selectedTabKey);
  const setTab = (label: keyof TabConfig) => changeTab(label);

  let currentTab: keyof TabConfig;

  if (Object.keys(tabsConfig).length && tabsConfig[selectedTab]) {
    currentTab = selectedTab;
  } else {
    currentTab = Object.keys(tabsConfig).length && Object.keys(tabsConfig)[0];
  }

  return {
    setTab,
    currentTab,
  };
};
