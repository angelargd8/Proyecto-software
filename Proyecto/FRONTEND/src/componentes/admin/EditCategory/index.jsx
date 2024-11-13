// TODO: revisar que el usuario si llene los campos
// TODO: hablar con el grupo si el usuario puede agregar una categoria sin imagen
// TODO: Arreglar los estilos y pasarlos a css porque ahorita est en styles
import React, { useState, useEffect } from "react";
import "./agregarCateg.css";
import StepIndicator from "../../StepIndicator";
import InputImage from "../../InputImage";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useGraphqlApi from "../../../hooks/useGraphqlApi";
import useFetchImage from "../../../hooks/useFetchImage";

function agregarCateg() {
  const location = useLocation();
  const { cardInfo } = location.state;
  const { idCategory } = cardInfo;
  const { fetchData } = useGraphqlApi();

  const [category, setCategory] = useState(null);
  const [nameCategoria, setNameCategoria] = useState(category?.name);
  const [image, setImage] = useState(null);
  const [previewImage, setPreviwImage] = useState(null);

  const img = useFetchImage(category?.image);

  useEffect(() => {
    const getCategory = async () => {
      const query = `query GetOneCategory($idCategory: Int!) {
                getOneCategory(idCategory: $idCategory) {
                idCategory
                image
                name
        }
      }`;
      const response = await fetchData(query, { idCategory });
      if (response) {
        setCategory(response.getOneCategory);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    if (img) {
      setPreviwImage(img);
    }
  }, [img]);

  useEffect(() => {
    if (category === null) return;
    setNameCategoria(category.name);
  }, [category]);

  //   const [nameCategoria, setNameCategoria] = useState(null);
  //   const [image, setImage] = useState(null);
  //   const [previewImage, setPreviwImage] = useState(null);

  const navigate = useNavigate();

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
      Swal.fire({
        title: "Debe agregar una imagen para la categoría",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("name", nameCategoria);
    formData.append("idCategory", idCategory);

    const url = import.meta.env.VITE_APIPORT_CATEGORY;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.warn("File uploaded successfully:", result);
        Swal.fire({
          title: `Se creó la categoría ${nameCategoria}`,
          icon: "success",
        }).then(() => {
          navigate("/home");
        });
      } else {
        Swal.fire({
          title: "Error al crear la categoría",
          icon: "error",
        });
        console.error("Error:", response.statusText);
        console.log(nameCategoria);
      }
    } catch (error) {
      Swal.fire({
        title: "Error en el servidor",
        icon: "error",
      });
    }
  };

  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        gap: "5px",
        alignSelf: "center",
        marginTop: 50,
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
        Editar la categoria
      </div>
    </div>
  );
}

export default agregarCateg;
