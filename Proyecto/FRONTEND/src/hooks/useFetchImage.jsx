import { useState, useEffect } from "react";

function useFetchImage(imagen) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImage = async () => {
      let url = import.meta.env.VITE_APIPORT_IMAGE + imagen;
      const result = await fetch(url);
      setImg(result.url);
    };
    getImage();
  }, [imagen]);

  return img;
}

export default useFetchImage;
