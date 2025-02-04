


"use client";

import { useCart } from "react-use-cart";
import { useState, ChangeEvent } from "react";

// Define TypeScript interface for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image field
}

export default function CheckoutPage() {
  const { cartTotal, items } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  // State to store shipping details
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  // Handle input changes for shipping details
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle checkout
  const handleCheckout = async () => {
    // Validate shipping details
    if (!shippingDetails.name || !shippingDetails.email || !shippingDetails.address || !shippingDetails.phone) {
      alert("Please fill in all shipping details before placing an order.");
      return;
    }

    setIsProcessing(true);

    try {
      // Sending shipping and cart data to backend to create Stripe checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          shippingDetails,
          items: items as CartItem[], // Ensure items have the correct type
          cartTotal,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Redirect to Stripe Checkout page
      window.location.href = data.url; // Stripe Checkout session URL

    } catch (error) {
      console.error("Checkout error:", error);
      alert("Failed to process checkout. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {/* Shipping Details Form */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={shippingDetails.name}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={shippingDetails.email}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={shippingDetails.address}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded mb-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={shippingDetails.phone}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded"
        />
      </div>

      {/* Cart Items */}
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

      {/* Total Price */}
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        disabled={isProcessing}
        className={`mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition ${isProcessing ? "bg-gray-400 cursor-not-allowed" : ""}`}
      >
        {isProcessing ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}
