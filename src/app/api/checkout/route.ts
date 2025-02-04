import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe"; // Import your Stripe instance

// Define the TypeScript interface for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image field
}

export async function POST(req: Request) {
  try {
    const { shippingDetails, items, cartTotal } = await req.json();

    // Validate request data
    if (!shippingDetails || !items || items.length === 0 || !cartTotal) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    // Prepare line items for Stripe
    const line_items = items.map((item: CartItem) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [], // Ensures images array is valid
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents
      },
      quantity: item.quantity,
    }));

    // Create a Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
      customer_email: shippingDetails.email, // Attach customer email to the session
    });

    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
