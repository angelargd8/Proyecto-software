import { useCarrito } from "../carritoContext";

const EliminarTarjetas = () => {
  const { borrarTodasLasTarjetas } = useCarrito();

  const handleEliminar = () => {
    borrarTodasLasTarjetas();
    Swal.fire({
      icon: "success",
      title: "Todas las tarjetas han sido eliminadas.",
      showConfirmButton: true,
    });
  };

  return <button onClick={handleEliminar}>Borrar todas las tarjetas</button>;
};

export default EliminarTarjetas;