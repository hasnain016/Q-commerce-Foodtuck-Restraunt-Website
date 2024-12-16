
import Image from "next/image"




export default function About(){
    return(
        <main>
            <section>
            <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/bg-1.jpg')",
        }}
      >
        <h1 className="text-white  text-5xl font-bold">about us</h1>
        
      </div>
                <div className="flex justify-around">
                    <div className="flex mt-10">
                        <Image width={300} height={100} src="/about-1.jpg"alt="."/>
                        <div className="">
                            <Image className="mt-5 ml-9"  width={200} height={200}src="/about-2.jpg"alt="."/>
                            <Image className="mt-10 ml-9" width={200} height={200}src="/about-3.jpg"alt="."/>
                        </div>

                    </div>
                    <div className="mt-28 ml-6">
                        <i className="text-orange-400">about us</i>
                        <h1 className="font-bold text-5xl">Food is an important</h1>
                        <h1 className="font-bold text-5xl">Part of a balanced diet</h1>
                        <p className="mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing.Necessitatibus laborum</p>
                        <p>Atque saepe, sunt itaque vel quos  quasi voluptatibus soluta doloremque</p>
                        <p>Pusto amet natus obcaecati consequatur voluptatem quia unde odio dolorem </p>
                        <div className="flex">
                        <button className="px-4 py-1 mt-5 bg-orange-400">Show more</button>
                        <div className="flex mt-4 ml-7">
                        <Image width={50} height={50} src="/about-4.jpg"alt="."/>
                        <h1 className="ml-1 mt-4 font-bold">Watch more</h1>
                        </div>
                        </div>
                    </div>
                </div>
                </section>
                <section>
                    <div>
                        <h1 className="font-bold text-3xl text-center">Why choose us</h1>
                        <p className="text-center"> Lorem ipsum dolor sit amet,elit. Similique dolorum maiores</p>
                        <p className="text-center"> consectetur adipisicing elit. Aliquid est</p>
                    </div>
                    <div className="flex justify-center">
                        <Image width={900} height={500} src="/about-5.jpg"alt="."/>
                    </div>
                    <div className="w-2/3 h-72 ml-60  flex justify-around">
                    <div className=" ml- mt-10 ">
                        <Image className="ml-14" width={50} height={50} src="/about-6.jpg"alt="."/>
                        <h1 className="ml-10 font-bold ">Best cheif</h1>
                        <p className="ml-3">lore isht loser gegumostache</p>
                        <p className="ml-2">tostache merako nospita asmea</p>
                        <p className="ml-4">amendo lostache keku tesmeane</p>
                    </div>
                    <div>
                        <Image className="mt-10 ml-14"width={50} height={50} src="/about-7.jpg"alt="."/>
                        <div className="flex font-bold ml-9">
                        <h1 className="">120</h1>
                        <h1> Item food</h1>
                        </div>
                        
                        <p className="ml-3">lore isht loser gegumostache</p>
                        <p className="ml-2">tostache merako nospita asmea</p>
                        <p className="ml-4">amendo lostache keku tesmeane</p>
                    </div>
                    <div>
                        <Image className="mt-10 ml-10" width={50} height={50} src="/about-8.jpg"alt="."/>
                        <h1 className="font-bold ml-4">Clean Environment</h1>
                        <p>Lorem ipsum dolor sit amet consectetu</p>
                        <p>tostache merako nospita asmea</p>
                        <p>amendo lostache keku tesmeane</p>
                    </div>
                    </div>
                </section>
                <section className="w-full h-64 flex justify-center items-center align-middle bg-orange-400">
                    <div className="">
                        <h1 className="text-white text-2xl ml-7 font-bold">Team Member</h1>   
                        <p className="text-center text-white">Lorem  ipsum dolor sit amet,consectetur adipiscing elit.</p>
                        <p className="text-white">Varius sed pharetra dictum neque massa congue</p>             
                    </div>
                </section>
                <section>
                    
                <div className="flex justify-center">
                    <div>
                    <Image className="mr-2" width={150} height={150}src='/about-9.jpg'alt="."/>
                    <h1 className="text-gray-800 text-center">Mark henry</h1>
                    <h1 className="text-gray-500 text-center" >Owner</h1>
                    </div>
                    <div>
                    <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg'alt="."/>
                    <h1 className="text-gray-800 text-center">Lucky Helen</h1>
                    <h1 className="text-gray-500 text-center">cheif</h1>
                    </div>
                    <div>
                    <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg'alt="."/>
                    <h1 className="text-gray-800 text-center">Moon Henry</h1>
                    <h1 className="text-gray-500 text-center">Founder</h1>
                    </div>
                    <div>
                    <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg'alt="."/>
                    <h1 className="text-gray-800 text-center">Tom Monrow</h1>
                    <h1 className="text-gray-500 text-center">Specialist</h1>
                    </div> 
                    </div>
                </section>
                <section>
                    <div className="ml-20">
                    <i className="text-orange-500">Testimonial</i>
                    <h1 className="text-4xl font-bold">What our client are saying</h1>
                    </div>
                    <div className="w-2/3 h-72   bg-gray-50    ml-80">
                    <Image className="ml-60 mt-10 " width={50} height={50} src="/about-10.jpg"alt="."/>
                    <p className="ml-28 mt-12"> Lorem ipsum dolor si amet consectetur adipiscing elit.Quisque diam pellentesque</p>
                    <p className="ml-28">bibendum non dui volutpat fringilla bibendum. Urna elit augue urna, vitae feugiat</p>
                    <p className="ml-28">pretium donec id elementum.uilrices mattis sed vitae mus risus. Lacus nisi,et ac</p>
                    <h1 className="font-bold  text-xl mt-6 text-center">Alamin Hasan</h1>
                    <h1 className="text-center  text-gray-500">Food specialist</h1>

                    </div>

                </section>
                <section>
                    <div>
                        <h1 className="font-bold text-2xl text-center ml-60 mt-12">Our Food Menu</h1>
                        <p className="text-center text-gray-400 ml-60 mt-3">Lorem ispum dolor sit amet consectetur adipiscing elit</p>
                        <p className=" text-center ml-60 text-gray-400">varius sed pharetra dictum neque phassa conque</p>
                    </div>
                    <div className="w-1/2 h-20  ml-96">
                    <ul className="flex justify-evenly">
                        <li className="text-orange-400">Break Fast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>
                    </ul>

                    </div>
                    <div className="w-3/4 h-2/3  ml-28 flex justify-between">
                        <div>
                            <div className="flex justify-between">
                                <div>
                                <h1 className="text-orange-400 font-bold text-2xl">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500 ">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold ml-36">36$</h1>
                            </div>
                            <hr></hr>
                            <div className="flex justify-between">
                                <div>
                            <h1 className="text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500 ">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold ml-36 " >36$</h1>
                            </div>
                            <hr></hr>
                            <div className="flex justify-between">
                                <div>
                            <h1 className=" text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold ">36$</h1>
                            </div>
                            <hr></hr>
                            <div className="flex justify-between">
                                <div className="">
                            <h1 className=" text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold">36$</h1>
                                </div>
                                <hr></hr>
                        </div>
                        <div>
                            <div className="flex justify-between mt-">
                                <div>
                        <h1 className="text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold "> 36$</h1>
                        </div>
                        <hr></hr>
                        <div className="flex justify-between mt-10">
                            <div>
                        <h1 className="text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500 mt-6">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold">36$</h1>
                        </div>
                        <hr></hr>
                        <div className="flex justify-between mt-7">
                            <div>
                        <h1 className="text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold">36$</h1>
                        </div>
                        <hr></hr>
                        <div className="flex justify-between ">
                            <div>
                        <h1 className="text-2xl font-bold">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500 ">Toasted French bread topped with romano ,cheddar</p>
                                <p className="text-gray-400">560 CAL</p> 
                                </div>
                                <h1 className="text-orange-400 text-xl font-semibold ml-36">36$</h1>
                        </div>
                        <hr></hr>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center">
                    <button className="py-2 px-3 text-orange-400 border mt-9  border-orange-400">View Menu</button>
                </section>
        </main>
    )
}