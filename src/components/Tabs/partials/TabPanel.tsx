const TabPanel = ({
  content,
  label,
}: {
  content: JSX.Element;
  label: string;
}) => {
  return (
    <div id={label} role="tabpanel" tabIndex={0} aria-labelledby={label}>
      {content}
    </div>
  );
};

export default TabPanel;
