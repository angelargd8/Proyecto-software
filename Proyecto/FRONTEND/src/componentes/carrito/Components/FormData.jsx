import { useEffect, useState } from "react";
import DataRow from "./DataRow";

const tarjetaInfo = [
  "Numero de Tarjeta:",
  "Fecha de Vencimiento:",
  "Codigo:",
  "Nombre de Propetario:",
];

const depositoInfo = [
  "Pais:",
  "Banco:",
  "Tipo de Cuenta:",
  "Numero de Cuenta:",
  "Nombre de Propetario:",
];

const efectivoInfo = [
  "Persona que Recibe:",
  "Direccion:",
  "Denominacion del Billete:",
];

function FormData({ infoType }) {
  let arrayInfo = [];

  const [inputValues, setinputValues] = useState(["", "", "", "", ""]);

  useEffect(() => {
    setinputValues((prev) => prev.map((_) => ""));
  }, [infoType]);

  switch (infoType) {
    case "Tarjeta":
      arrayInfo = tarjetaInfo;
      break;
    case "Deposito":
      arrayInfo = depositoInfo;
      break;
    case "Efectivo":
      arrayInfo = efectivoInfo;
      break;
  }

  return (
    <div id="FormData" style={styles.formData}>
      {arrayInfo.map((name, index) => (
        <DataRow
          key={index}
          dataName={name}
          value={inputValues[index]}
          onChange={(value) =>
            setinputValues((prev) =>
              prev.map((item, inde) => {
                if (inde == index) {
                  return value;
                } else {
                  return item;
                }
              })
            )
          }
        />
      ))}
    </div>
  );
}

const styles = {
  formData: {
    flexDirection: "column",
    height: "80%",
    width: "100%",
    textAlign: "left",
    padding: 25,
  },
};

export default FormData;
