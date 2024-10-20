// "use client";
// import { useState } from "react";
// import Link from "next/link";

// // Dropdown Component
// const Dropdown = ({ label, links, isOpen, onMouseEnter, onMouseLeave }) => {
//   return (
//     <li
//       className="relative"
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//     >
//       <div className="cursor-pointer select-none flex items-center">{label}</div>
//       {isOpen && (
//         <ul className="absolute left-0 mt-0 bg-white shadow-lg border rounded-lg w-48">
//           {links.map((link) => (
//             <li key={link.label}>
//               <Link
//                 href={link.href}
//                 className="block px-4 py-2 hover:bg-gray-100"
//               >
//                 {link.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </li>
//   );
// };

// // Main Navbar Component
// const Navbar2 = () => {
//   const [openSection, setOpenSection] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMouseEnter = (section) => {
//     setOpenSection(section);
//   };

//   const handleMouseLeave = () => {
//     setOpenSection(null);
//   };

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prev) => !prev);
//   };

//   const sections = [
//     {
//       label: "Buy",
//       links: [
//         { label: "Apply now", href: "/preapproval/nxt-purchase" },
//         { label: "Purchase rates", href: "/mortgage-rates" },
//         { label: "Affordability calculator", href: "/how-much-house-can-i-afford" },
//         { label: "Mortgage calculator", href: "/mortgage-calculator" },
//         { label: "Rent vs Buy calculator", href: "/rent-vs-buy-calculator" },
//         { label: "Find an agent", href: "/find-an-agent" },
//         { label: "VA loans", href: "/va-loan" },
//         { label: "Learning center", href: "/content" },
//       ],
//     },
//     {
//       label: "Refinance",
//       links: [
//         { label: "Apply now", href: "/preapproval/nxt-refinance" },
//         { label: "Refinance rates", href: "/refinance-rates" },
//         { label: "Cash-out refinance calculator", href: "/content/refinance-calculator" },
//         { label: "Learning center", href: "/content" },
//       ],
//     },
//     {
//       label: "HELOC",
//       links: [
//         { label: "Apply now", href: "/preapproval/nxt-heloc" },
//         { label: "Calculate your cash 💵", href: "/heloc-calculator" },
//         { label: "HELOC vs. Cash-out Refinance", href: "/heloc-vs-cashout-refi-calculator" },
//         { label: "Learning center", href: "/content" },
//       ],
//     },
//     {
//       label: "Rates",
//       links: [
//         { label: "Purchase mortgage rates", href: "/mortgage-rates" },
//         { label: "Refinance rates", href: "/refinance-rates" },
//         { label: "Refinance cash-out rates", href: "/cash-out-refinance-rates" },
//         { label: "HELOC rates", href: "/heloc-rates" },
//         { label: "Purchase VA rates", href: "/va-loan-rates" },
//       ],
//     },
//     {
//       label: "Better+",
//       links: [
//         { label: "Get Insurance", href: "/mortgage-rates" },
//         { label: "Tile and Closing", href: "/refinance-rates" },
//         { label: "Better Attorney Match", href: "/refinance-rates" },
//         { label: "Learning Center", href: "/cash-out-refinance-rates" },
//         { label: "Better Agent Match", href: "/heloc-rates" },
//         { label: "Better Duo", href: "/va-loan-rates" },
//       ],
//     },
//   ];

//   return (
//     <nav className="flex justify-between text-white fixed w-screen items-center p-5 bg-[#1b4634]">
//       {/* Left Side - Logo and Links */}
//       <div className="flex items-center space-x-12">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white  px-2">Better</div>
//         {/* Links */}
//         <ul className="hidden md:flex space-x-10 text-sm hover:text-black">
//           {sections.map((section) => (
//             <Dropdown
//               key={section.label}
//               label={section.label}
//               links={section.links}
//               isOpen={openSection === section.label}
//               onMouseEnter={() => handleMouseEnter(section.label)}
//               onMouseLeave={handleMouseLeave}
//             />
//           ))}
//         </ul>
//       </div>

      
//       {/* Right Side - Phone Icon and Sign In */}
//       <div className="flex items-center space-x-6">
//         {/* Phone Icon with Tooltip on Hover */}
//         <div className="relative group">
//           <div className="border rounded-full p-2 hover:bg-white">
//             <img
//               src="images/Navbar/phone-icon.png" // Make sure the image path is correct
//               alt="Phone"
//               className="w-7 h-6 text-white filter invert hover:filter-none"
//             />
//           </div>

