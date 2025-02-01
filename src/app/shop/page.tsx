"use client"; // Ensure interactivity in Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define the product type
export interface Product {
  image: string;
  name: string;
  originalPrice: number;
  price: number;
  currentslug: string;
}

export default function Shop() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [wishlist, setWishlist] = useState<Product[]>([]);

  // Load wishlist from localStorage safely on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    }
  }, []);

  // Fetch data on the client side
  useEffect(() => {
    async function fetchData() {
      try {
        const result: Product[] = await client.fetch(`
          *[_type=="food"]{
            image,
            name,
            originalPrice,
            price,
            "currentslug": slug.current
          }
        `);
        setData(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filter products based on search input
  const filteredProducts = data.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle product in wishlist
  const toggleWishlist = (product: Product) => {
    let updatedWishlist;
    if (wishlist.some((item) => item.currentslug === product.currentslug)) {
      updatedWishlist = wishlist.filter((item) => item.currentslug !== product.currentslug);
    } else {
      updatedWishlist = [...wishlist, product];
    }
    setWishlist(updatedWishlist);

    // Update localStorage only if window is available
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold">Our Shop</h1>
        <div className="flex text-white mt-5">
          <Link href="/">Home</Link>
          <Link href="/shopd">/Shop Details</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-1/2 p-2 border border-gray-300 rounded-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Wishlist Navigation */}
      <div className="flex justify-center my-6">
        <Link 
          href="/wishlist" 
          className="px-5 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
        >
          View Wishlist ❤️
        </Link>
      </div>

      {/* Product List */}
      <section className="flex justify-center mt-10 mb-12">
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading ? (
            <p className="col-span-full text-center text-gray-500">Loading products...</p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                  {/* Heart Icon */}
                  <button
                    onClick={() => toggleWishlist(product)}
                    className={`text-2xl ${wishlist.some(item => item.currentslug === product.currentslug) ? "text-red-500" : "text-gray-500"}`}
                  >
                    {wishlist.some(item => item.currentslug === product.currentslug) ? "❤️" : "🤍"}
                  </button>
                </div>
                <h2 className="text-orange-500">Discount Price: ${product.price}</h2>
                <h3 className="text-gray-500">Original Price: ${product.originalPrice}</h3>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
