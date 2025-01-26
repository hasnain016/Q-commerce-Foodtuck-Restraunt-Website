import {client} from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';





export default  async function Food({params}:{params:Promise<{slug:string}>}){

    const slug = (await params).slug ;

const data= await client.fetch(`*[_type=="food" && slug.current==$slug]{
  category,
    "slug":slug.current,
    originalPrice,
    price,
    name,
    description,
    image
}[0]`,
{slug}
  
    

);




    return(
        <div className='flex pt-6 pb-6 h-full bg-black'>
      <div className='h-full '>
        <Image className='ml-11' width={400} height={400} src={urlFor(data.image).url()}alt='.'/>
      </div>
      <div>
    <h1 className='text-center font-bold text-5xl text-orange-500'>{data.name}</h1>
    
    <p className='text-center mb-3 mt-4 text-white'>The name of this dish is {data.name} .</p><p className='ml-7 text-white'>{data.description}</p>

     <p className='ml-7 text-white'>    It is very popular among the customer . It is also made in orders for customer for special  </p>
    <p className='ml-7 text-white'> events like marriages , birthday party.It is freshly prepared and sell with in an hour of preparation </p>
    
<div className='flex'>
    <h1 className='text-white ml-7 mt-5 text-3xl font-bold'>{data.price}.00$</h1>
    <h1 className='text-white mt-5 ml-2 line-through text-3xl font-bold'>{data.originalPrice}.00$</h1>
    <button className='text-white mt-7  ml-10 pl-5 bg-orange-500 pr-3'>Add to cart</button>
    </div>

      </div>
    
        </div>
    )
}