import "./floatingButton.css";
import { useLocation } from "react-router-dom";

function FloatingButton() {
  const location = useLocation();
  const handleClick = () => {
    window.open("https://wa.me/50237067222", "_blank");
  };

  if (location.pathname !== "/home") {
    if (location.pathname !== "/contact") {
      if (location.pathname !== "/") {
        return;
      }
    }
  }

  return (
    <div className="floatingButton-body">
      <div className="floatingButton">
        <button
          type="submit"
          onClick={handleClick}
          id="boton-whatsapp"
          className="imagen-btn-whatsapp"
        >
          <div className="imagen">
            <img
              className="imagen-whatsapp"
              src="./src/assets/img/whatsapp.png"
              alt="whatsapp"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default FloatingButton;
