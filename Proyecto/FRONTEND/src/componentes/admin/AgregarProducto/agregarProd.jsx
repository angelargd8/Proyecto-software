import { useState } from "react";
import InputImage from "../../InputImage";
import NormalInput from "../../normalInput";
import StepIndicator from "../../StepIndicator";
import "./AgregarProd.css";
import { useLocation } from "react-router-dom";
import Button from "../../Button";
const AgregarProducto = () => {
  const location = useLocation();
  const { id } = location.state;

  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");

  // Estado inicial con al menos un precio (nombre, precio, cantidad)
  const [precios, setPrecios] = useState([
    { nombre: "", precio: "", cantidad: "" },
  ]);

  // Función para manejar el cambio de valor en los inputs
  const handleInputChange = (index, name, value) => {
    const nuevosPrecios = [...precios];
    nuevosPrecios[index] = {
      ...nuevosPrecios[index],
      [name]: value, // Actualiza el campo específico con el valor
    };
    setPrecios(nuevosPrecios);
  };

  // Función para agregar una nueva fila de precio
  const handleAgregarPrecio = () => {
    setPrecios([...precios, { nombre: "", precio: "", cantidad: "" }]);
  };

  // Función para eliminar una fila de precio
  const handleEliminarPrecio = (index) => {
    const nuevosPrecios = precios.filter((_, i) => i !== index); // Filtra el elemento que se quiere eliminar
    setPrecios(nuevosPrecios);
  };

  // Función para manejar el envío del formulario (puedes modificar esto)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Precios enviados: ", precios);
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 115,
        paddingLeft: 15,
        gap: 15,
      }}
    >
      <div
        style={{
          top: 0,
          width: "100%",
          fontSize: "25px",
          fontFamily: "bold",
          textAlign: "left",
        }}
      >
        Agregar nuevo producto
      </div>
      <div
        style={{
          width: "100%",
          position: "relative",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          borderRadius: "8px",
        }}
      >
        <StepIndicator>1</StepIndicator>
        <NormalInput
          value={nameProduct}
          onChangeValue={setNameProduct}
          text={"Escriba el nombre del producto"}
          style={{ textAlign: "center" }}
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: 15,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 250,
            gap: 15,
          }}
        >
          <div
            style={{
              width: "100%",
              height: 300,
              background: "white",
              display: "flex",
              // backgroundColor: "red",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              flexDirection: "column",
              gap: "10px",
              position: "relative",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <StepIndicator>2</StepIndicator>
            <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
              Agrega una imagen de tu producto
            </div>
            <InputImage />
          </div>
        </div>

        <div style={{ width: 450, height: 300, position: "relative" }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "white",
              display: "flex",
              // backgroundColor: "red",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              flexDirection: "column",
              gap: "10px",
              position: "relative",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <StepIndicator>3</StepIndicator>
            <div>Ingrese la descripcion del producto</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                width: "100%",
                background: "transparent",
                color: "black",
                height: "100%",
              }}
            ></textarea>
          </div>
        </div>
        <div style={{ width: 600, height: 300 }}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "white",
              display: "flex",
              // backgroundColor: "red",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              flexDirection: "column",
              gap: "10px",
              position: "relative",
              alignContent: "center",
              alignItems: "center",
              overflowY: "auto",
              msOverflowStyle: "none",
            }}
          >
            <StepIndicator>4</StepIndicator>
            <div>Agregar Precio</div>
            <div>
              {/* <h2>Agregar Precios</h2> */}
              {precios.map((precio, index) => (
                <div
                  key={index}
                  style={{
                    marginBottom: "10px",
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                  }}
                >
                  <NormalInput
                    placeHolder={"Nombre del precio"}
                    value={precio.value}
                    name="nombre"
                    onChangeValue={(value) =>
                      handleInputChange(index, "nombre", value)
                    }
                  />
                  <NormalInput
                    placeHolder={"Cantidad para el precio"}
                    value={precio.cantidad}
                    name="cantidad"
                    type="number"
                    onChangeValue={(e) =>
                      handleInputChange(index, "cantidad", e)
                    }
                  />
                  <NormalInput
                    value={precio.precio}
                    placeHolder={"Precio"}
                    name="precio"
                    type="number"
                    onChangeValue={(e) => handleInputChange(index, "precio", e)}
                  />

                  {precios.length > 1 && (
                    <Button onClick={() => handleEliminarPrecio(index)}>
                      Eliminar
                    </Button>
                  )}
                </div>
              ))}
              <Button onClick={handleAgregarPrecio}>Agregar otro precio</Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Button>Agregar nuevo producto</Button>
      </div>
    </div>
  );
};
export default AgregarProducto;
