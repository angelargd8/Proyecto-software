function DataRow({ placeHolder, dataName, value, onChange }) {
  return (
    <div
      className="dataRow"
      style={{
        display: "flex",
        flexDirection: "row",
        height: "10%",
        width: "100%",
        alignItems: "center",
        marginBottom: 50,
      }}
    >
      <div
        className="leftColumn"
        style={{
          height: "100%",
          width: "50%",
          alignContent: "flex-start",
        }}
      >
        <div style={{ color: "#1b4965", fontWeight: "bolder" }}>{dataName}</div>
      </div>
      <div
        className="rightColumn"
        style={{
          display: "flex",
          height: "100%",
          width: "50%",
          justifyContent: "flex-end",
        }}
      >
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeHolder}
          style={{
            backgroundColor: "#1b49653f",
            borderRadius: 5,
            border: 0,
            padding: 5,
            color: "#1b4965",
          }}
        ></input>
      </div>
    </div>
  );
}

export default DataRow;
