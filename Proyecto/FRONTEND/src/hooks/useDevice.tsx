import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      // Verifica si el dispositivo es móvil por el userAgent o el ancho de la pantalla
      const isMobileDevice =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkIsMobile(); // Comprueba inicialmente si es móvil

    window.addEventListener("resize", checkIsMobile); // Escucha cambios en el tamaño de la pantalla

    return () => window.removeEventListener("resize", checkIsMobile); // Limpia el event listener al desmontarse el componente
  }, []);

  return isMobile;
};

export default useIsMobile;
