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
    <div className="mobileHeaderCont">
      <div className="regresar">
        <div
          className="regresarbtn"
          onClick={() => handleRegresar()}
          style={{ color: "white" }}
        >
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
        <MobileNav spanColor={"white"} iconStyles={{ marginBottom: 15 }} />
      </div>
    </div>
  );
}

// const DeskStyles = {
//   up: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     textJustify: "center",
//     height: "10%",
//     width: "100%",
//     borderBottom: "#1b4965",
//   },
//   leftSection: {
//     display: "flex",
//     height: "100%",
//     width: "10%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// };

export default MobileHdr;
