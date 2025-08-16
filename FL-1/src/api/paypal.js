// src/api/paypal.js
export async function createPayPalOrder({ amount, description }) {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paypal/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ amount, description }),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
}

export async function capturePayPalOrder(orderId) {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paypal/capture-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ orderId }),
  });
  if (!res.ok) throw new Error("Failed to capture order");
  return res.json();
}
