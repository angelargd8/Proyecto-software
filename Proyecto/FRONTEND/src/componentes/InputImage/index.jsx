const InputImage = ({ previewImage, onImageChange }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "70%",
          width: "80%",
          position: "relative",
        }}
      >
        <input
          type="file"
          onChange={onImageChange}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
        <img
          src={
            previewImage
              ? previewImage
              : "../src/assets/img/common/cloudUpload.png"
          }
          alt="nube"
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          background: "#1F3350",
          height: "20%",
          width: "50%",
          borderRadius: "30px",
          alignContent: "center",
          textAlign: "center",
          position: "relative",
          color: "white",
        }}
      >
        <input
          type="file"
          onChange={onImageChange}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
        Añadir una imagen
      </div>
    </div>
  );
};

export default InputImage;
