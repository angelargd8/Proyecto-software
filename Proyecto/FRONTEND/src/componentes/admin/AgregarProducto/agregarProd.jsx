import React, { useEffect, useState } from "react";
import InputImage from "../../InputImage";
import NormalInput from "../../NormalInput";
import StepIndicator from "../../StepIndicator";
import "./AgregarProd.css";
import { useLocation } from "react-router-dom";
import Button from "../../Button";
import Swal from "sweetalert2";

const AgregarProducto = () => {
  const location = useLocation();
  const { id } = location.state;

  const [nameProduct, setNameProduct] = useState("");
  const [description, setDescription] = useState("");
  const [previewImage, setPreviwImage] = useState(null);
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviwImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviwImage(null);
    }
  };

  const handleAddPRoduct = async () => {
    const formData = new FormData();

    if (!nameProduct) {
      Swal.fire({
        title: "Debe agregar un nombre para el producto",
        icon: "warning",
      });
      return;
    }

    if (!image) {
      Swal.fire({
        title: "Debe agregar una imagen para el producto",
        icon: "warning",
      });
      return;
    }

    if (!description) {
      Swal.fire({
        title: "Debe agregar una descripción para el producto",
        icon: "warning",
      });
      return;
    }

    const filterPrecios = precios.filter(
      (precio) =>
        precio.nombre !== "" && precio.precio !== "" && precio.cantidad !== ""
    );

    if (filterPrecios.length < 1) {
      Swal.fire({
        title: "Debe agregar al menos un precio para el producto",
        icon: "warning",
      });
      return;
    }

    formData.append("prices", JSON.stringify(filterPrecios));
    formData.append("name", nameProduct);
    formData.append("file", image);
    formData.append("idCategory", id);
    formData.append("description", description);

    console.log(formData);
    const url = import.meta.env.VITE_APIPORT_PRODUCT;
    // tests:
    // var url = process.env.VITE_APIPORT_PRODUCT;
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // const result = await response.json();
      // console.warn("File uploaded successfully:", result);
      Swal.fire({
        title: `Se agregó el producto ${nameProduct}`,
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error al crear el producto",
        icon: "error",
      });
      console.error("Error:", response.statusText);
    }
  };

  const [precios, setPrecios] = useState([
    { nombre: "", precio: "", cantidad: "" },
  ]);

  const handleInputChange = (index, name, value) => {
    const nuevosPrecios = [...precios];
    nuevosPrecios[index] = {
      ...nuevosPrecios[index],
      [name]: value,
    };
    setPrecios(nuevosPrecios);
  };

  const handleAgregarPrecio = () => {
    setPrecios([...precios, { nombre: "", precio: "", cantidad: "" }]);
  };

  const handleEliminarPrecio = (index) => {
    const nuevosPrecios = precios.filter((_, i) => i !== index);
    setPrecios(nuevosPrecios);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Precios enviados: ", precios);
  };

  return (
    <div
      className="AddProductContainer"
      style={{ height: "100%", width: "100%", backgroundColor: "#E2E8F0" }}
    >
      {/* Contenedor general*/}
      <div
        style={{
          position: "absolute",
          background: "#E2E8F0",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          gap: 15,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Contenedor del text principal*/}
        <div
          style={{
            top: 0,
            width: "100%",
            fontSize: "25px",
            fontFamily: "bold",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          Agregar nuevo producto
        </div>
        {/* Contenedor del paso 1 principal*/}
        <div
          style={{
            width: "57%",
            position: "relative",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            borderRadius: "8px",
            alignSelf: "center",
            marginTop: 10,
            display: "flex",
            marginLeft: "21.5%",
          }}
        >
          <StepIndicator
            style={{
              left: 25,
              top: 25,
              backgroundColor: "#1F3350",
            }}
          >
            1
          </StepIndicator>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 10,
              paddingLeft: 50,
            }}
          >
            <label>Nombre del Producto: </label>
            <input
              value={nameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
              type="text"
              placeholder="Escriba nombre del producto"
              style={{
                width: "100%",
                background: "none",
                border: "none",
                borderBottom: "2px solid black",
                padding: "5px 0",
                color: "#1F3350",
                outline: "none",
                fontSize: 20,
              }}
            />
          </div>
        </div>
        {/* Contenedor de los pasos 2, 3 y 4*/}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            gap: 3,
            marginTop: 5,
            padding: 10,
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <div style={{ width: 600, height: 120, position: "relative" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "white",
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
                <div>Ingrese la descripcion del producto</div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Escriba la descripcion del producto"
                  style={{
                    width: "100%",
                    background: "transparent",
                    color: "black",
                    height: "100%",
                    border: "none",
                    backgroundColor: "transparent",
                    // borderBottom: "2px solid black",
                  }}
                ></textarea>
              </div>
            </div>

            <div style={{ width: 600, height: 180 }}>
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
                <StepIndicator>3</StepIndicator>
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
                        placeHolder={"Nombre. Ej: unidad"}
                        value={precio.value}
                        name="nombre"
                        onChangeValue={(value) =>
                          handleInputChange(index, "nombre", value)
                        }
                      />
                      <NormalInput
                        placeHolder={"Cantidad. Ej: 1"}
                        value={precio.cantidad}
                        name="cantidad"
                        type="number"
                        onChangeValue={(e) =>
                          handleInputChange(index, "cantidad", e)
                        }
                      />
                      <NormalInput
                        value={precio.precio}
                        placeHolder={"Precio. Ej: 10"}
                        name="precio"
                        type="number"
                        onChangeValue={(e) =>
                          handleInputChange(index, "precio", e)
                        }
                      />

                      {precios.length > 1 && (
                        <Button onClick={() => handleEliminarPrecio(index)}>
                          Eliminar
                        </Button>
                      )}
                    </div>
                  ))}
                  <Button onClick={handleAgregarPrecio}>
                    Agregar otro precio
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 250,
              height: 320,
              gap: 15,
            }}
          >
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
              <StepIndicator>4</StepIndicator>
              <div style={{ display: "flex", flexWrap: "wrap", width: "60%" }}>
                Agrega una imagen de tu producto
              </div>
              <InputImage
                previewImage={previewImage}
                onImageChange={handleImageChange}
              />
            </div>
          </div>
        </div>

        <div>
          <Button onClick={handleAddPRoduct}>Agregar nuevo producto</Button>
        </div>
      </div>
    </div>
  );
};
export default AgregarProducto;
