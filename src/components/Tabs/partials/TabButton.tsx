const TabButton = ({ active = false, children, ...props }) => {
  return (
    <div role="button" {...props}>
      {children}
    </div>
  );
};

export default TabButton;
