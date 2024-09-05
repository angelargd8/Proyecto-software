import "../Components/FormaPagoImg.css";

function FormaPagoImg({ currentType }) {
  return (
    <>
      <div className="imgContainer">
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
