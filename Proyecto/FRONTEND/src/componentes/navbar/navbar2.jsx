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
        background: "red",
        height: 120,
        width: width,
        position: "sticky",
        zIndex: 999,
        top: 0,
      }}
    ></div>
  );
};

export default NavBar2;
