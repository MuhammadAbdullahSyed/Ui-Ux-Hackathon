import React from "react";
import Image from "next/image";

export default function InspirationSection() {
    return (
      <section className="bg-[#f9f6f1] py-12">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-lg">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
              50+ Beautiful rooms inspiration
            </h1>
            <p className="text-gray-600 mt-4">
              Our designer already made a lot of beautiful prototype of rooms that
              inspire you.
            </p>
            <button className="mt-6 px-6 py-3 bg-[#B88E2F] text-white font-semibold rounded shadow-md hover:bg-[#B88E2F] transition">
              Explore More
            </button>
          </div>
  
          {/* Image Section */}
          <div className="relative lg:w-2/3">
            <div className="grid grid-cols-3 -gap-2">
              {/* Main Image */}
              <div className="col-span-2">
                <div className="relative">
                  <Image
                    src="/image/Innerspace.png"
                    alt="Inner Peace Room"
                    height={582}
                    width={404}
                    className="mb-7 rounded-lg shadow-lg"
                  />
                  {/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 p-4 rounded">
                    <span className="text-sm text-gray-500">01 — Bed Room</span>
                    <h3 className="text-lg font-semibold">Inner Peace</h3>
                  </div> */}
                  {/* <button className="absolute bottom-4 right-4 bg-[#B88E2F] text-white p-2 rounded-full shadow-md hover:bg-yellow-600">
                    →
                  </button> */}
                </div>
              </div>
  
              {/* Secondary Image */}
              <div className="relative w-[350px] h-[450px] flex-1 -ml-40 rounded-md shadow overflow-hidden">
                <Image
                  src="/image/Rectangle25.png"
                  alt="Room inspiration 2"
                  height={500}
                    width={350}
                  className="rounded-lg shadow-lg space"
                />
              

            </div>
       

            
          </div>
            {/* Pagination */}
            <div className="flex justify-center -mt-20 space-x-4 ">
              <span className="w-3 h-3 bg-[#B88E2F] rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
  