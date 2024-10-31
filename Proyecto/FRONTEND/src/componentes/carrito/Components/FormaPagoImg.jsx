import "../Components/FormaPagoImg.css";

function FormaPagoImg({ currentType, styles }) {
  return (
    <>
      <div className="imgContainer" style={styles}>
        <div
          className="FormaPagoImg"
          style={{
            backgroundImage: `url(${currentType})`,
            transition: "background-image 0.5s ease-in-out",
          }}
        ></div>
      </div>
    </>
  );
}

export default FormaPagoImg;
