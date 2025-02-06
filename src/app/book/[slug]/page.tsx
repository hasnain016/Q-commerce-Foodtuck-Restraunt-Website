// "use client"
// import { client } from "@/sanity/lib/client"
// import { useEffect } from "react"



// export default function Dynamic({params}:{params:Promise<{slug:string}>}){
// // console.log((await params).slug

// useEffect(()=>{
//     const fetch = async ()=>{
//         const data = await client.fetch(`*[_type=="chef"&& slug.current== $slug]{
//         name,
//         image,
//         position,
//         'slug': slug.current,
//     }`)
//     return data
//     }
//     fetch()
// })
   
// // const res = await data()
//     return(
//         <div>
//         <h1></h1>
//         <h1>my namw=e{fetch.name}</h1>

//         <h1></h1>
//         </div>
//     )
// }



"use client";

import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { use } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export default function Dynamic({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params); // Unwrap the `params` promise using `React.use()`

  const [data, setData] = useState<{
    name: string;
    image: string;
    position: string;
    slug: string;
    specialty:string;
    type:string;
    experience:string;
    description:string
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(
          `*[_type in ["chef","food"] && slug.current == $slug][0]{
            experience,
    name,
    image,
    specialty,
    position,
    'slug':slug.current,
    experience,
    type,
    description
}
          
          
          `,
          { slug }
        );
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-full bg-black">
      <div>
        <h1 className="text-3xl font-bold text-center text-orange-500 pt-5"> Chef Page   </h1>
      </div>
      <div className="">
    <p className="text-center mt-5 text-white">Chef who worked for our restruant are highly skilled and has a good amount of experience in this field.</p>
    <p className="text-center text-white">They are capable of making delicious dishes in less time. Because of chef who are expert in making different ,our restruant</p>
    <p className="text-center text-white "> offer a diverse variety of food so the customer can get its desired food</p>
    
      </div>
      <div><h1 className="text-3xl font-semibold underline text-orange-500 text-center mt-3"  >Introducing our chef</h1></div>
      <div className="flex ">
      <div>
  
        <Image className="ml-4 mb-24" width={300}height={300} src={urlFor(data.image).url()}alt="."/>
        </div>
        <div className="">
        <h1 className="text-white text-xl ml-10 mt-5"> name of the chef : {data.name}</h1>
        <h1 className="text-white ml-10 pb-4"> Working as {data.position} in this foodTruck . </h1>
        <h1 className="text-orange-500 text-xl font-semibold md:ml-32 mt-3 underline ">Short information about chef .</h1>
        <p className="text-white md:ml-10 mt-4">This is one of our chef working in foodTruck, with a good experience of making food in this restruant
           </p>
           <p className="text-white md:ml-10 "> This chef is expert in making {data.specialty} and making {data.specialty} in big events like marriages and family gathering. </p>
           <p className="text-white md:ml-10"> The chef  is {data.description} , </p>
      </div>
      
    </div>
      
      

      
      
      
      
      {/* Render additional data if needed */}
    </div>
  );
}
