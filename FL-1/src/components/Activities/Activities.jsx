// Activities.jsx
import { activityData } from "../../constants";
import "./Activities.scss";
import { createPayPalOrder } from "../../api/paypal";
import { useState } from "react";

function parseAmount(priceStr) {
  // "$ 300" -> 300
  return Number(String(priceStr).replace(/[^0-9.]/g, ""));
}

const Activities = () => {
  const [loadingKey, setLoadingKey] = useState(null);
  const [error, setError] = useState("");

  const handleBook = async (activity) => {
    try {
      setError("");
      setLoadingKey(activity.key);

      const amount = parseAmount(activity.price);
      const description = activity.activity;

      const order = await createPayPalOrder({ amount, description });

      // Find approval (redirect) link from PayPal response
      const approveLink = order?.links?.find((l) => l.rel === "approve")?.href;
      if (!approveLink) {
        throw new Error("No approve link in PayPal response");
      }

      // Redirect to PayPal to approve payment
      window.location.href = approveLink;
    } catch (e) {
      console.error(e);
      setError(e.message || "Something went wrong");
    } finally {
      setLoadingKey(null);
    }
  };

  return (
    <div className="activities-container">
      <h1 className="heading">Popular Services</h1>

      {error && <div className="error">{error}</div>}

      <div className="activities">
        {activityData.map((activity, index) => (
          <div className="activity_card" key={activity.key || index}>
            <div className="activity_header">
              <h2>{activity.activity}</h2>
            </div>

            <div className="activity_content">
              <div className="activity_description">
                <p>{activity.description}</p>
              </div>

              <div className="activity_footer">
                <div className="activity_price">{activity.price}</div>

                <button
                  className="activity_button"
                  onClick={() => handleBook(activity)}
                  disabled={loadingKey === activity.key}
                >
                  {loadingKey === activity.key ? "Processing..." : "Book Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
