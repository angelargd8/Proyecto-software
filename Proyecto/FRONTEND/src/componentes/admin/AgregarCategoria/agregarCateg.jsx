// TODO: revisar que el usuario si llene los campos
// TODO: hablar con el grupo si el usuario puede agregar una categoria sin imagen
// TODO: Arreglar los estilos y pasarlos a css porque ahorita est en styles
import React, { useState, useEffect } from "react";
import "./agregarCateg.css";
import StepIndicator from "../../StepIndicator";
import InputImage from "../../InputImage";
import Swal from 'sweetalert2';

function agregarCateg() {
  const [nameCategoria, setNameCategoria] = useState(null);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviwImage] = useState(null);

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

  const handleNameCategoriaChange = (event) => {
    setNameCategoria(event.target.value);
  };

  const handleSubmit = async () => {
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", nameCategoria);
    //TODO: arreglar esta parte del idpage (BACKEND)
    formData.append("idpage", 1);

    try {
      const response = await fetch(import.meta.env.VITE_APIPORT_CATEGORY, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.warn("File uploaded successfully:", result);
        alert("Image uploaded successfully!");
      } else {
        alert("Failed to upload image.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      alert("Error en el servidor");
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        marginTop: "18%",
      }}
    >
      <div
        className="upload-container"
        style={{ height: "10%", display: "flex", position: "relative" }}
      >
        <label style={{ width: "100%" }}>
          Escriba el nombre de la categoria
          <input
            type="text"
            value={nameCategoria}
            onChange={handleNameCategoriaChange}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              borderBottom: "2px solid black",
              padding: "5px 0",
              color: "#1F3350",
              outline: "none",
            }}
          />
        </label>
        <StepIndicator>1</StepIndicator>
      </div>
      <div className="upload-container" style={{ position: "relative" }}>
        <StepIndicator>2</StepIndicator>
        <InputImage
          onImageChange={handleImageChange}
          previewImage={previewImage}
        />
      </div>
      <div
        style={{
          background: "#1F3350",
          height: "8%",
          width: "50%",
          borderRadius: "30px",
          alignContent: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
          padding: "5px",
          top: "5px",
          cursor: "pointer",
        }}
        onClick={handleSubmit}
      >
        Agregar categoria
      </div>
    </div>
  );
}

export default agregarCateg;
