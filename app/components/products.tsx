import React from "react";
import Image from "next/image";

const Products = () => {
  const products = [
    {
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      discount: "-30%",
      image: '/image/Syltherine.png',
    },
    {
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/image/Levisoa.png",
      overlay: true,
    },
    {
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image/Lolito.png",
    },
    {
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "/image/respira.png",
      newTag: true,
    },
    {
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "/image/grifo.png",
    },
    {
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      image: "/image/muggo.png",
      newTag: true,
    },
    {
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      discount: "-50%",
      image: "/image/pingky.png",
    },
    {
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      image: "/image/potty.png",
      newTag: true,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">Our Products</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="relative bg-white rounded-lg shadow-md overflow-hidden group">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                height={301}
                width={285}
                className="w-full object-cover h-[301px]"
              />

              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  {product.discount}
                </div>
              )}

              {/* New Tag */}
              {product.newTag && (
                <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  New
                </div>
              )}

              {/* Overlay */}
              {product.overlay && (
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-white">
                  <button className="bg-white text-black px-4 py-2 rounded-full font-semibold mb-4">
                    Add to cart
                  </button>
                  <div className="flex space-x-4 text-sm">
                    <button>Share</button>
                    <button>Compare</button>
                    <button>Like</button>
                  </div>
                </div>
              )}

              {/* Product Info */}
              <div className="p-4 bg-[#F4F5F7]" >
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.description}</p>
                <p className="font-bold text-black">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    {product.originalPrice}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {/* <div className="mt-10 text-center">
          <button className="px-6 py-2 bg-gray-100 text-black rounded-full border border-gray-300 hover:bg-gray-200 font-semibold">
            Show More
          </button>
        </div> */}
        <div className="text-center mt-12">
  {/* <button
    className="px-8 py-3 text-[#B88E2F] font-medium rounded-lg shadow-md focus:outline-[#B88E2F] focus:ring-2 focus:ring-[#B88E2F] transition"
  >
    Show More
  </button> */}

<button
      className="px-6 py-2 w-[245px] h-[48px] border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300 rounded"
    >
      Show More
    </button>

</div>

      </div>
    </section>
  );
};

export default Products;
