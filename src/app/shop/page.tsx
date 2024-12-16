import Image from "next/image"
import Link from "next/link"
export default function Shop(){
    return(
        
        <main className="">

             <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        <h1 className="text-white  text-5xl font-bold">Our Shop</h1>

        <div className="flex text-white mt-5">
                <Link href="/">Home</Link>
                <Link href="/shopd">/Shop Details</Link>
            </div>
        
      </div>
            <section className="flex">
        <section className="mt-20 mb-12">
            <div className="flex ml-20">
            <div className="mr-5  text-xl">
                sort By :  <button className="px-16 py- border border-gray-300 text-gray-500 ">Newest</button>
            </div>
            <div className="flex">
             <h1 className="ml-5 mr-5 text-xl">   Show   :   </h1> <button className="px-16 py- border border-gray-300 text-gray-500">Default</button>
            </div>
            </div>
            <div className="w h-2/3   mt-10 ml-14 ">
            <div className="flex justify-around ">
               <div className="ml-5"> <Image width={300} height={300} src="/shop-1.jpg"alt="."/>
               <h1>Fresh Lime</h1>
              <div className="flex"> <h1 className="text-orange-500"> $38.00</h1><h1 className="line-through ml-3 text-gray-500"> $45.00</h1></div>
               </div>
               <div className="ml-5">
                <Image width={300} height={300} src="/shop-2.jpg"alt="."/>
                <h1>Chocolate muffin</h1>
                <h1 className="text-orange-500">$28.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-3.jpg"alt="."/>
                <h1>Burger</h1>
                <div className="flex"><h1 className="text-orange-500">$21.00</h1> <h1 className="line-through text-gray-500 ml-5">$45.00</h1></div>
                </div>
            </div>
            <div className="flex justify-around mt-5 ">
                <div className="ml-5">
                <Image className="" width={300} height={300} src="/shop-4.jpg"alt="."/>
                <h1 className="font-bold">country Burger</h1>
                <h1 className="text-orange-500">$45.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-5.jpg"alt="."/>
                <h1 className="font-bold">Drink</h1>
                <div className="flex"><h1 className="text-orange-500">$23.00</h1> <h1 className="line-through ml-3 text-gray-500">$45.00</h1></div>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-6.jpg"alt="."/>
                <h1>Pizza</h1>
                <h1 className="text-orange-500">$43.00</h1>
                </div>
            </div>
            <div className="flex mt-5">
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-7.jpg"alt="."/>
                <h1 className="font-bold">cheese Butter</h1>
                <h1 className="text-orange-500">$10.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-8.jpg"alt="."/>
                <h1 className="font-bold">Sandwiches</h1>
                <h1 className="text-orange-500">$25.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src='/shop-9.jpg'alt="."/>
                <h1 className="font-bold">chicken chup</h1>
                <h1 className="text-orange-500">$12.00</h1>
                </div>
            </div>
            <div className="flex justify-around mt-5">
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-4.jpg"alt="."/>
                <h1 className="font-bold">Country Burger</h1>
                <h1 className="text-orange-500">$45.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-5.jpg"alt="."/>
                <h1>Drink</h1>
                <div className="flex"> <h1 className="text-orange-500">$23.00</h1> <h1 className="text-gray-500 line-through ml-3">$45.00 </h1></div>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src="/shop-6.jpg"alt="."/>
                <h1 className="font-bold">Pizza</h1>
                <h1 className="text-orange-500">$43.00</h1>
                </div>
            </div>
            <div className="flex justify-around mt-5">
                <div className="ml-5">
            <Image width={300} height={300} src="/shop-7.jpg"alt="."/>
            <h1 className="font-bold"> cheese Butter</h1>
            <h1 className="text-orange-500">$10.00</h1>
            </div>
            <div className="ml-5">
                <Image width={300} height={300} src="/shop-8.jpg"alt="."/>
                <h1 className="font-bold">sandwiches</h1>
                <h1 className="text-orange-500">$25.00</h1>
                </div>
                <div className="ml-5">
                <Image width={300} height={300} src='/shop-9.jpg'alt="."/>
                <h1 className="font-bold">chicke chup</h1>
                <h1 className="text-orange-500">$12.00</h1>
                </div>
            </div>
            </div>
        </section>
        

        <section className="w-80 h-3/4  mt-36 border 2 solid ml-7 mr-10 border-gray-500">
            <div className="w-56 h-10 bg-orange-200 border 2 solid border-gray-400 ml-9 mr-9  mt-6 flex justify-center items-center">
                <h1 className="ml-7">Search product</h1>
        </div>
        <div>
            <h1 className="font-bold ml-5 mt-5">
                Category
            </h1>
            <h1 className="ml-2 ">* sandwiches</h1>
            <h1 className="ml-2 "> * Burger</h1>
            <h1 className="ml-2 ">* chicken chup</h1>
            <h1 className="ml-2 ">* Drink</h1>
            <h1 className="ml-2 ">* Pizza</h1>
            <h1 className="ml-2 ">* Thi</h1>
            <h1 className="ml-2 ">* Non veg</h1>
            <h1 className="ml-2 ">* Uncategorized</h1>
        </div>
        <div>
        <h1 className="text-center font-semibold">perfect taste</h1>
        <h1 className="text-center font-bold text-xl">classic restruant</h1>
        <h1 className="text-orange-500 ml-5">45.00$</h1>
            
        </div>
        <div>
            <h1 className="font-bold ml-6 text-xl">Latest Products</h1>
            <div className="flex ml-7 mt-6">
                <Image width={50} height={50} src="/shop-11.jpg"alt="."/>
                <div className="ml-4">
                    <h1 className="text-gray-500">Pizza</h1>
                    <h1 className="text-gray-400">$35.00</h1>
                </div>
            </div>
        </div>
        <div className="flex ml-7 mt-6">
            <Image width={50} height={50} src="/shop-11.jpg"alt="."/>
            <div className="ml-4">
                <h1 className="text-gray-500">Cupcake</h1>
                <h1 className="text-gray-400">$35.00</h1>
            </div>
        </div>
        <div className="flex ml-7 mt-6">
            <Image width={50} height={50} src="/shop-11.jpg"alt="."/>
            <div className="ml-4">
                <h1 className="text-gray-500">cookies</h1>
                <h1 className="text-gray-400">$35.00</h1>
            </div>
        </div>
        <div className="flex ml-7 mt-6">
            <Image width={50} height={50} src="/shop-11.jpg"alt="."/>
            <div className="ml-4">
                <h1 className="text-gray-500">Burger</h1>
                <h1 className="text-gray-400">$35.00</h1>
            </div>
        </div>
        <div>
            <h1 className="font-bold text-xl ml-4 mt-5">Product Tags</h1>
            <ul className="flex justify-evenly text-gray-400">
                <li>
                    services
                </li>
                <li>
                    Our Menu
                </li>
                <li>
                    pizza
                </li>
            </ul>
            <ul className="flex justify-evenly text-gray-400">
                <li>
                    cupcake
                </li>
                <li className="text-orange-500">
                    Burger
                </li>
                <li>
                    cookies
                </li>
            </ul>
            <ul className="flex justify-evenly text-gray-400">
                <li>our shop</li>
                <li>Tandoori chicken</li>
            </ul>
        </div>
            
        </section>
        </section>
        </main> 
    )
}