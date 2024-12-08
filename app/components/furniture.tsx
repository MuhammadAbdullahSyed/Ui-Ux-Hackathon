import React from "react";
import Image from 'next/image';

export default function FuniroFurniture() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#616161] mb-8">
          Share your setup with <br/> <span className="text-[#3A3A3A]">#FuniroFurniture</span>
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3  items-center">
          <div className="relative">
            <Image
              src="/image/half.png"
              alt="Furniture setup 1"
              height={50}
              width={274}
              className="rounded-lg shadow-lg object-cover h-[550px]"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Laptop.png"
              alt="Furniture setup 2"
              height={312}
              width={451}
              className="rounded-lg shadow-lg object-cover -ml-52 mt-60"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Chairtable.png"
              alt="Furniture setup 3"
              height={392}
              width={295}
              className="rounded-lg shadow-lg object-cover -ml-60 mt-96"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Bed.png"
              alt="Furniture setup 4"
              height={348}
              width={290}
              className="rounded-lg shadow-lg object-cover mb-96"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Diningtable.png"
              alt="Furniture setup 5"
              height={433}
              width={425}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Chair.png"
              alt="Furniture setup 6"
              height={323}
              width={381}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="relative">
            <Image
              src="/image/Vase.png"
              alt="Furniture setup 7"
              height={242}
              width={344}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="relative">
          <Image
              src="/image/Frame.png"
              alt="Furniture setup 8"
              height={242}
              width={178}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="relative">
          <Image
              src="/image/Stove.png"
              alt="Furniture setup 9"
              height={196}
              width={248}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
