// import React from 'react';


// function Footer() {
//   return (
//     <footer className="bg-white text-black py-8">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row justify-between">
//           <div className="mb-6 md:mb-0">
//             <h2 className="text-xl font-bold mb-4">Funiro.</h2>
//             <p className="text-sm">
//               400 University Drive Suite 200 Coral <br/> Gables, <br/> FL 33134 USA
//             </p>
//           </div>

//           <div className="flex flex-col md:flex-row">
//             <div className="mb-6 md:mr-8">
//               <h3 className="text-lg font-semibold mb-2">Links</h3>
//               <ul>
//                 <li><a href="#" className="hover:underline">Home</a></li>
//                 <li><a href="#" className="hover:underline">Shop</a></li>
//                 <li><a href="#" className="hover:underline">About</a></li>
//                 <li><a href="#" className="hover:underline">Contact</a></li>
//               </ul>
//             </div>

//             <div className="mb-6 md:mr-8">
//               <h3 className="text-lg font-semibold mb-2">Help</h3>
//               <ul>
//                 <li><a href="#" className="hover:underline">Payment Options</a></li>
//                 <li><a href="#" className="hover:underline">Returns</a></li>
//                 <li><a href="#" className="hover:underline">Privacy Policies</a></li>
//               </ul>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
//               <form>
//                 <input type="email" placeholder="Enter Your Email Address" className="border border-gray-300 p-2 mb-2" />
//                 <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">SUBSCRIBE</button>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="text-center mt-8">
//           <p className="text-sm">© 2023 Funiro. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;


import React from "react";
import { Poppins } from 'next/font/google'
const poppins = Poppins({
    weight: '700', // Variable font
    subsets: ['latin'],
})

const Footer = () => {
  return (
    <footer className={`bg-white py-10 border-t border-gray-200`}>
      <div className="container mx-auto px-4 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            <h2 className= {`${poppins.className} text-xl  mb-4`}>Funiro.</h2>
            <address className="text-black not-italic">
              400 University Drive Suite 200 Coral  <br/> Gables, <br/> FL 33134 USA
            </address>
          </div>

          {/* Links and Help */}
          <div className="flex justify-between">
            {/* Links Section */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-500">Links</h3>
              <ul className="space-y-2 text-black font-semibold py-2">
                <li className="py-3">Home</li>
                <li className="py-3">Shop</li>
                <li className="py-3">About</li>
                <li className="py-3">Contact</li>
              </ul>
            </div>
            {/* Help Section */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-500">Help</h3>
              <ul className="space-y-2 text-black font-semibold">
                <li className="py-3">Payment Options</li>
                <li className="py-3">Returns</li>
                <li className="py-3">Privacy Policies</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-500">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-white text-black font-bold px-6 rounded-r-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-sm text-black">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

