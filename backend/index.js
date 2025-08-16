require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { sendUserDetails } = require("./utils/mailer");

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://astrologer-arya.onrender.com"], // add your frontend URLs
  credentials: true,
}));

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:5173",
    "https://astrologer-arya.onrender.com",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.json());

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API } = process.env;

// -------- PayPal Order Creation --------
app.post("/api/paypal/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
    const accessTokenRes = await axios.post(
      `${PAYPAL_API}/v1/oauth2/token`,
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = accessTokenRes.data.access_token;

    const orderRes = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: amount } }],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(orderRes.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to create PayPal order");
  }
});

// -------- PayPal Order Capture --------
app.post("/api/paypal/capture-order", async (req, res) => {
  try {
    const { orderId } = req.body;

    const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_CLIENT_SECRET}`).toString("base64");
    const accessTokenRes = await axios.post(
      `${PAYPAL_API}/v1/oauth2/token`,
      new URLSearchParams({ grant_type: "client_credentials" }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = accessTokenRes.data.access_token;

    const captureRes = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(captureRes.data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to capture PayPal order");
  }
});

// -------- Send Email with User Details --------
app.post("/send-user-details", async (req, res) => {
  try {
    const { name, email, phone, message, dob, tob, pob } = req.body || {};

    // Basic validation (customize as needed)
    if (!name || !email || !phone) {
      return res.status(400).json({ message: "name, email, and phone are required" });
    }

    // Optional: simple email/phone format checks
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return res.status(400).json({ message: "Invalid email" });

    // Example: accept 10–15 digits with optional +country-code
    const phoneOk = /^\+?[0-9]{10,15}$/.test(phone);
    if (!phoneOk) return res.status(400).json({ message: "Invalid phone" });

    const result = await sendUserDetails({ name, email, phone, message, dob, tob, pob });

    return res.status(200).json({ message: "Email sent", result });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
