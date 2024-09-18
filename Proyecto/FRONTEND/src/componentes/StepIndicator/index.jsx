const StepIndicator = ({ children, style }) => {
  return (
    <label style={{ ...styles.circleIndicator, ...style }}>{children}</label>
  );
};

const styles = {
  circleIndicator: {
    position: "absolute",
    top: 5,
    left: 5,
    fontSize: "16px",
    padding: "2px 5px",
    alignItems: "center",
    borderRadius: "100%",
    background: "#1F3350",
    color: "white",
  },
};

export default StepIndicator;
