
import Image from 'next/image';

import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">Our Menu</h1>
      </div>

      <main className="py-12 px-6 md:px-16 lg:px-28">
        
        {/* Starter Menu */}
        <div className="bg-gray-50 flex justify-center items-center p-4">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <Image
                width={300}
                height={600}
                src="/dish-1.jpg"
                alt="noodles"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">Starter Menu</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Alder Grilled Chinook Salmon</h3>
                    <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                    <p className="text-sm text-gray-500">560 CAL</p>
                  </div>
                  <p className="text-orange-500 font-bold">32$</p>
                </div>
                {/* Add other menu items similarly */}
              </div>
            </div>
          </div>
        </div>

        {/* Main Course */}
        <div className="bg-gray-50 flex justify-center items-center p-4">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <Image
                width={300}
                height={500}
                src="/dish-2.jpg"
                alt="large-burger"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">Main Course</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Optic Big Breakfast Combo Manu</h3>
                    <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                    <p className="text-sm text-gray-500">560 CAL</p>
                  </div>
                  <p className="text-orange-500 font-bold">32$</p>
                </div>
                {/* Add other menu items similarly */}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <section className="bg-black py-12 rounded-lg mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 text-center gap-6">
            <div>
              <Image width={50} height={50} src="/dish-3.jpg" alt="cheif" className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">420+</h3>
              <p className="text-sm text-white">Professional Chiefs</p>
            </div>
            {/* Add other statistics similarly */}
          </div>
        </section>

        {/* Dessert Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4">
          <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <Image
                width={300}
                height={600}
                src="/cake-1.jpg"
                alt="Dish"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6">
              <h2 className="text-2xl font-bold mb-4">Dessert</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h3 className="text-lg font-semibold">Fig & Lemon Cake</h3>
                    <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                    <p className="text-sm text-gray-500">560 CAL</p>
                  </div>
                  <p className="text-orange-500 font-bold">32$</p>
                </div>
                {/* Add other menu items similarly */}
              </div>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            <Image width={50} height={50} src="/sm-1.jpg" alt="logo 1" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-2.jpg" alt="logo 2" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-3.jpg" alt="logo 3" className="h-16 mx-auto" />
            {/* Add other logos similarly */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;
