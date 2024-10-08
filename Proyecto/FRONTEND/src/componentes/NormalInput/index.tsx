import React from "react";

const NormalInput = ({
  text,
  value,
  onChangeValue,
  style,
  placeHolder,
  name,
  type = "text",
}) => {
  const styles = {
    width: "100%",
    background: "none",
    border: "none",
    borderBottom: "2px solid black",
    padding: "5px 0",
    color: "#1F3350",
    outline: "none",
    ...style,
  };

  return (
    <label style={{ width: "100%" }}>
      {text}
      <input
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
        type={type}
        style={styles}
        name={name}
        placeholder={placeHolder}
      />
    </label>
  );
};

export default NormalInput;
