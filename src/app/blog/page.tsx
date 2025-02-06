
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
      >
        <h1 className="font-bold text-white text-3xl">Blog list</h1>
      </div>

      <main className="px-4">
        <section className="flex flex-wrap md:flex-nowrap">
          <div className="md:ml-16 mt-4 md:mt-16 ml-5 w-full md:w-2/3">
            <Image className="w-full h-auto" width={500} height={600} src="/blog-1.jpg" alt="pic" />
            <h1 className="font-bold md:mt-5">10 Reasons To Do Digital Detox Challenge</h1>
            <p>Lorem ipsum dolor sit amet, adipisicing elit. Nostrum fugit</p>
            <p> quae, adi quidem ea, perspiciatis asperiores sunt eius?</p>
            <p>Lorem ipsum dr. Itaque, enim, sit ex architecto cum optio</p>
            <button className="px-5 border border-orange-500 mt-4 text-orange-500 py-2">Read More</button>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-16">
            <div className="bg-slate-50 text-gray-300 px-4 py-3 w-full h-12">
              <h1>Search your keyword</h1>
            </div>

            <div className="w-full border border-gray-400 mt-3 p-4">
              <Image className="mx-auto mt-4" width={50} height={50} src="/blog-2.jpg" alt="man" />
              <h1 className="font-bold text-center mt-2">Prince Miyako</h1>
              <p className="text-center">Blogger/Photographer</p>
              <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>

            <div className="mt-4 w-full border border-gray-400 p-4">
              <h1 className="font-bold text-xl">Recent Posts</h1>
              {["blog-4.jpg", "blog-5.jpg", "blog-6.jpg", "blog-7.jpg"].map((img, index) => (
                <div className="flex items-center mt-4" key={index}>
                  <Image width={50} height={50} src={`/${img}`} alt="post" />
                  <div className="ml-3">
                    <h1 className="text-gray-500">June 20, 2022</h1>
                    <p className="text-gray-700">Delicious yummy food</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-wrap md:flex-nowrap mt-10">
          <div className="w-full md:w-2/3 md:ml-16">
            <Image className="w-full h-auto" width={500} height={500} src="/blog-3.jpg" alt="." />
            <h1 className="font-bold mt-6 text-xl">Traditional Soft Pretzels with Sweet Beer Cheese</h1>
            <p className="mt-4">Lorem aperiam optio quaerat necessitatibus fuga nam quas eligendi!</p>
            <button className="px-5 border border-orange-500 mt-4 text-orange-500 py-2">Read More</button>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-10">
            <div className="border border-gray-400 p-4">
              <h1 className="font-semibold text-green-950 text-xl">Filter by Menu</h1>
              {["Chicken Fry", "Burger Food", "Pizza", "Fresh Fruits", "Vegetables"].map((item, index) => (
                <div key={index} className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <Image width={50} height={50} src={`/chi-${index + 1}.jpg`} alt={item} />
                    <h1 className="ml-2 font-bold">{item}</h1>
                  </div>
                  <h1>26</h1>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="flex flex-wrap md:flex-nowrap mt-10">
          <div className="w-full md:w-2/3 md:ml-16">
            <Image className="w-full h-auto" width={500} height={500} src="/soup-1.jpg" alt="." />
            <h1 className="font-bold mt-6 text-xl">The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
            <button className="px-5 border border-orange-500 mt-4 text-orange-500 py-2">Read More</button>
          </div>

          <div className="w-full md:w-1/3 mt-6 md:mt-0 md:ml-10">
            <div className="border border-gray-400 p-4">
              <h1 className="font-bold text-xl">Popular Tags</h1>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Sandwich", "Tiqa", "Barbq", "Restaurant", "Chicken Sharma", "Health", "Fastfood", "Food", "Pizza", "Burger", "Chicken"].map((tag, index) => (
                  <button key={index} className="px-4 py-2 text-gray-400 border border-gray-400">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            <div className="border border-gray-400 p-4 mt-4">
              <h1 className="font-bold">Photo Gallery</h1>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {["so-2.jpg", "so-4.jpg", "so-5.jpg", "so-6.jpg", "so-7.jpg", "column2.jpg"].map((img, index) => (
                  <Image key={index} className="w-full h-auto" width={100} height={100} src={`/${img}`} alt="gallery" />
                ))}
              </div>
            </div>

            <div className="border border-gray-400 p-4 mt-4 text-center">
              <h1>Follow us</h1>
              <div className="flex justify-center gap-4 mt-4">
                {["si-1.jpg", "si-2.jpg", "si-3.jpg", "si-4.jpg"].map((icon, index) => (
                  <Image key={index} width={30} height={30} src={`/${icon}`} alt="social" />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
