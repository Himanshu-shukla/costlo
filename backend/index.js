require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const { sendUserDetails } = require("./utils/mailer");

const app = express();
app.use(cors());
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
    const result = await sendUserDetails(req.body); // Calls AWS SES
    res.status(200).json({ message: "Email sent", result });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
