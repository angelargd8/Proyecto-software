import "./pago.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate } from "react-router-dom";
import Carrusel from "./Components/carrusel";
import BtnFormaPago from "./Components/FormaPagoBtn";
import { useState, useEffect } from "react";
import FormaPagoImg from "./Components/FormaPagoImg";
import { motion } from "framer-motion";
import MobileNav from "../navbar/components/MobileNav";
import MobileHdr from "./Components/MobileHdr";
import CarritoBtn from "./Components/CarritoBtn";

function Pago() {
  const navigate = useNavigate();
  const [formTitle, setFormtitle] = useState("Tarjeta");
  const [isAnimating, setIsAnimating] = useState(false);
  const [pagoTypeImg, setPagoTypeImg] = useState(
    "https://i0.wp.com/clubdecompras.tv/wp-content/uploads/2020/05/logo-pago-tarjeta-1.png?fit=512%2C512&ssl=1"
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showTitle, setShowTitle] = useState(true);
  const [nextTitle, setNextTitle] = useState(formTitle);

  const images = [
    "https://i0.wp.com/clubdecompras.tv/wp-content/uploads/2020/05/logo-pago-tarjeta-1.png?fit=512%2C512&ssl=1",
    "https://cdn-icons-png.flaticon.com/512/3832/3832329.png",
    "https://png.pngtree.com/png-clipart/20230406/original/pngtree-bank-deposit-line-icon-png-image_9030315.png",
  ];

  useEffect(() => {}, [formTitle]);

  const handleRegresar = () => {
    navigate("/carrito");
  };

  const handleConfirmPago = () => {
    navigate("/resumen");
  };

  const extraStyles = {
    marginRight: "2.5%",
    marginLeft: "2.5%",
    marginTop: "5%",
  };

  const handlePagoType = (text) => {
    setFormtitle(text);
    setIsAnimating(!isAnimating);

    if (text == "Tarjeta") {
      setCurrentIndex(0);
      setPagoTypeImg(images[0]);
    } else if (text == "Efectivo") {
      setCurrentIndex(1);
      setPagoTypeImg(images[1]);
    } else if ((text = "Deposito")) {
      setCurrentIndex(2);
      setPagoTypeImg(images[2]);
    }
  };
  return (
    <>
      <div className="contenedor-pago">
        <MobileHdr title={"Detalles de Pedido"} lastPath={"/carrito"} />
        <div className="MidyBotmPago">
          <div className="columnPasosPagar">
            <div className="pasosP">
              <div
                className="nombrePaso "
                style={{ backgroundColor: "transparent", color: "#1B4965" }}
                onClick={() => handleRegresar()}
              >
                {" "}
                Direccion
              </div>
              <div className="separador"> ------------- </div>
              <div
                className="nombrePaso"
                style={{ backgroundColor: "#1B4965", color: "white" }}
              >
                {" "}
                Forma de Pago
              </div>
              <div className="separador"> ------------- </div>
              <div
                className="nombrePaso"
                style={{ backgroundColor: "transparent", color: "#1B4965" }}
                onClick={() => handleConfirmPago()}
              >
                {" "}
                Ultimo Paso
              </div>
            </div>
          </div>
          <div className="middleP">
            <FormaPagoImg currentType={pagoTypeImg} />
            <div className="RowFormasPago">
              <BtnFormaPago
                text="Tarjeta"
                extraStyles={extraStyles}
                onClick={handlePagoType}
              />
              <BtnFormaPago
                text="Deposito"
                extraStyles={extraStyles}
                onClick={handlePagoType}
              />
              <BtnFormaPago
                text="Efectivo"
                extraStyles={extraStyles}
                onClick={handlePagoType}
              />
            </div>
            <div className="Formulario">
              <motion.div
                className={"FormTitle"}
                animate={{
                  scale: isAnimating ? 1.5 : 1,
                  rotate: isAnimating ? 360 : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                {formTitle}
              </motion.div>
            </div>
            <div className="ParteVenta">
              <h5
                style={{
                  position: "absolute",
                  bottom: "100%",
                }}
              >
                {" "}
                Detalles de Entrega
              </h5>
              <div className="ubicacion">
                <div className="fotoubi"></div>
                <div className="nombreUbi">
                  Universidad del Valle de Guatemala
                </div>
              </div>
              <div className="divisionLine"></div>
              <div className="receptor">
                <div className="fotoRec"></div>
                <div className="nombreRec">Kimberly Daniela Morales Ortega</div>
              </div>
            </div>
            <div className="PartePago">
              <h5 style={{ position: "absolute", bottom: "100%" }}>
                {" "}
                Metodos de Pago
              </h5>
              <div className="ubicacion">
                <div className="fotoTarj"></div>
                <div className="nombreUbi">Tarjeta de Credito/Debito</div>
              </div>
              <div className="divisionLine" style={{ height: "1.8%" }}></div>
              <div className="receptor">
                <div className="fotoEfct"></div>
                <div className="nombreRec">Efectivo</div>
              </div>
            </div>
            <div className="ParteExtras">
              <h5 style={{ position: "absolute", bottom: "100%" }}>Extras</h5>
              <div className="carruselExtra">
                <Carrusel></Carrusel>
              </div>
            </div>
            <div className="btnContainer">
              <CarritoBtn text={"SIGUIENTE"} nextPath={"/resumen"} />
            </div>
          </div>
          {/* <div className="bottom">
            <img
              className="logotipo"
              src="../src/assets/img/logo.png"
              style={{
                width: 60,
                height: 70,
                marginLeft: "1%",
                marginRight: "2%",
              }}
            />
            Picolin
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Pago;
