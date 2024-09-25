import "./button.css";
const Button = ({ children, classnme, style, onClick }) => {
  return (
    <button
      className={`ButtonComponent ${classnme}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
