"use client";
import Link from "next/link";
export default function CancelPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Payment Cancelled</h2>
      <p>It seems like you cancelled your order. If you have any questions, feel free to contact us.</p>

      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">Back to home</Link>
      </div>
    </div>
  );
}
