   import Image from "next/image"
import Link from "next/link"


   export default function Chef(){
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
                    <div>
                    <Image width={200} height={200} src="/chef-1.jpg"alt="."/>
                    <h1 className="font-bold">Tahmina Rumi</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-2.jpg"alt="."/>
                    <h1 className="font-bold">Jorina Begum</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/about-9.jpg"alt="."/>
                    <h1 className="font-bold">M.Mohammad</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-3.jpg"alt="."/>
                    <h1 className="font-bold">Munna Kathy</h1>
                    <h1>chef</h1>
                    </div>
                </div>
                <div className="flex justify-evenly mt-7">
                    <div>
                <Image width={200} height={200} src="/chef-4.jpg"alt="."/>
                <h1 className="font-bold">Tahmina Rumi</h1>
                <h1>chef</h1>
                </div>
                <div>
                    <Image width={200} height={200} src="/chef-5.jpg"alt="."/>
                    <h1 className="font-bold">Bisnu devgon</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-6.jpg"alt="."/>
                    <h1 className="font-bold">Motin Molladsf</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-7.jpg"alt="."/>
                    <h1 className="font-bold">William Rumi</h1>
                    <h1>chef</h1>
                    </div>
                </div>
                <div className="flex justify-evenly mt-7">
                    <div>
                <Image width={200} height={200} src="/chef-8.jpg"alt="."/>
                <h1 className="font-bold">Kets william roy</h1>
                <h1>chef</h1>
                </div>
                <div>
                    <Image width={200} height={200} src="/chef-9.jpg"alt="."/>
                    <h1 className="font-bold">Mahmud kholil</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-10.jpg"alt="."/>
                    <h1 className="font-bold">Ataur Rahman</h1>
                    <h1>chef</h1>
                    </div>
                    <div>
                    <Image width={200} height={200} src="/chef-11.jpg"alt="."/> 
                    <h1>Monalisa holly</h1>
                    <h1>chef</h1>
                    </div>
                </div>
            </section>
        </main>
    )
   }