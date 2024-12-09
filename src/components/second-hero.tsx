


import React from 'react'

export default function Five() {
  return (
    <div className="min-h-screen bg-black text-white p-2 flex flex-col justify-center items-center">
      <div className="w-full -mt-80 max-w-[1000px] grid gap-6 md:grid-cols-4 text-center">
        <div className="p-6  shadow-md rounded-md text-black">
          <img src="/order1.jpg" alt="Pizza" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Professional chief</div>
          <div>420</div>
        </div>
        <div className="p-6 shadow-md rounded-md text-black">
          <img src="/order2.jpg" alt="Another" className="mb-4 rounded-md" />
          <div className="text-2xl font-bold">Items of food</div>
          <div>320</div>
        </div>
        <div className="p-6  shadow-md rounded-md text-black">
          <img src="/order3.jpg" alt="Yet Another" className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Years of Experience</div>
          <div>30 +</div>
        </div>
        <div className="p-6 shadow-md rounded-md text-black">
          <img src="/order4.jpg" alt="Final" className="mb-4 h-60 w-52 rounded-md" />
          <div className="text-2xl font-bold">Happy customers</div>
          <div>220</div>
        </div>
      </div>
    </div>
  )
}