const Stripe = require("stripe");
const stripe = Stripe("sk_test_51QLKQqD0Vws9TbKPnBabx7cBvvlLcdNpz38xAppYUZGy37fajJqwbkDivVsrqTXYJ4f2V7SCXs77HiN7zTbsHYVj00RfHN1uHt");

const validateCard = async (req, res) => {
  const { token, amount } = req.body;  // Se extrae el monto desde la solicitud

  if (!amount || amount <= 0) {
    return res.status(400).json({ success: false, error: "El monto es inválido" });
  }

  try {
    const charge = await stripe.charges.create({
      amount: amount * 100,  // Convierte el monto a centavos
      currency: "gtq",  // Cambiado a Quetzales Guatemaltecos
      description: "Pago con tarjeta",
      source: token,
    });

    res.json({ success: true, charge });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, error: error.message });
  }
};

module.exports = { validateCard };
