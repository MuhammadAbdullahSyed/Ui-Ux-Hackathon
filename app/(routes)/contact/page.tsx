import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { TbClockShield } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaHeadsetSolid } from "react-icons/lia";


const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("/image/shop1.png")' }}>
        <div className="absolute inset-0 bg-opacity-90"></div>
        <div className="relative flex items-center justify-center h-full text-black">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-2 text-sm">Home &gt; Contact</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-center p-3">Get In Touch With Us</h2>
              <p className="mt-2 text-gray-500">
                For more information about our products & services, please feel free to drop us an email.
                Our staff is always here to help you out. Do not hesitate!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
              <FaLocationDot className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className="font-bold text-black py-2">Address</h4>
                  <p className="text-gray-500">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
              <FaPhoneAlt className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className="font-bold text-black py-2">Phone</h4>
                  <p className="text-gray-500">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-500">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
              <MdAccessTimeFilled  className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className=" font-bold text-black py-2">Working Time</h4>
                  <p className="text-black ">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Abc"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Abc@def.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Hi! I'd like to ask about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-black py-2 px-4 rounded-md shadow-sm border-black border-spacing-6 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
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

export default ContactPage;