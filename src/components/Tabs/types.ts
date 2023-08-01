export type SingleTabConfig = {
  label: string;
  panelContent: JSX.Element;
};

export type TabConfig = {
  [key: string]: SingleTabConfig;
};

export type TabsProps = {
  tabsConfig: TabConfig;
  selectedTabKey?: keyof TabConfig;
};
