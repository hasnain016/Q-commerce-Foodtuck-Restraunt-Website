import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"


export default async function Shop(){

   const  data= await client.fetch(`
  *[_type=="food"]{
    image,
    name,
    originalPrice,
    price,
    // 'slug': slug.current,
    "currentslug":slug.current
}`
    )


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
               <div className="ml-5"> <Link href={`/dynamic/${data[0].currentslug}`}><Image width={300} height={300} src={urlFor(data[0].image).url()} alt='.'/></Link>
               <h1>{data[0].name}</h1>
              <div className=""> <h1 className="">discount price = {data[0].price}</h1><h1 className=" text-gray-500">  Original price= {data[0].originalPrice}</h1></div>
               </div>

               <div className="ml-5">
               <Link href={`/dynamic/${data[2].currentslug}`}>
                <Image  width={300} height={300} src={urlFor(data[2].image).url()} alt="."/>
                </Link>
                <h1>{data[2].name}</h1>
                <h1 className="text-orange-500"> discount price= {data[2].price}</h1>
                <h1> Original price= {data[2].originalPrice}</h1>
                </div>
                <div className="ml-5">
                <Link href={`/dynamic/${data[1].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[1].image).url()} alt="."/>
                </Link>
                <h1> {data[1].name}</h1>
                <div className=""><h1 className="text-orange-500">Discount price ={data[1].price} </h1> <h1 className=" text-gray-500"> originalPrice={data[2].originalPrice}</h1></div>
                </div>
            </div>
            <div className="flex justify-around mt-5 ">
                <div className="ml-5">
                <Link href={`/dynamic/${data[3].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[3].image).url()} alt="."/>
                </Link>
                <h1 className="font-bold">{data[3].name}</h1>
                <h1 className="text-orange-500">Discount price= {data[3].price}</h1>
                <h1>Original Price = {data[3].originalPrice}</h1>
                </div>
                <div className="ml-5">
                <Link href={`/dynamic/${data[7].currentslug}`}>  
                <Image width={300} height={300} src={urlFor(data[7].image).url()}alt="."/>
                </Link>
                <h1 className="font-bold">{data[7].name}</h1>
                <div className=""><h1 className="text-orange-500">Discount Price ={data[7].price}</h1> <h1 className="">originalPrice= {data[7].originalPrice}</h1></div>
                </div>
                <div className="ml-5">
                <Link href={`/dynamic/${data[5].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[5].image).url()}alt="."/>
                </Link>
                <h1>{data[5].name}</h1>
                <h1> Discount price={data[5].price}</h1>
                <h1>Original price={data[5].originalPrice}</h1>
                
                
                </div>
            </div>
            <div className="flex mt-5">
                <div className="ml-5">
                <Link href={`/dynamic/${data[8].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[8].image).url()}alt="."/>
                </Link>
                <h1 className="font-bold">{data[8].name}</h1>
                <h1 className="text-orange-500">Discount price= {data[8].price}</h1>
                <h1> original price= {data[0].originalPrice}</h1>
                </div>
                <div className="ml-5">
                <Link href={`/dynamic/${data[4].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[4].image).url()}alt="."/>
                </Link>
                <h1 className="font-bold"> {data[4].name}</h1>
                <h1 className="text-orange-500"> Discount Price= {data[4].price}</h1>
                <h1> originalPrice={data[4].originalPrice}</h1>
                </div>
                <div className="ml-5">
                <Link href={`/dynamic/${data[6].currentslug}`}>
                <Image width={300} height={300} src={urlFor(data[6].image).url()}alt="."/>
                </Link>
                <h1 className="font-bold"> {data[6].name}</h1>
                <h1 className="text-orange-500">Discount price={data[6].price}</h1>
                <h1> Original price = {data[6].originalPrice}</h1>
                </div>
            </div>
            
              </div>
            
        </section>
        </section>
        </main> 
    )
}