import { CarritoContext } from "../carritoContext";
import { useContext } from "react";
import { useCarrito } from "../carritoContext";

const precioXProducto = (cantidad, precios) => {
  precios = precios.sort((a, b) => a.quantity - b.quantity);
  const precioUnitario = precios[0].price;
  let precioFinal = 0;
  precios.forEach((precio) => {
    let cantidadProduct = precio.quantity;
    let precioProducto = precio.price * cantidadProduct;

    if (cantidad >= cantidadProduct) {
      let docenas = Math.floor(cantidad / cantidadProduct);
      let extras = cantidad % cantidadProduct;
      precioFinal = docenas * precioProducto + extras * precioUnitario;
    }
  });

  return precioFinal;
};

const FinalTicket = () => {
  const { ubicacion, receptor, pagoType } = useContext(CarritoContext);
  const { carrito } = useCarrito();

  const total = carrito.reduce(
    (acc, producto) =>
      acc + precioXProducto(producto.quantity, producto.precios),
    0
  );

  return (
    <>
      <div style={styles.ticket}>
        <div style={styles.infoRow}>
          <span style={styles.label}>Pedido ID:</span>
          <span style={styles.value}>001</span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Ubicación:</span>
          <span style={styles.value}>
            {ubicacion ? ubicacion : "No seleccionado"}
          </span>
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Receptor:</span>
          <span style={styles.value}>
            {receptor ? receptor : "No seleccionado"}
          </span>
        </div>
        <div style={{ ...styles.infoRow, flexDirection: "column" }}>
          <span style={styles.label}>Productos a pagar:</span>
          {carrito.length > 0 ? (
            <>
              {carrito.map((producto) => (
                <div style={{ ...styles.infoRow }} key={producto.id}>
                  <span
                    style={{
                      ...styles.label,
                      paddingLeft: 10,
                      fontWeight: undefined,
                    }}
                  >
                    {`-  ${producto.quantity} ${producto.title}`}
                  </span>
                  <span style={styles.value}>
                    {precioXProducto(producto.quantity, producto.precios)}
                  </span>
                </div>
              ))}
            </>
          ) : (
            <span style={styles.value}>Sin productos</span>
          )}
        </div>
        <div style={styles.infoRow}>
          <span style={styles.label}>Tipo de Pago:</span>
          <span style={styles.value}>
            {pagoType ? pagoType : "No seleccionado"}
          </span>
        </div>
        <div style={{ ...styles.infoRow, borderTop: "2px solid black" }}>
          <span style={styles.label}>Total a pagar:</span>
          <span style={styles.value}>{total}</span>
        </div>
      </div>
    </>
  );
};

const styles = {
  ticket: {
    minWidth: "25%",
    backgroundColor: "#1b496543",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    padding: 20,
    borderRadius: 20,
    borderBottom: "5px solid #1b4965",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  label: {
    fontWeight: "bold",
    textAlign: "left",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    minWidth: 120,
    color: "#1b4965",
  },
  value: {
    marginLeft: "20px",
    multiline: false,
    minWidth: 250,
    textAlign: "right",
    color: "#1b4965",
  },
};

export default FinalTicket;
