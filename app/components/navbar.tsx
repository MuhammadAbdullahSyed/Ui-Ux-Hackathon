// import React from 'react'
// import Link from 'next/link'
// import { FaRegUser } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
// import { IoIosHeartEmpty, IoIosSearch } from "react-icons/io";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import Image from 'next/image';
// import logo from '../../../image/Logo.png';

// function Navbar() {
//   return (
//     <div className='bg-[#FFFFFF] text-black w-100% h-[100px] flex justify-between pr-[100px]'>
//       {/* <div className='space-x-2'>
//       <Image src={logo} alt="Logo" height={80} width={150}/>
//       </div> */}
//       {/* left side */}
//       <div className='flex w-[430] h-[24px] gap-[75px] relative left-[505px] pt-[38px] font-semibold'>
        
//         <Link href="/">Home</Link>
//         <Link  href="/">Shop</Link>
//         <Link  href="/">About</Link>
//         <Link  href="/">Contact</Link>
//     </div >
//     {/* // right Side */}
//     <div className="flex w-[247px] h-[28px] gap-[45px] pt-[36px]">
//     <FaRegUser size={24} />

//     <CiSearch size={24}/>
//     <IoIosHeartEmpty size={24}/>
//     <HiOutlineShoppingCart size={24}/>
//     </div>

//     </div>

//   )
// }

// export default Navbar

import React from "react";
import Link from "next/link";
import { FiUser, FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";
import Image from 'next/image';
import logo from '../../public/image/Logo.png';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <Image src={logo} alt="Logo" height={80} width={150}/>
      
        </div>

        {/* Navigation Links */}
         <div className='hidden md:flex items-center space-x-8 font-medium text-gray-700'>
        
    <Link href="/">Home</Link>
     <Link  href="shop">Shop</Link>
     <Link  href="blog">Blog</Link>
     <Link  href="contact">Contact</Link>
    </div >

        {/* Icons */}
        <div className="flex items-center space-x-6 text-gray-700">
          <FiUser className="w-5 h-5 hover:text-gray-900 transition cursor-pointer" />
          <FiSearch className="w-5 h-5 hover:text-gray-900 transition cursor-pointer" />
          <FiHeart className="w-5 h-5 hover:text-gray-900 transition cursor-pointer" />
          <FiShoppingCart className="w-5 h-5 hover:text-gray-900 transition cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