//           {/* Tooltip */}
//           <div className="w-72 h-auto absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs rounded-lg px-4 py-5 shadow-lg transition-opacity duration-300">
//             Call us anytime at
//             <a href="tel:4155238837" className="underline ml-1 hover:text-green-700">
//               (415) 523 8837
//             </a>
//           </div>
//         </div>

//         {/* Sign-In Button */}
//         <Link href="/signin" className="hover: rounded-full hover:bg-white hover:text-black text-white px-6 py-2 text-sm">
//           Sign in
//         </Link>
//         {/* Mobile Menu Button */}
//       <div className="md:hidden text-black bg-white">
//         <button onClick={toggleMobileMenu} className="text-white">
//           {isMobileMenuOpen ? '✖️' : '☰'}
//         </button>
//       </div>


//         {/* Get-Started Button (can be made responsive if needed) */}
//         {/* <Link href="/get-started" className="text-white bg-green-700 hover:bg-green-900 rounded-full px-6 py-2 text-sm">
//           Get started
//         </Link> */}
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="absolute top-full text-black bg:white left-0 w-full bg-white shadow-lg z-20">
//           <ul className="flex flex-col space-y-2 p-4">
//             {sections.map((section) => (
//               <Dropdown
//                 key={section.label}
//                 label={section.label}
//                 links={section.links}
//                 isOpen={openSection === section.label}
//                 onMouseEnter={() => handleMouseEnter(section.label)}
//                 onMouseLeave={handleMouseLeave}
//               />
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar2;









"use client";
import { useState } from "react";
import Link from "next/link";

