import { useNavigate } from "react-router-dom";
import "./CarritoBtn.css";

function CarritoBtn({ text, nextPath }) {
  const navigate = useNavigate();

  const handleFunction = () => {
    navigate(`${nextPath}`);
  };

  const handlePagar = () => {
    navigate("/pago");
    // let mensaje = "Saludos.\nMe gustaría hacer un pedido de:\n";
    // carrito.forEach((producto) => {
    //   mensaje += `${producto.quantity} -- ${producto.title}\n`;
    // });
    // var url = `https://wa.me/50237067222?text=${encodeURIComponent(mensaje)}`;
    // window.open(url, '_blank');
  };
  return (
    <>
      <button className="pagobtn" onClick={handleFunction}>
        {" "}
        {text}{" "}
      </button>
    </>
  );
}

export default CarritoBtn;
