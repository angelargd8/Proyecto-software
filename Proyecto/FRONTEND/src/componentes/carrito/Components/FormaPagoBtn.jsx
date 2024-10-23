import "./FormaPagoBtn.scss";
function BtnFormaPago({ text, extraStyles, onClick, contenedorStyles }) {
  return (
    <div className="FormaPagoBtn" style={contenedorStyles}>
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
    </div>
  );
}

export default BtnFormaPago;