// Dropdown Component
const Dropdown = ({ label, links, isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="cursor-pointer select-none flex items-center ">{label}</div>
      {isOpen && (
        <ul className="absolute left-0 mt-0 bg-white text-black shadow-lg border rounded-lg w-48 z-50">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

// Main Navbar Component
const Navbar2 = () => {
  const [openSection, setOpenSection] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMouseEnter = (section) => {
    setOpenSection(section);
  };

  const handleMouseLeave = () => {
    setOpenSection(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const sections = [
    {
      label: "Buy",
      links: [
        { label: "Apply now", href: "/preapproval/nxt-purchase" },
        { label: "Purchase rates", href: "/mortgage-rates" },
        { label: "Affordability calculator", href: "/how-much-house-can-i-afford" },
        { label: "Mortgage calculator", href: "/mortgage-calculator" },
        { label: "Rent vs Buy calculator", href: "/rent-vs-buy-calculator" },
        { label: "Find an agent", href: "/find-an-agent" },
        { label: "VA loans", href: "/va-loan" },
        { label: "Learning center", href: "/content" },
      ],
    },
    {
      label: "Refinance",
      links: [
        { label: "Apply now", href: "/preapproval/nxt-refinance" },
        { label: "Refinance rates", href: "/refinance-rates" },
        { label: "Cash-out refinance calculator", href: "/content/refinance-calculator" },
        { label: "Learning center", href: "/content" },
      ],
    },
    {
      label: "HELOC",
      links: [
        { label: "Apply now", href: "/preapproval/nxt-heloc" },
        { label: "Calculate your cash 💵", href: "/heloc-calculator" },
        { label: "HELOC vs. Cash-out Refinance", href: "/heloc-vs-cashout-refi-calculator" },
        { label: "Learning center", href: "/content" },
      ],
    },
    {
      label: "Rates",
      links: [
        { label: "Purchase mortgage rates", href: "/mortgage-rates" },
        { label: "Refinance rates", href: "/refinance-rates" },
        { label: "Refinance cash-out rates", href: "/cash-out-refinance-rates" },
        { label: "HELOC rates", href: "/heloc-rates" },
        { label: "Purchase VA rates", href: "/va-loan-rates" },
      ],
    },
    {
      label: "Better+",
      links: [
        { label: "Get Insurance", href: "/mortgage-rates" },
        { label: "Tile and Closing", href: "/refinance-rates" },
        { label: "Better Attorney Match", href: "/refinance-rates" },
        { label: "Learning Center", href: "/cash-out-refinance-rates" },
        { label: "Better Agent Match", href: "/heloc-rates" },
        { label: "Better Duo", href: "/va-loan-rates" },
      ],
    },
  ];

  return (
    <nav className="flex justify-between text-white fixed w-screen items-center p-5 bg-[#1b4634]">
      {/* Left Side - Logo and Links */}
      <div className="flex items-center space-x-12">
        {/* Logo */}
        <div className="text-2xl font-bold text-white px-2">Better</div>
        {/* Links */}
        <ul className="hidden md:flex space-x-10 text-sm">
          {sections.map((section) => (
            <Dropdown
              key={section.label}
              label={section.label}
              links={section.links}
              isOpen={openSection === section.label}
              onMouseEnter={() => handleMouseEnter(section.label)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </ul>
      </div>

      {/* Right Side - Phone Icon and Sign In */}
      <div className="flex items-center space-x-6">
        {/* Phone Icon with Tooltip on Hover */}
        <div className="relative group">
          <div className="border rounded-full p-2 hover:bg-white">
            <img
              src="images/Navbar/phone-icon.png" // Ensure the image path is correct
              alt="Phone"
              className="w-7 h-6 text-white filter invert hover:filter-none"
            />
          </div>

          {/* Tooltip */}
          <div className="w-72 h-auto absolute left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 bg-white text-black text-xs rounded-lg px-4 py-5 shadow-lg transition-opacity duration-300">
            Call us anytime at
            <a href="tel:4155238837" className="underline ml-1 hover:text-green-700">
              (415) 523 8837
            </a>
          </div>
        </div>

        {/* Sign-In Button */}
        <Link href="/signin" className="hover:rounded-full hover:bg-white hover:text-black text-white px-6 py-2 text-sm">
          Sign in
        </Link>

                {/* Mobile Menu Button */}
                <div className="md:hidden ">
          <button onClick={toggleMobileMenu} className="text-white text-2xl">
            {/* Icon for mobile menu (could use a hamburger icon) */}
            {isMobileMenuOpen ? "✖️" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed flex-col inset-0 bg-white space-y-0 mt-4 z-50 shadow-lg overflow-auto">
          <div className=" flex items-end justify-end">
            <button
              onClick={toggleMobileMenu}
              className="items-end justify-end top-4 right-4 text-2xl text-gray-900"
            >
              ✖️
            </button>
          </div>
          <ul className="flex flex-col space-y-3 p-4 text-black">
            {sections.map((section) => (
              <Dropdown
                key={section.label}
                label={section.label}
                links={section.links}
                isOpen={openSection === section.label}
                onMouseEnter={() => handleMouseEnter(section.label)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </ul>
          {/* Tooltip */}
          <div className="flex w-auto text-black items-center justify-center h-auto p-4 bg-gray-100 rounded-full text-center border-2 hover:bg-green-500">
            📞 Call us anytime at
            <a
              href="tel:4155238837"
              className="underline ml-1 hover:text-black text-center"
            >
              (415) 523 8837
            </a>
          </div>

          <div className="flex flex-col w-full min-h-full z-50">
            {/* Other content of your page here */}

            {/* Your button container */}
            <div className="flex flex-col items-end mt-auto mb-auto w-full p-2 text-center justify-end space-y-2 ">
              <Link
                href="/get-started"
                className="text-white bg-green-700 w-full hover:bg-green-900 rounded-full px-6 py-2 text-md"
              >
                Get started
                <p className="text-xs">3min|No credit impact</p>
              </Link>

              {/* Sign-In Button */}
              <Link
                href="/signin"
                className="text-black hover:rounded-full w-full hover:bg-slate-300 px-6 py-2 text-md border-2 rounded-full bg-gray-100"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      
      )}
    </nav>
  );
};

export default Navbar2;
