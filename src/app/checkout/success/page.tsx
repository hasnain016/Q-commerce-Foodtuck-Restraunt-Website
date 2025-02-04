"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("session_id");
    setSessionId(sessionId);
    
    // Optionally, fetch order details from your backend using the sessionId
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Thank you for your purchase!</h2>
      
      {sessionId ? (
        <p>Your payment was successful. Your session ID is: {sessionId}</p>
      ) : (
        <p>We couldnt retrieve your payment details. Please contact support.</p>
      )}

      <div className="mt-6">
        <Link href="/" className="text-blue-500 hover:underline">Back to home</Link>
      </div>
    </div>
  );
}
