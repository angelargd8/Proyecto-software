import logo from '../../assets/img/logo.png';
import "./contact.css";
import { LogoWhatsapp, MailOutline } from 'react-ionicons';

function Contact() {
  return (
    <>
      <div className="contact body">
        <div className="ContainerContac">
          <div className="info">
            <h1 className="main-text"> Contáctanos </h1>
            <h1 className="second-text">¡Estamos para servirte!</h1>
          </div>
          <hr />
          <div className="cuadro">
            <div className="container-image">
              <div className="imagen"
                style={{
                  backgroundImage: `url(${logo})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '100%',
                  height: '315px',
                }}>
              </div>
            </div>
            <div className="container-info">
              <div className="contact-info">
                <h1 className="text">
                  <LogoWhatsapp color="#cea44a" />
                  :3706-7222
                </h1>
                <h1 className="text">
                  <MailOutline color="#cea44a" />
                  :picolinescolor@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
