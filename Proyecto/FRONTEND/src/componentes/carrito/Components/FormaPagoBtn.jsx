import "./FormaPagoBtn.scss";
function BtnFormaPago({ text, extraStyles, onClick }) {
  return (
    <>
      <section
        class="portfolio-experiment"
        style={extraStyles}
        onClick={() => onClick(text)}
      >
        <a>
          <span class="text">{text}</span>
          <span class="line -right"></span>
          <span class="line -top"></span>
          <span class="line -left"></span>
          <span class="line -bottom"></span>
        </a>
      </section>
    </>
  );
}

export default BtnFormaPago;
