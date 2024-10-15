const StepIndicator = ({ children, style }) => {
  return (
    <div style={{ ...styles.circleIndicator, ...style }}>
      <div
        style={{
          position: "absolute",
          left: 8,
          bottom: 1,
        }}
      >
        {children}
      </div>
    </div>
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
    height: 25,
    width: 25,
  },
};

export default StepIndicator;
