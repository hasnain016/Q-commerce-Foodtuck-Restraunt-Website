





       
  "use client";
import React, { useState } from "react";
import Image from "next/image";

const menuCategories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack", "Soups"];

const menuItems = [
  { name: "Lettuce Leaf", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box2.jpg" },
  { name: "Fresh Breakfast", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/box3.jpg" },
  { name: "Mild Butter", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box4.jpg" },
  { name: "Fresh Bread", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box5.jpg" },
  { name: "Glow Cheese", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box6.jpg" },
  { name: "Italian Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "14.5$", image: "/box7.jpg" },
  { name: "Slice Beef", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box8.jpg" },
  { name: "Mushroom Pizza", description: "Lacus nisi, et ac dapibus velit in consequat.", price: "12.5$", image: "/box9.jpg" },
];

const Six: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  return (
    <section className="bg-black text-white py-16 -mt-48 px-4 md:px-8">
      <div className="container mx-auto">
        <h2 className="text-center text-orange-500 text-2xl mb-2">Choose & pick</h2>
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-8">
          <span className="text-orange-500">Fr</span>om Our Menu
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                activeCategory === category ? "bg-orange-500 text-white" : "text-orange-500 hover:bg-orange-500 hover:text-white"
              } transition-colors duration-300`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src="/box1.jpg" 
              alt="Featured Dish"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <p className="text-orange-500 font-bold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Six;             