import useWindowSize from "../../../hooks/useWindowDimensions";

const EmptyCardProd = () => {
  const { width } = useWindowSize();
  return (
    <div
      className="cardProducto skeleton"
      style={{ height: 300, width: width }}
    ></div>
  );
};

export default EmptyCardProd;
