import React from 'react';

import { FiFilter } from "react-icons/fi"; // For the Filter Icon
import { BsGrid3X3, BsList } from "react-icons/bs"; // For grid and list icons
import Image from 'next/image';
import { HiOutlineTrophy } from "react-icons/hi2";
import { TbClockShield } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaHeadsetSolid } from "react-icons/lia";

import { Poppins } from 'next/font/google'
const poppins = Poppins({
    weight: '600', 
    subsets: ['latin'],
})

    const products = [
      {
        id: 1,
        name: "Syltherine",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/Syltherine.png", 
        badge: "-30%",
      },
      {
        id: 2,
        name: "Leviosa",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/Levisoa.png",
        
      },
      {
        id: 3,
        name: "Lolito",
        category: "Luxury sofa",
        price: "Rp 7,000,000",
        image: "/image/Lolito.png",
        badge: "-50%"
      },
      {
        id: 4,
        name: "Respira",
        category: "Outdoor table and stool",
        price: "Rp 5,000,000",
        image: "/image/Respira.png",
        badge: "-30%",
      },
      {
        id: 5,
        name: "Syltherine",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/Syltherine.png", 
        badge: "-30%",
      },
      {
        id: 6,
        name: "Abc",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/abc.png",
        
      },
      {
        id: 7,
        name: "Lolito",
        category: "Luxury sofa",
        price: "Rp 7,000,000",
        image: "/image/Lolito.png",
        badge: "-50%"
      },
      {
        id: 8,
        name: "Respira",
        category: "Outdoor table and stool",
        price: "Rp 5,000,000",
        image: "/image/Respira.png",
        badge: "-30%",
      },

      {
        id: 9,
        name: "Syltherine",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/Syltherine.png", 
        badge: "-30%",
      
      },
      {
        id: 10,
        name: "Abc",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/abc.png",
      },
      {
        id: 11,
        name: "Lolito",
        category: "Luxury sofa",
        price: "Rp 7,000,000",
        image: "/image/Lolito.png",
        badge: "-50%",
        
      },
      {
        id: 12,
        name: "Respira",
        category: "Outdoor table and stool",
        price: "Rp 5,000,000",
        image: "/image/Respira.png",
        badge: "-30%",
      },
      {
        id: 13,
        name: "Syltherine",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/Syltherine.png", 
        badge: "-30%",
      
      },
      {
        id: 14,
        name: "Abc",
        category: "Stylish chair",
        price: "Rp 2,500,000",
        image: "/image/abc.png",
      },
      {
        id: 15,
        name: "Lolito",
        category: "Luxury sofa",
        price: "Rp 7,000,000",
        image: "/image/Lolito.png",
        badge: "-50%",
        
      },
      {
        id: 16,
        name: "Respira",
        category: "Outdoor table and stool",
        price: "Rp 5,000,000",
        image: "/image/Respira.png",
        badge: "-30%",
}];

const Shop = () => {
  return (
    <div>
    <div className="relative bg-gray-100">
        {/* 1st section shop Background */}
      {/* Background Image */}
      <div className="absolute inset-0">
          <Image
            src="/image/shop1.png"
            alt="Background"
            height={316}
            width={1440}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

      {/* Overlay Content */}
      <div className={`${poppins.className} relative flex flex-col items-center justify-center h-48`}>
        <h1 className="text-3xl font-bold text-black">Shop</h1>
        <p className="text-sm text-black mt-2">
          <a href="/" className="hover:underline text-black">Home</a> &gt; Shop
        </p>
      </div>
      </div>
    {/* 2nd component */}
    <div className="flex items-center justify-between bg-[#FAF4F4] px-4 py-2 border-b border-gray-200 mt-6">
      {/* Left Section: Filter and Layout Toggle */}
      <div className="flex items-center space-x-4">
        {/* Filter Button */}
        <button className="flex items-center space-x-1 text-black hover:text-black">
          <FiFilter className="text-lg" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Layout Toggle */}
        <div className="flex items-center space-x-2">
          <button className="p-1 text-black hover:text-black">
            <BsGrid3X3 className="text-lg" />
          </button>
          <button className="p-1 text-black hover:text-black">
            <BsList className="text-lg" />
          </button>
        </div>
      </div>

      {/* Middle Section: Result Count */}
      <div className="text-sm text-black">
        Showing 1–16 of 32 results
      </div>

      {/* Right Section: Items per Page and Sort By */}
      <div className="flex items-center space-x-4">
        {/* Show Items Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-black">Show</span>
          <input
            type="number"
            className="w-12 text-center border rounded-md bg-gray-50 text-gray-600 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="16"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-black">Sort by</span>
          <select
            className="px-2 py-1 bg-gray-50 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
           
          </select>
        </div>
    </div>
    </div>
{/* 3rd section  */}

{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          > {/* Badge */}
          {product.badge && (
            <span className={`absolute top-3 right-3 bg-red-500 text-white text-xs font-medium py-1 px-2 rounded`}>
              {product.badge}
            </span>
          )}
        
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              height={350}
              width={350}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800 ">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.category}</p>
              <p className="text-sm font-medium text-gray-900 my-4 ">{product.price}</p>
            </div>
            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition">
              <button className="text-sm text-black bg-[#B88E2F] px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6 mb-10">
        <button className="px-3 py-1 bg-[#B88E2F] text-black rounded hover:bg-gray-300">1</button>
        <button className="px-3 py-1 bg-[#F9F1E7] text-black rounded hover:bg-gray-800">2</button>
        <button className="px-3 py-1 bg-[#F9F1E7] text-black rounded hover:bg-gray-800">3</button>
        <button className="px-3 py-1 bg-[#F9F1E7] text-black rounded hover:bg-gray-800">
          Next
        </button>
      </div>
      {/* 4th section */}
{/* High Quality */}
<div className="flex items-center space-x-4 text-center bg-[#FAF3EA] w-[1440] h-[270] justify-evenly">
<div >
          <HiOutlineTrophy className="w-10 h-10 mt-10 text-gray-600" />
          <div>
            <h3 className="font-medium text-lg ">High Quality</h3>
            <p className="text-sm text-gray-500 mb-10">Crafted from top materials</p>
          </div>
        </div>

        {/* Warranty Protection */}
        <div className="flex items-center space-x-4 text-center">
          <TbClockShield className="w-10 h-10 text-gray-600" />
          <div>
            <h3 className="font-medium text-lg">Warranty Protection</h3>
            <p className="text-sm text-gray-500">Over 2 years</p>
          </div>
        </div>

        {/* Free Shipping */}
        <div className="flex items-center space-x-4 text-center">
          <TbTruckDelivery className="w-10 h-10 text-gray-600" />
          <div>
            <h3 className="font-medium text-lg">Free Shipping</h3>
            <p className="text-sm text-gray-500">Order over $150</p>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="flex items-center space-x-4 text-center">
          <LiaHeadsetSolid className="w-10 h-10 text-gray-600" />
          <div>
            <h3 className="font-medium text-lg">24/7 Support</h3>
            <p className="text-sm text-gray-500">Dedicated support</p>
          </div>
        </div>
        </div>
      </div>
    
  );
};


export default Shop;



