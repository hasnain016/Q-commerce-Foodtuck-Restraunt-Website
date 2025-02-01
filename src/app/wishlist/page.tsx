"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { useCart } from "react-use-cart";

// Define the product type
export interface Product {
  image: string;
  name: string;
  originalPrice: number;
  price: number;
  currentslug: string;
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      return savedWishlist ? JSON.parse(savedWishlist) : [];
    }
    return [];
  });

  const { addItem } = useCart();
  const [message, setMessage] = useState<string>("");

  // Function to remove item from wishlist
  const removeFromWishlist = (product: Product) => {
    const updatedWishlist = wishlist.filter((item) => item.currentslug !== product.currentslug);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Function to add item to cart with message
  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.currentslug,
      name: product.name,
      price: product.price,
      image: urlFor(product.image).url(),
      originalPrice: product.originalPrice,
    });

    // Show success message
    setMessage("Product added successfully!");

    // Hide message after 2 seconds
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold">Your Wishlist</h1>
        <div className="flex text-white mt-5">
          <Link href="/">Home</Link>
          <Link href="/shop">/Shop</Link>
        </div>
      </div>

      {/* ✅ Success Message */}
      {message && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-6 rounded-md shadow-lg">
          {message}
        </div>
      )}

      {/* Wishlist Content */}
      <section className="flex justify-center mt-10 mb-12">
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.length > 0 ? (
            wishlist.map((product) => (
              <div key={product.currentslug} className="border p-4 rounded-md shadow-md">
                <Link href={`/dynamic/${product.currentslug}`}>
                  <Image
                    width={300}
                    height={300}
                    src={urlFor(product.image).url()}
                    alt={product.name}
                    className="w-full h-40 object-cover"
                  />
                </Link>
                <div className="flex justify-between items-center mt-2">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <button
                    onClick={() => removeFromWishlist(product)}
                    className="text-red-500 text-2xl"
                  >
                    ❌
                  </button>
                </div>
                <h2 className="text-orange-500">Discount Price: ${product.price}</h2>
                <h3 className="text-gray-500">Original Price: ${product.originalPrice}</h3>

                {/* ✅ Add to Cart Button with message */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Add to Cart 🛒
                </button>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">Your wishlist is empty.</p>
          )}
        </div>
      </section>
    </main>
  );
}
