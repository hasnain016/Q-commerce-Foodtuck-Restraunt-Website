
import Image from "next/image";


import React from "react";

const Third = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-yellow-400 text-lg font-semibold mb-2">Food Category</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12">
          <span className="text-yellow-400">Choose</span> Food Item
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="relative group">
            <Image width={300} height={500}
              src="/column1.jpg"
              alt="Fast Food Dish"
              className="w-full rounded-lg shadow-lg object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded mb-2">
                Save 30%
              </span>
              <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold">
                Fast Food Dish
              </button>
            </div>
          </div>

          
          <div className="h-40">
            <Image width={300} height={500}
              src="/column2.jpg"
              alt="Burger"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

          
          <div>
            <Image width={300} height={500}
              src="/column3.jpg"
              alt="Salad"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>

        
          <div>
            <Image width={300} height={500}
              src="/column4.jpg"
              alt="Donuts"
              className="w-full rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;