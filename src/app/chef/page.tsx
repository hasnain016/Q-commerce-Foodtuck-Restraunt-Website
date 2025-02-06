import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Define the Chef interface
interface Chef {
  name: string;
  image: { asset: { _ref: string } };
  position: string;
  currentslug: string;
}

export default async function ChefPage() {
  const data: Chef[] = await client.fetch(
    `*[_type=="chef"]{
      name,
      image,
      position,
      "currentslug":slug.current
    }`
  );

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div
          className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/bg-1.jpg')",
          }}
        >
          <h1 className="text-white text-5xl font-bold">Our Chef</h1>
          <div>
            <Link className="text-white" href="/">HOME /</Link>
            <Link className="text-white ml-1" href="/faq">Faq</Link>
          </div>
        </div>

        {/* Chef Grid Section */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((chef: Chef, index: number) => (
              <div key={index} className="text-center">
                <Link href={`/book/${chef.currentslug}`}>
                  <Image
                    className="rounded-lg mx-auto transition-transform duration-300 hover:scale-105"
                    width={200}
                    height={200}
                    src={urlFor(chef.image).url()}
                    alt={chef.name}
                  />
                </Link>
                <h1 className="font-bold mt-3">{chef.name}</h1>
                <h2 className="text-gray-500">{chef.position}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
