import "./MobileHdr.css";
import MobileNav from "../../navbar/components/MobileNav";
import { useNavigate } from "react-router-dom";
import { px } from "framer-motion";

function MobileHdr({ title, lastPath }) {
  const navigate = useNavigate();

  const handleRegresar = () => {
    navigate(`${lastPath}`);
  };

  return (
    <div className="up">
      <div className="regresar">
        <div className="regresarbtn" onClick={() => handleRegresar()}>
          {" "}
          &lt;{" "}
        </div>
      </div>
      <div className="CarritoHeader">
        <div className="titulo">{title}</div>
        <div className="midHeader"></div>
        <div className="logoBox">
          <img
            className="logotipo"
            src="../src/assets/img/logo.png"
            alt=""
            width="60"
            height="70"
          />
        </div>
      </div>
      <div className="opciones">
        <MobileNav spanColor={"#1b4965"} iconStyles={{ marginBottom: 15 }} />
      </div>
    </div>
  );
}

export default MobileHdr;
