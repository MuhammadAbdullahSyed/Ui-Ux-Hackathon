import React from "react";
import Image from 'next/image';
import dining from '../../public/image/dining.jpeg';
import living from '../../public/image/living.jpeg';
import bedroom from '../../public/image/bedroom.jpeg';

const BrowseTheRange = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Browse The Range</h2>
        <p className="text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={dining}
              alt="Dining"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Dining</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={living}
              alt="Living"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Living</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={bedroom}
              alt="Bedroom"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Bedroom</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseTheRange;
