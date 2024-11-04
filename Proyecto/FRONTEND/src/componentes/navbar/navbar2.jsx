import { useState } from "react";

import React, { useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

const NavBar2 = () => {
  const { width, height } = useWindowDimensions();
  return (
    <div
      style={{
        background: "#1f3350",
        height: 100,
        width: width,
        position: "sticky",
        zIndex: 999,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: 20,
        gap: 20,
      }}
    >
      <div
        style={{
          height: "100%",
          color: "#fff",
          justifyContent: "center",
          alignContent: "center",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        PICOLIN
      </div>

      <div
        style={{
          height: "100%",
          color: "#d8d8d8",
          fontSize: 20,
          marginLeft: 20,
          justifyContent: "center",
          alignContent: "end",
          paddingBottom: 12,
          fontWeight: "bold",
        }}
      >
        Inicio
      </div>

      <div
        style={{
          height: "100%",
          color: "#d8d8d8",
          fontSize: 20,
          marginLeft: 20,
          justifyContent: "center",
          alignContent: "end",
          paddingBottom: 12,
          fontWeight: "bold",
        }}
      >
        Contánctanos
      </div>

      <div
        style={{
          height: "100%",
          backgroundColor: "red",
          alignSelf: "flex-end",
          marginLeft: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "100%",
            position: "relative",
          }}
        >
          <input
            type="text"
            placeholder="Search"
            style={{
              backgroundColor: "#d8d8d8",
              paddingRight: "10%",
              border: "none",
              borderRadius: 10,
              fontSize: "small",
              flexGrow: 0,
              height: 35,
              color: "gray",
            }}
          />
          <img
            style={{ height: 30, width: 30, right: 0, position: "absolute" }}
            src="./src/assets/img/buscar.png"
            alt="Buscar"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar2;
