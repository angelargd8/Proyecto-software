import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "./index.css";

// Cargar la clave pública de Stripe
const stripePromise = loadStripe("pk_test_51QLKQqD0Vws9TbKPp851NNRzD8GpP2rtvxMqFUhoNVYyDpBOYpBPeSrQGNAzsYgX6j0IWvGX8yF1ohJdiRN5zreb0087xlg27b");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </React.StrictMode>
);
