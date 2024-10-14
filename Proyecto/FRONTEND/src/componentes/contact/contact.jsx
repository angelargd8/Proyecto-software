import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact body">
        <div className="info">
          <h1 className="main-text">Contáctanos</h1>
          <h1 className="second-text">¡Estamos para servirte!</h1>
        </div>

        <div className="cuadro">
          <div className="container-image">
            <div className="imagen"></div>
          </div>
          <div className="container-info">
            <div className="contact-info">
              <h1 className="text">WhatsApp: 3706-7222</h1>
              <h1 className="text">Correo: picolinescolor@gmail.com </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
