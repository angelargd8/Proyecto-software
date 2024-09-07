import "./FormaPagoBtn.scss";
function BtnFormaPago({ text, extraStyles, onClick }) {
  return (
    <>
      <section
        className="portfolio-experiment"
        style={extraStyles}
        onClick={() => onClick(text)}
      >
        <a>
          <span className="text">{text}</span>
          <span className="line -right"></span>
          <span className="line -top"></span>
          <span className="line -left"></span>
          <span className="line -bottom"></span>
        </a>
      </section>
    </>
  );
}

export default BtnFormaPago;
