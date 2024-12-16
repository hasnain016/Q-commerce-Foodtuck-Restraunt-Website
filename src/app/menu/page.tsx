
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
        
        <div className="bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-[448] h-[626] md:w-1/2 p-4">
          <Image width={300} height={600}
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
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Berries and Creme Tart</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Tormentoso Bush Pizza Pintoage</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
        <div className="bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Image width={300} height={500}
            src="/dish-2.jpg" //
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
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Cashew Chicken with Stir-Fry</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Vegetables & Green Salad</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Spicy Vegan Potato Curry</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

          
       
       <section className="bg-black py-12 rounded-lg mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-6">
            <div>
            <Image width={50} height={50} src="/dish-3.jpg" alt="cheif" className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">420+</h3>
              <p className="text-sm text-white">Professional Chiefs</p>
            </div>
            <div>
            <Image width={50} height={50} src="/dish-4.jpg" alt="cheif-2" className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">320+</h3>
              <p className="text-sm text-white">Items Of Food</p>
            </div>
            <div>
            <Image width={50} height={50} src="/disj.jpg" alt="cheif-3" className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">30+</h3>
              <p className="text-sm text-white">Years Of Experience</p>
            </div>
            <div>
            <Image width={50} height={50} src="/dish-5.jpg" alt="cheif-4" className="h-16 mx-auto" />
              <h3 className="text-4xl font-bold text-white">200+</h3>
              <p className="text-sm text-white">Happy Customers</p>
            </div>
          </div>
        </section>
       
        {/* Dessert Section */}
        <div className="bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Image width={300} height={600}
            src="/cake-1.jpg" //
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
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Creamy mascarpone Cake</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Pastry, blueberries, Lemon juice</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Pain au Chocolat</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

        
        <div className="bg-gray-50 flex justify-center items-center p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <Image width={300} height={600}
            src="/cake-2.jpg" 
            alt="Dish"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold mb-4">Drinks</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Caffe Macchiato</h3>
                <p className="text-sm text-gray-600">Toasted French bread topped with romano, cheddar</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">32$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold text-orange-500">Aperol Spritz Capacianno</h3>
                <p className="text-sm text-gray-600">Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p className="text-sm text-gray-500">700 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">43$</p>
            </div>
            <div className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="text-lg font-semibold">Caffe Latte Campuri</h3>
                <p className="text-sm text-gray-600">Ground cumin, avocados, peeled and cubed</p>
                <p className="text-sm text-gray-500">1000 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">14$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Tormentoso BushTea Pintoage</h3>
                <p className="text-sm text-gray-600">Spreadable cream cheese, crumbled blue cheese</p>
                <p className="text-sm text-gray-500">560 CAL</p>
              </div>
              <p className="text-orange-500 font-bold">35$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

      

        {/* Partners Section */}
        <section className="py-12 text-center">
          <h2 className="text-2xl font-semibold mb-6">We work with the best people</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            <Image width={50} height={50} src="/sm-1.jpg" alt="logo 1" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-2.jpg" alt="logo 2" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-3.jpg" alt="logo 3" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-4.jpg" alt="logo 4" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-5.jpg" alt="logo 5" className="h-16 mx-auto" />
            <Image width={50} height={50} src="/sm-6.jpg" alt="logo 6" className="h-16 mx-auto" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Menu;