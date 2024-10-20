// export default function start() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <header className="flex justify-between items-center bg-white p-5 shadow-sm">
//         <div className="text-green-700 text-2xl font-bold">Better Mortgage</div>
//         <div>
//           <img
//             src="https://via.placeholder.com/50"
//             alt="Betsy"
//             className="w-12 h-12 rounded-full"
//           />
//         </div>
//         <div className="text-sm text-gray-500">
//           <p>
//             Need help? Call <strong>(415) 523 8837</strong>
//           </p>
//         </div>
//       </header>

//       {/* Main Section */}
//       <main className="bg-white text-center py-20 px-5 shadow-sm">
//         <h2 className="text-2xl font-semibold text-gray-700 mb-8">
//           Contact Us
//         </h2>

//         <div className="space-y-6">
//           <p className="text-gray-700">Please fill out the form below or call us at (415) 523 8837.</p>

//           {/* Simple Contact Form */}
//           <form className="max-w-md mx-auto space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full border border-gray-300 rounded-lg p-3"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full border border-gray-300 rounded-lg p-3"
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full border border-gray-300 rounded-lg p-3 h-32"
//             />
//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-white py-8 shadow-sm">
//         <div className="max-w-4xl mx-auto flex justify-around text-gray-700 text-lg">
//           <div className="text-center">
//             <strong className="block text-2xl">$100B</strong>
//             <span>Home loans funded entirely online</span>
//           </div>
//           <div className="text-center">
//             <strong className="block text-2xl">400K</strong>
//             <span>Customers who chose a Better Mortgage</span>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

import Footer from "@/components/Footer";
import React from "react";

const start = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="flex w-full  justify-between fixed items-center bg-white p-5 shadow-sm ">
        <div className="w-full text-md font-bold">
          <p className="text-green-700">Better</p>
          <p className="text-gray-500"> Mortgage</p>
        </div>
        

        
        <div className="ml-auto text-sm text-gray-500">
          <p>
            Need help? Call <strong>(415) 523 8837</strong>
          </p>
        </div>
        
      </header>

      <div className='flex'>
        
        <div className='mt-[86px] items-center'>
        <hr className="w-screen h-4 fixed border-gray-500 "/>
        {/* <img
          src="https://via.placeholder.com/50"
          alt="Betsy"
          className="w-12 h-12 rounded-full items-center fixed text-center justify-center"
        /> */}
        </div>
        </div>

      
       
         
        
      

      

      {/* Main Section */}
      <main className="bg-white text-center py-20 px-5 shadow-sm mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-8">
          Hi, I&aposm Betsy! <br /> What can I help you with?
        </h2>

        <div className="space-y-6 ">
          {/* Option Buttons */}
          <button className="flex  hover:border-green-700 border-4 items-center justify-center w-full max-w-md mx-auto py-4 px-6 border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-gray-50 hover:text-green-700">
            <span className="mr-3 ">🏠</span>
            Buying a home
          </button>

          <button className="flex hover:border-green-700 border-4 hover:text-green-700 items-center justify-center w-full max-w-md mx-auto py-4 px-6  border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-gray-50">
            <span className="mr-3">💰</span>
            Refinance my mortgage
          </button>

          <button className="flex  hover:text-green-700  hover:border-green-700 border-4 items-center justify-center w-full max-w-md mx-auto py-4 px-6 border-gray-300 rounded-lg text-lg text-gray-700 hover:bg-gray-50">
            <span className="mr-3">💵</span>
            Get cash from my home
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center mt-16 space-x-16">
          <div className="text-center">
            <strong className="block text-2xl text-gray-700">$100B</strong>
            <span className="text-sm text-gray-500">
              home loans funded entirely online
            </span>
          </div>
          <div className="text-center">
            <strong className="block text-2xl text-gray-700">400K</strong>
            <span className="text-sm text-gray-500">
              customers who chose a Better Mortgage
            </span>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-green-50 p-8 mt-12 rounded-md max-w-lg mx-auto">
          <h3 className="text-gray-700 font-semibold">
            After a few questions, you&aposll unlock:
          </h3>
          <ul className="text-gray-600 mt-4 space-y-3 text-left">
            <li>✅ Custom mortgage rates</li>
            <li>💡 Exclusive offers</li>
            <li>📱 A personalized dashboard</li>
          </ul>
        </div>
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default start;
