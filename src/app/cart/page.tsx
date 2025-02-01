

"use client";

import { useCart } from 'react-use-cart';
import Link from 'next/link';

export default function CartPage() {
  const { isEmpty, items,  updateItemQuantity, removeItem, cartTotal } = useCart();

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-700">
        <p className="text-lg font-semibold">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <ul className="divide-y divide-gray-200">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-4">
            <div>
              <p className="text-lg font-semibold">{item.name} x {item.quantity ?? 1}</p>
              <p className="text-gray-500">${(item.price ?? 0) * (item.quantity ?? 1)}</p>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) + 1)}
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
                +
              </button>
              <button 
                onClick={() => updateItemQuantity(item.id, (item.quantity ?? 1) - 1)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                -
              </button>
              <button 
                onClick={() => removeItem(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6 border-t pt-4">
        <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
        <Link href="/checkout" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
