

import Image from 'next/image'
import React from 'react'

export default function Five() {
  return (
    <div className="min-h-screen bg-black text-white p-2 flex flex-col justify-center items-center">
      <div className="w-full -mt-80 max-w-[1000px] grid gap-6 md:grid-cols-4 text-center">
        <div className="p-6  shadow-md rounded-md text-black">
          <Image width={300} height={300} src="/order1.jpg" alt="Pizza" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold text-white">Professional chief</div>
          <div className='text-white'>420</div>
        </div>
        <div className="p-6 shadow-md rounded-md text-black">
          <Image width={300} height={200} src="/order2.jpg" alt="Another" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold text-white">Items of food</div>
          <div>320</div>
        </div>
        <div className="p-6  shadow-md rounded-md text-black">
          <Image width={200} height={300} src="/order3.jpg" alt="Yet Another" className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold text-white">Years of Experience</div>
          <div className='text-white'>30 +</div>
        </div>
        <div className="p-6 shadow-md rounded-md text-black">
          <Image width={300} height={300} src="/order4.jpg" alt="Final" className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold text-white">Happy customers</div>
          <div className='text-white'>220</div>
        </div>
      </div>
    </div>
  )
}