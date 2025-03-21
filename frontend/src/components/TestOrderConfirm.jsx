import React, { useState } from "react";

const ConfirmButton = ({ transactionId, userId }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = async () => {
    try {
      const response = await fetch(`http://localhost:5000/transactions/confirm/${transactionId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await response.json();
      if (response.ok) {
        setConfirmed(true);
        alert("Confirmation successful!");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error confirming transaction:", error);
    }
  };

  return (
    <button onClick={handleConfirm} disabled={confirmed}>
      {confirmed ? "Confirmed" : "Confirm Delivery"}
    </button>
  );
};

export default ConfirmButton;
