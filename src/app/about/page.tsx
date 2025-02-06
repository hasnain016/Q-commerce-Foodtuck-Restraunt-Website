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
                    <h1 className="text-white text-4xl sm:text-5xl font-bold">about us</h1>
                </div>

                <div className="flex flex-col sm:flex-row justify-around mt-10 sm:mt-0">
                    <div className="flex flex-col sm:flex-row items-center">
                        <Image width={300} height={100} src="/about-1.jpg" alt="."/>
                        <div className="mt-5 sm:ml-9">
                            <Image className="mt-5 sm:mt-0" width={200} height={200} src="/about-2.jpg" alt="."/>
                            <Image className="mt-10 sm:ml-9 sm:mt-0" width={200} height={200} src="/about-3.jpg" alt="."/>
                        </div>
                    </div>

                    <div className="mt-10 sm:mt-28 sm:ml-6">
                        <i className="text-orange-400">about us</i>
                        <h1 className="font-bold text-3xl sm:text-5xl">Food is an important</h1>
                        <h1 className="font-bold text-3xl sm:text-5xl">Part of a balanced diet</h1>
                        <p className="mt-8 text-sm sm:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing. Necessitatibus laborum</p>
                        <p className="text-sm sm:text-base">Atque saepe, sunt itaque vel quos quasi voluptatibus soluta doloremque</p>
                        <p className="text-sm sm:text-base">Pusto amet natus obcaecati consequatur voluptatem quia unde odio dolorem</p>

                        <div className="flex flex-col sm:flex-row items-center">
                            <button className="px-4 py-1 mt-5 bg-orange-400">Show more</button>
                            <div className="flex mt-4 sm:mt-0 ml-7 items-center">
                                <Image width={50} height={50} src="/about-4.jpg" alt="."/>
                                <h1 className="ml-1 mt-4 font-bold">Watch more</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <h1 className="font-bold text-3xl text-center">Why choose us</h1>
                    <p className="text-center text-sm sm:text-base">Lorem ipsum dolor sit amet, elit. Similique dolorum maiores</p>
                    <p className="text-center text-sm sm:text-base">consectetur adipisicing elit. Aliquid est</p>
                </div>

                <div className="flex justify-center">
                    <Image width={900} height={500} src="/about-5.jpg" alt="."/>
                </div>

                <div className="w-full sm:w-2/3 h-auto sm:h-72 flex flex-col sm:flex-row justify-around mt-10 sm:ml-60">
                    <div className="ml-10">
                        <Image className="ml-14" width={50} height={50} src="/about-6.jpg" alt="."/>
                        <h1 className="ml-10 font-bold">Best Chef</h1>
                        <p className="ml-3 text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <Image className="mt-10 ml-14" width={50} height={50} src="/about-7.jpg" alt="."/>
                        <div className="flex font-bold ml-9">
                            <h1 className="">120</h1>
                            <h1> Item food</h1>
                        </div>
                        <p className="ml-3 text-sm sm:text-base">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="mt-10 sm:mt-0">
                        <Image className="mt-10 ml-10" width={50} height={50} src="/about-8.jpg" alt="."/>
                        <h1 className="font-bold ml-4 text-sm sm:text-base">Clean Environment</h1>
                        <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet consectetu</p>
                    </div>
                </div>
            </section>

            <section className="w-full h-64 flex justify-center items-center bg-orange-400">
                <div className="text-center">
                    <h1 className="text-white text-2xl font-bold">Team Member</h1>   
                    <p className="text-white text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </section>

            <section>
                <div className="flex flex-wrap justify-center">
                    <div className="text-center mt-5">
                        <Image className="mr-2" width={150} height={150} src='/about-9.jpg' alt="."/>
                        <h1 className="text-gray-800">Mark Henry</h1>
                        <h1 className="text-gray-500">Owner</h1>
                    </div>

                    <div className="text-center mt-5">
                        <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg' alt="."/>
                        <h1 className="text-gray-800">Lucky Helen</h1>
                        <h1 className="text-gray-500">Chef</h1>
                    </div>

                    <div className="text-center mt-5">
                        <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg' alt="."/>
                        <h1 className="text-gray-800">Moon Henry</h1>
                        <h1 className="text-gray-500">Founder</h1>
                    </div>

                    <div className="text-center mt-5">
                        <Image className="ml-2 mr-2" width={150} height={150} src='/about-9.jpg' alt="."/>
                        <h1 className="text-gray-800">Tom Monrow</h1>
                        <h1 className="text-gray-500">Specialist</h1>
                    </div>
                </div>
            </section>

            <section>
                <div className="ml-20 sm:ml-60">
                    <i className="text-orange-500">Testimonial</i>
                    <h1 className="text-4xl font-bold">What our clients are saying</h1>
                </div>

                <div className="w-full sm:w-2/3 bg-gray-50 mx-auto mt-10 sm:h-72">
                    <Image className="ml-60 mt-10" width={50} height={50} src="/about-10.jpg" alt="."/>
                    <p className="ml-28 mt-12 text-sm sm:text-base">Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    <p className="ml-28 text-sm sm:text-base">Bibendum non dui volutpat fringilla bibendum. Urna elit augue urna, vitae feugiat.</p>
                    <h1 className="font-bold text-xl mt-6 text-center">Alamin Hasan</h1>
                    <h1 className="text-center text-gray-500">Food specialist</h1>
                </div>
            </section>

            <section>
                <div className="text-center">
                    <h1 className="font-bold text-2xl sm:text-3xl mt-12">Our Food Menu</h1>
                    <p className="text-center text-gray-400 mt-3 sm:mt-6">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                </div>

                <div className="w-full sm:w-2/3 flex justify-evenly mt-6 mx-auto">
                    <ul className="flex flex-wrap justify-center space-x-6 text-orange-400">
                        <li>Breakfast</li>
                        <li>Lunch</li>
                        <li>Dinner</li>
                        <li>Dessert</li>
                        <li>Drink</li>
                        <li>Snack</li>
                    </ul>
                </div>

                <div className="w-full sm:w-3/4 flex justify-center mx-auto mt-8">
                    <div className="w-full sm:w-1/2">
                        <div className="flex justify-between mt-4">
                            <div>
                                <h1 className="text-orange-400 font-bold text-2xl">Alder Grilled Chinook Salmon</h1>
                                <p className="text-gray-500">Toasted French bread topped with romano, cheddar</p>
                                <p className="text-gray-400">560 CAL</p>
                            </div>
                            <h1 className="text-orange-400 text-xl font-semibold">$36</h1>
                        </div>
                        <hr />
                    </div>
                </div>
            </section>

            <section className="flex justify-center">
                <button className="py-2 px-3 text-orange-400 border mt-9 border-orange-400">View Menu</button>
            </section>
        </main>
    )
}
