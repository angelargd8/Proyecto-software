import React, { useState } from "react";

function DropDown({
  title = "Seleccionar opción",
  options = [],
  onSelect = () => {},
  outerContainerStyles = {},
  innerContainerStyles = {},
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <div style={{ ...styles.container, ...outerContainerStyles }}>
      <div
        style={{ ...styles.trigger, ...innerContainerStyles }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption?.label || title}</span>
        <span style={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {isOpen && (
        <div style={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option.value}
              style={{
                ...styles.option,
                backgroundColor:
                  selectedValue === option.value ? "#f0f0f0" : "white",
              }}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    fontFamily: "Arial, sans-serif",
  },
  trigger: {
    padding: "12px 16px",
    border: "1px solid #1b4965",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",
    color: "#1b4965",
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "white",
    border: "1px solid #1b4965",
    borderRadius: "8px",
    marginTop: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  option: {
    padding: "12px 16px",
    cursor: "pointer",
    color: "#1b4965",
    transition: "background-color 0.2s ease",
    ":hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  arrow: {
    fontSize: "12px",
    color: "#1b4965",
  },
};

export default DropDown;
