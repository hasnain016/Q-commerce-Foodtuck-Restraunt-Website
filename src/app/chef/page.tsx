   import Image from "next/image"
import Link from "next/link"
  import {client} from "@/sanity/lib/client"
  import { urlFor } from "@/sanity/lib/image"
   export default  async function Chef(){
    const data=  await client.fetch(`*[_type=="chef"]{
  name,
    image,
    position,
    "currentslug":slug.current
}`

    )
 



    return(
        <main>
            <section>
            <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        <h1 className="text-white  text-5xl font-bold">Our Chef</h1>
        <div>
            <Link className="text-white" href="/">HOME /</Link>
            <Link className="text-white" href="/faq">Faq</Link>
        </div>

        
      </div>
      
                <div className="flex justify-evenly mt-10">
                    <div key={data.name}>
                        <Link href={`/book/${data[0].currentslug}`}>
                    <Image  className="" width={200} height={200} src={urlFor(data[0].image).url()} alt="data.name"/>
                    </Link>
                    <h1 className="font-bold">{data[0].name}</h1>
                    <h1>{data[0].position}</h1>
                    
                    
                    </div>
                    <div>
                    <Link href={`/book/${data[1].currentslug}`}>
                   <Image width={200} height={200} src={urlFor(data[1].image).url()} alt="data.name"/>
                   </Link>
                    <h1 className="font-bold">{data[1].name}</h1>
                    <h1>{data[1].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[2].currentslug}`}>
                    <Image  className="" width={200} height={200} src={urlFor(data[2].image).url()} alt="data.name"/>
                    </Link>
                    <h1 className="font-bold">{data[2].name}</h1>
                    <h1>{data[2].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[3].currentslug}`}>
                    <Image width={200} height={200} src={urlFor(data[3].image).url()} alt="."/>
                    </Link>
                    <h1 className="font-bold sm:ml-8">{data[3].name}</h1>
                    <h1 className="sm:ml-8">{data[3].position}</h1>
                    </div>
                </div>
                <div className="flex justify-evenly mt-7">
                    <div>
                    <Link href={`/book/${data[4].currentslug}`}>
                  <Image width={200} height={200} src={urlFor(data[4].image).url()} alt="."/>
                  </Link>
                <h1 className="font-bold">{data[4].name}</h1>
                <h1>{data[4].position}</h1>
                </div>
                <div>
                <Link href={`/book/${data[5].currentslug}`}>
                <Image width={200} height={200} src={urlFor(data[5].image).url()} alt="."/>
                </Link>
                    <h1 className="font-bold">{data[5].name}</h1>
                    <h1>{data[5].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[6].currentslug}`}>
                    <Image width={200} height={200} src={urlFor(data[6].image).url()} alt="."/>
                    </Link>
                    <h1 className="font-bold">{data[6].name}</h1>
                    <h1>{data[6].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[7].currentslug}`}>
                    <Image width={200} height={200} src={urlFor(data[7].image).url()} alt="."/>
                    </Link>
                    <h1 className="font-bold">{data[7].name}</h1>
                    <h1>{data[7].position}</h1>
                    </div>
                </div>
                <div className="flex justify-evenly mt-7">
                    <div>
                    <Link href={`/book/${data[8].currentslug}`}>
                    <Image  className="" width={200} height={200} src={urlFor(data[8].image).url()} alt="data.name"/>
                    </Link>
                <h1 className="font-bold">{data[8].name}</h1>
                <h1>{data[8].position}</h1>
                </div>
                <div>
                <Link href={`/book/${data[9].currentslug}`}>
                <Image  className="" width={200} height={200} src={urlFor(data[9].image).url()} alt="data.name"/>
                </Link>
                    <h1 className="font-bold">{data[9].name}</h1>
                    <h1>{data[9].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[10].currentslug}`}>
                    <Image  className="" width={200} height={200} src={urlFor(data[10].image).url()} alt="data.name"/>
                    </Link>
                    <h1 className="font-bold">{data[10].name}</h1>
                    <h1>{data[10].position}</h1>
                    </div>
                    <div>
                    <Link href={`/book/${data[11].currentslug}`}> 
                    <Image  className="" width={200} height={200} src={urlFor(data[11].image).url()} alt="data.name"/>
                    </Link>
                    <h1 className="font-bold">{data[11].name}</h1>
                    <h1>{data[11].position}</h1>
                    </div>
      
                </div>
   
            </section>
        </main>
    )
   }