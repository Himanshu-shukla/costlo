require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");
const { sendUserDetails } = require("./utils/mailer");

const app = express();

// --- CORS FIX ---
// Replace '*' with your specific frontend URL.
// If you have multiple environments, you can use an array or process.env.FRONTEND_URL
const allowedOrigins = ["http://localhost:5174", "http://localhost:3000", "https://astrologerarya.com"];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));

app.use(bodyParser.json());

const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_API } = process.env;

app.use(express.static(path.resolve(__dirname, "dist")));

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
    console.error("PayPal Create Error:", err.response ? err.response.data : err.message);
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
    console.error("PayPal Capture Error:", err.response ? err.response.data : err.message);
    res.status(500).send("Failed to capture PayPal order");
  }
});

// -------- Send Email with User Details --------
app.post("/send-user-details", async (req, res) => {
  try {
    const { name, email, phone, message, dob, tob, pob } = req.body || {};

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "name, email, and phone are required" });
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return res.status(400).json({ message: "Invalid email" });

    const phoneOk = /^\+?[0-9]{10,15}$/.test(phone);
    if (!phoneOk) return res.status(400).json({ message: "Invalid phone" });

    const result = await sendUserDetails({ name, email, phone, message, dob, tob, pob });

    return res.status(200).json({ message: "Email sent", result });
  } catch (error) {
    return res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

app.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});