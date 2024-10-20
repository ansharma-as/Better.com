// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image'; // Import Next.js Image component

// const productInfo = [
//   {
//     title: "Buying your first home with Better",
//     description: "",
//     image: "https://via.placeholder.com/400", // Replace with actual image URL
//     link: "#",
//   },
//   {
//     title: "One Day Mortgage",
//     description: "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.",
//     image: "https://via.placeholder.com/400", // Replace with actual image URL
//     link: "#",
//   },
//   {
//     title: "Better HELOC",
//     description: "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity as cash in as little as 7 days.",
//     image: "https://via.placeholder.com/400", // Replace with actual image URL
//     link: "#",
//   },
//   {
//     title: "Insurance",
//     description: "",
//     image: "https://via.placeholder.com/400", // Replace with actual image URL
//     link: "#",
//   },
// ];

// const ProductInfo = () => {
//   const [activeTab, setActiveTab] = useState('Our products');

//   return (
//     <div className="p-8">
//       {/* Header Section */}
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-900">Got questions? We ve got answers</h1>
//       </div>

//       {/* Tabs */}
//       <div className="flex justify-center space-x-4 mb-8">
//         <button
//           className={`px-6 py-3 rounded-full border-2 ${activeTab === 'Our products' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300'}`}
//           onClick={() => setActiveTab('Our products')}
//         >
//           Our products
//         </button>
//         <button
//           className={`px-6 py-3 rounded-full border-2 ${activeTab === 'Calculators' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300'}`}
//           onClick={() => setActiveTab('Calculators')}
//         >
//           Calculators
//         </button>
//         <button
//           className={`px-6 py-3 rounded-full border-2 ${activeTab === 'Guides & FAQs' ? 'bg-green-700 text-white border-green-700' : 'bg-white text-gray-700 border-gray-300'}`}
//           onClick={() => setActiveTab('Guides & FAQs')}
//         >
//           Guides & FAQs
//         </button>
//       </div>

//       {/* Product Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {productInfo.map((product, index) => (
//           <div key={index} className="p-6 bg-green-100 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold mb-4">{product.title}</h2>
//             <p className="text-gray-700 mb-4">{product.description}</p>
//             <div className="flex justify-between items-center">
//               <a href={product.link} className="text-green-700 font-bold text-lg">
//                 <svg className="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path></svg>
//               </a>
//               <Image src={product.image} alt={product.title} width={128} height={128} className="rounded-lg shadow-md"/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductInfo;



