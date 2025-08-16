// src/pages/PaypalSuccess.jsx
import { useEffect, useState } from "react";
import { capturePayPalOrder } from "../api/paypal";

export default function PaypalSuccess() {
  const [status, setStatus] = useState("Capturing payment...");
  const [details, setDetails] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("token"); // PayPal returns token = orderId

    async function run() {
      try {
        if (!orderId) throw new Error("Missing orderId (token)");
        const capture = await capturePayPalOrder(orderId);
        setDetails(capture);
        setStatus("Payment successful!");

        // OPTIONAL: send email with user details (if you collected them)
        // await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-user-details`, {
        //   method: "POST",
        //   headers: { "Content-Type": "application/json" },
        //   body: JSON.stringify({ orderId, capture }),
        // });

      } catch (e) {
        console.error(e);
        setError(e.message || "Failed to capture payment");
        setStatus("Payment failed");
      }
    }

    run();
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>{status}</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {details && (
        <pre style={{ background: "#111", color: "#0f0", padding: 16 }}>
          {JSON.stringify(details, null, 2)}
        </pre>
      )}
    </div>
  );
}
