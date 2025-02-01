


"use client";

import { useCart } from "react-use-cart";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartTotal, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    // Simulate checkout process (e.g., call an API or payment service)
    setTimeout(() => {
      setIsProcessing(false);
      alert("Order placed successfully!");
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between py-4">
            <p className="text-lg font-semibold">
              {item.name} x {item.quantity ?? 1}
            </p>
            <p className="text-gray-600">
              ${((item.price || 0) * (item.quantity ?? 1)).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
      </div>
      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className={`mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition ${
          isProcessing ? "bg-gray-400 cursor-not-allowed" : ""
        }`}
      >
        {isProcessing ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}
