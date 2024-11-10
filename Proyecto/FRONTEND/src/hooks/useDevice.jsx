import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const isMobileDevice =
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default useIsMobile;
