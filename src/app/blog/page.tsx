
import Image from "next/image"

export default function Blog(){                    
    return(
        <div>
        <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        <h1 className="font-bold text-white text-3xl">Blog list</h1>
        </div>

        <main>
            <section className="flex ">
                <div className="ml-24 mt-16 ">
                    <Image width={500} height={600}src="/blog-1.jpg"alt="pic"/>
                    <h1 className="font-bold mt-5">10 Reasons To DO Digital Detox Challange</h1>
                    <p>Lorem ipsum dolor sit amet,  adipisicing elit. Nostrum fugit</p>
                    <p> , quae, adi quidem ea, perspiciatis asperiores sunt eius?</p>
                    <p>Lorem ipsum dr . Itaque, enim, sit ex architecto cum optio </p>
                    <button className="px-5  border 1 solid border-orange-500 mt-4 text-orange-500 py-2">Read More</button>
                </div>
                <div className="">
                    <div className="bg-slate-50 text-gray-300 px-8 py-3 w-60 h-12 mt-9 ml-9">
                        <h1>Search your keyword</h1>
                    </div>
                    <div className="w-60 h-60 border border-gray-400 solid 2 mt-3 ml-10">
                        <Image className="ml-14 mt-4 " width={50} height={50} src="/blog-2.jpg" alt="man"/>
                        <h1 className="font-bold ml-10">Prince Miyako</h1>
                        <p className="ml-6">Blogger/photographer</p>
                        <p className="ml-6">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>
                    <div className="mt-4">
                    <div className="w-60 h-80 border border-gray-400 solid ml-10 ">
                        <h1>Recent Posts</h1>
                        <div className="flex">
                            <Image width={50}height={50} src="/blog-4.jpg"alt="burder"/>
                            <div className="ml-3"><h1>june 22,2020</h1>
                            <p className="">Delicious cheesy burger</p>
                            </div>
                        </div>
                        <div className="flex mt-5 ">
                            <Image width={50} height={50} src="/blog-5.jpg"alt="."/>
                            <div className="ml-3">
                            <h1>june 20.2022</h1>
                            <p>Delicious yummy food </p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                            <Image width={50} height={50} src="/blog-6.jpg"alt="."/>
                            <div className="ml-3"><h1>june 20 ,2020 </h1>
                            <p>Delicious yummy food</p>
                            </div>
                        </div>
                        <div className="flex mt-5">
                        <Image width={50}height={50} src="/blog-7.jpg" alt="."/>
                        <div className="ml-3">
                            <h1>june 20,2022</h1>
                            <p>Delicious yummy food</p>
                            </div>
                            </div>
                            </div>
                    </div>
                </div>
                <div>

                </div>
            </section>
            <section className="">
                <div className=" flex">
                    <div className="  ml-24"><Image className="" width={500} height={500}src="/blog-3.jpg"alt="."/>
                    <h1 className=" font-bold mt-6 text-xl"> Tradional soft pretzels with Sweet beer cheese</h1>
                    <p className=" mt-4">Lorem aperiam optio quaerat necessitatibus  fuga nam quas eligendi!</p>
                    <p  className=""> dolor sit amet consectetur adipisicing wick sorepa hipoo is samowan</p>
                    <p className="">samowan warewolf i dispite contibute sleman arkistra seekha </p>
                    <button className="px-5  border 1 solid border-orange-500 mt-4 text-orange-500 py-2 ml-24">Read More</button>
                    </div>
                    <div className="w-60 h-80 ml-10 border 2 solid border-gray-400 mt-4">
                        <h1 className="text-center">Filter by Menu</h1>
                        <div className="flex justify-center">
                            <Image className="ml-2 mt-2" width={50} height={50} src="/chi-1.jpg"alt="."/>
                            <h1 className="ml-2 mt-2 "> Chicken Fry</h1>
                            <h1 className="ml-2 mt-2">26</h1>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Image className="ml-2 " width={50} height={50} src="/chi-2.jpg"alt="."/>
                            <h1 className="ml-2 ">Burger Food</h1>
                            <h1 className="ml-2  ">46</h1>
                        </div>
                        <div className="flex ">
                            <Image className="ml-10 mt-2" width={50} height={50} src="/chi-3.jpg"alt="."/>
                            <h1 className="ml-2 mt-2">Pizza</h1>
                            <h1 className="ml-12 mt-2">46</h1>
                        </div>
                        <div className="flex justify-center ml-2 mt-2">
                            <Image width={50}height={50} src="/chi-4.jpg"alt="."/>
                            <h1 className="ml-2">Fresh Fruits</h1>
                            <h1 className="ml-2">46</h1>
                        </div>
                        <div className="flex justify-center ml-2 mt-2">
                            <Image width={50} height={50} src="/chi-5.jpg"alt="."/>
                            <h1 className="ml-2">Vegetables</h1>
                            <h1 className="ml-2">16</h1>
                        </div>


                    </div>
                    </div>
                    </section>
                    <section>
                        <div className="flex ">
                            <div className="ml-24 mt-6">
                                <Image  className="mt-20"width={500} height={500} src="/soup-1.jpg"alt="."/>
                                <h1 className="font-bold mt-6 text-xl">The Ultimate Hangover Burger:Egg in a Hole Burger</h1>
                                <p className="mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                <p>totam libero sapiente eveniet, nam inventore sint necessita.</p>
                                <p>amet con Modi non iste quo doloremque veniam itaque sint ipsam, es</p>
                                <button className="px-5  border 1 solid border-orange-500 mt-4 text-orange-500 py-2 ">Read More</button>
                            </div>
                            <div className="ml-10">
                                <div className="w-96 h-72 border 2 solid border-gray-400 ">
                                    <h1 className="ml-7 font-bold mt-3 text-xl mb-4">Popular Tags</h1>
                                    <div className="flex justify-around mt-2">
                                        <button className="px-2 py-2 ml-3 text-gray-400 border 2 solid border-gray-400">Sandwich</button>
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Tiqa</button>
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Barbq</button>
                                    </div>
                                    <div className="flex justify-around mt-2">
                                        <button className="px-2 py-2  text-gray-400 border 2 solid border-gray-400">Restruant</button>
                                        <button  className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Chicken sharma</button>
                                    </div>
                                    <div className="flex justify-evenly mt-2">
                                        <button  className="px-4 py-2 text-gray-400 border 2 solid border-gray-400">Health</button>
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Fastfood</button>
                                        <button  className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Food</button>
                                    </div>
                                    <div className="flex justify-evenly mt-4">
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Pizza</button>
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Burger</button>
                                        <button className="px-2 py-2 text-gray-400 border 2 solid border-gray-400">Chicken</button>
                                    </div>
                                </div>
                                <div className="w-96 h-80 border 2 mt-4 solid border-gray-400">
                                    <h1 className="ml-7 font-bold mt-6 mb-4">Photo Gallary</h1>
                                    <div className="flex justify-evenly">
                                        <Image className="ml-"width={100} height={100}src="/so-2.jpg"alt="."/>
                                        <Image  className="ml-"width={100} height={100}src="/so-4.jpg"alt="."/>
                                        <Image className="ml-" width={100} height={100} src="/so-5.jpg"alt="."/>
                                    </div>
                                    <div className="flex justify-evenly mt-3">
                                        <Image width={100} height={100} src="/so-6.jpg"alt="."/>
                                        <Image className="ml-7" width={100} height={100}src="/so-7.jpg"alt="."/>
                                        <Image  width={100}height={100}src="/column2.jpg"alt="."/>
                                    </div>
                                </div>
                                <div className="w-96 h-36 border 2  mt-4 solid border-gray-400">
                                    <h1>Follow us</h1>
                                    <div className="flex justify-evenly mt-7">
                                   <Image width={30} height={30} src="/si-1.jpg"alt="."/>
                                    <Image width={30} height={30} src='/si-2.jpg'alt="."/>
                                    <Image width={30} height={30} src="/si-3.jpg"alt="."/>
                                    <Image width={30} height={30} src="/si-4.jpg"alt="."/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </section>
                    <section>
                        <div className="ml-24">
                            <Image  width={500} height={500} src="/so-1.jpg"alt="."/>
                            <h1 className="mt-4 font-bold">My Favourite Easy Black Pizza Toast Recipe</h1>
                            <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                            <p> Assumenda iure quaerat iste dolor ipsa? Numquam quaerat.</p>
                            <p>asperiores nobis ratione libero, assumenda consequuntur quasi </p>
                            <button className="px-5 mb-11 border 1 solid border-orange-500 mt-4 text-orange-500 py-2">Read More </button>
                        </div>
                        
                    </section>

        </main>
        </div>
    )
}