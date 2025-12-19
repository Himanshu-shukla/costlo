// src/api/paypal.js
export async function createPayPalOrder({ amount, description }) {
  // Ensure your VITE_BACKEND_URL doesn't have a trailing slash, or handle it here
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paypal/create-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // This works now because we fixed the Backend CORS
    body: JSON.stringify({ amount, description }),
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to create order");
  }
  return res.json();
}

export async function capturePayPalOrder(orderId) {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/paypal/capture-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ orderId }),
  });
  
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Failed to capture order");
  }
  return res.json();
}