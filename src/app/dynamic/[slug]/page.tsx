

"use client";

import { useState, useEffect } from "react";
import { useCart } from "react-use-cart";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface iFood {
  category: string;
  slug: string;
  originalPrice: number;
  price: number;
  name: string;
  description: string;
  image: string;
}

export default function Food({ params }: { params: Promise<{ slug: string }> }) {
  const [data, setData] = useState<iFood | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const { addItem } = useCart();

  // Resolve the slug Promise
  useEffect(() => {
    async function getSlug() {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
    }
    getSlug();
  }, [params]);

  // Fetch data when slug is available
  useEffect(() => {
    async function fetchData() {
      if (!slug) return;
      const foodData = await client.fetch(
        `*[_type=="food" && slug.current==$slug]{
          category,
          "slug":slug.current,
          originalPrice,
          price,
          name,
          description,
          image
        }[0]`,
        { slug }
      );

      setData(foodData);
    }

    fetchData();
  }, [slug]);

  // Function to handle adding to cart
  const handleAddToCart = () => {
    if (data) {
      addItem({
        id: data.slug,
        name: data.name,
        price: data.price,
        image: urlFor(data.image).url(),
      });

      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
    }
  };

  if (!data) {
    return <p className="text-white">Loading...</p>;
  }

  return (
    <div className="flex pt-6 pb-6 h-full bg-black relative">
      <div className="h-full">
        <Image
          className="ml-11"
          width={400}
          height={400}
          src={urlFor(data.image).url()}
          alt={data.name}
        />
      </div>
      <div>
        <h1 className="text-center font-bold text-5xl text-orange-500">{data.name}</h1>
        <p className="text-center mb-3 mt-4 text-white">The name of this dish is {data.name}.</p>
        <p className="ml-7 text-white">{data.description}</p>
        <p className="ml-7 text-white">
          It is very popular among customers. It is also made for special orders like weddings
          and birthday parties.
        </p>
        <p className="ml-7 text-white">
          It is freshly prepared and sold within an hour of preparation.
        </p>

        <div className="flex">
          <h1 className="text-white ml-7 mt-5 text-3xl font-bold">{data.price}.00$</h1>
          <h1 className="text-white mt-5 ml-2 line-through text-3xl font-bold">
            {data.originalPrice}.00$
          </h1>
          <button
            onClick={handleAddToCart}
            className="mt-10 hover:bg-red-900 ml-10 bg-red-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="absolute top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          Product added successfully!
        </div>
      )}
    </div>
  );
}
