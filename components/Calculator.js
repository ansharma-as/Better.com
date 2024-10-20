"use client";
import { useState } from "react";

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(615900);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanLength, setLoanLength] = useState(30);
  const [zipCode, setZipCode] = useState("201310");

  const downPaymentAmount = homePrice * (downPayment / 100);
  const principal = homePrice - downPaymentAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = loanLength * 12;

  // Monthly payment calculation
  const monthlyPayment = (
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
  ).toFixed(2);

  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(132);
  const [hoaFees, setHoaFees] = useState(132);
  const [utilities, setUtilities] = useState(100);

  // Total payment calculation
  const totalPayment = (
    parseFloat(monthlyPayment) +
    propertyTaxes +
    homeInsurance +
    hoaFees +
    utilities
  ).toLocaleString();

  // Calculate each section for the progress bar
  const principalInterest = parseFloat(monthlyPayment);
  const totalMonthlyExpenses =
    principalInterest + propertyTaxes + homeInsurance + hoaFees + utilities;

  const principalInterestPercentage =
    (principalInterest / totalMonthlyExpenses) * 100;
  const propertyTaxesPercentage = (propertyTaxes / totalMonthlyExpenses) * 100;
  const homeInsurancePercentage = (homeInsurance / totalMonthlyExpenses) * 100;
  const hoaFeesPercentage = (hoaFees / totalMonthlyExpenses) * 100;
  const utilitiesPercentage = (utilities / totalMonthlyExpenses) * 100;

  return (
    <>
      <div className="bg-[#f0faf3] p-6 md:p-12 max-w-screen mx-auto rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Mortgage Calculator</h1>
        <p className="mb-8 text-gray-600 text-sm md:pr-[36rem]">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Home Price */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Home price
            </label>
            <input
              type="number"
              className="w-full md:w-[60%] px-4 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm md:text-xl"
              value={homePrice}
              onChange={(e) => setHomePrice(Number(e.target.value))}
            />
          </div>

          {/* Monthly Payment */}
          <div className="col-span-1 flex flex-col md:flex-row space-x-0 md:space-x-4">
            <div className="p-6 ">
              <p className="text-gray-700 text-sm">Monthly payment</p>
              <p className="text-2xl md:text-3xl font-bold">${monthlyPayment}/mo</p>
            </div>

            <div className="mt-4 md:mt-8">
              <button className="bg-green-600 text-white px-6 py-3 md:py-4 rounded-md hover:bg-green-700 transition w-full md:w-auto">
                Get pre-approved
              </button>
            </div>
          </div>
        </div>

        {/* Down Payment Range */}
        <div className="w-full p-6 ">
          <input
            type="range"
            min="5"
            max="50"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full mt-2 "
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Zip Code */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ZIP code
            </label>
            <input
              type="text"
              className="w-full md:w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          {/* Down Payment */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Down payment
            </label>
            <input
              type="number"
              className="w-full md:w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
            />
          </div>

          {/* Interest Rate */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Interest rate
            </label>
            <input
              type="number"
              step="0.01"
              className="w-full md:w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </div>

          {/* Length of Loan */}
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Length of loan
            </label>
            <select
              className="w-full md:w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
              value={loanLength}
              onChange={(e) => setLoanLength(Number(e.target.value))}
            >
              <option value="15">15 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>
      </div>

      {/* Breakdown Section */}
      <div className="bg-white p-6 md:p-8 space-y-8 rounded-lg max-w-screen mx-auto flex flex-col md:flex-row justify-between md:items-start gap-8">
        <div className="flex-grow justify-between">
          <div className="flex flex-col p-4 justify-between">
            <h2 className="text-xl font-semibold mb-4">
              Monthly payment breakdown
            </h2>
            <p className="text-2xl md:text-4xl font-bold mb-10">${totalPayment}/mo</p>

            {/* Progress bar */}
            <div className="w-full h-8 md:h-12 bg-white flex rounded-full relative">
              <div
                className="bg-green-700 h-8 md:h-12 rounded-full"
                style={{ width: `${principalInterestPercentage}%` }}
              ></div>
              <div
                className="bg-purple-600 h-8 md:h-12 rounded-full"
                style={{
                  width: `${propertyTaxesPercentage}%`,
                  position: "absolute",
                  left: `${principalInterestPercentage}%`,
                }}
              ></div>
              <div
                className="bg-indigo-300 h-8 md:h-12 rounded-full"
                style={{
                  width: `${homeInsurancePercentage}%`,
                  position: "absolute",
                  left: `${
                    principalInterestPercentage + propertyTaxesPercentage
                  }%`,
                }}
              ></div>
              <div
                className="bg-yellow-400 h-8 md:h-12 rounded-full"
                style={{
                  width: `${hoaFeesPercentage}%`,
                  position: "absolute",
                  left: `${
                    principalInterestPercentage +
                    propertyTaxesPercentage +
                    homeInsurancePercentage
                  }%`,
                }}
              ></div>
              <div
                className="bg-red-400 h-8 md:h-12 rounded-full"
                style={{
                  width: `${utilitiesPercentage}%`,
                  position: "absolute",
                  left: `${
                    totalMonthlyExpenses
                      ? principalInterestPercentage +
                        propertyTaxesPercentage +
                        homeInsurancePercentage +
                        hoaFeesPercentage
                      : 0
                  }%`,
                }}
              ></div>
            </div>
          </div>
          {/* Copy Estimate Button */}
          <div className="flex-grow flex items-end mt-10 pl-8">
            <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Copy estimate link
            </button>
          </div>
        </div>

        {/* Breakdown Details */}
        <div className="flex flex-col space-y-8 text-center md:text-left p-6 md:p-12">
          <div className="flex items-center justify-between w-full ">
            <span className="text-gray-700">Principal & interest: </span>
            <span className="font-semibold">
              ${principalInterest.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700">Property taxes</span>
            <input
              type="number"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(Number(e.target.value))}
              className="w-20 md:w-24 px-2 md:px-4 py-3 border rounded-md"
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700">Home insurance</span>
            <input
              type="number"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(Number(e.target.value))}
              className="w-20 md:w-24 px-2 md:px-4 py-3 border rounded-md"
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700">HOA fees</span>
            <input
              type="number"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="w-20 md:w-24 px-2 md:px-4 py-3 border rounded-md"
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-gray-700">Utilities</span>
            <input
              type="number"
              value={utilities}
              onChange={(e) => setUtilities(Number(e.target.value))}
              className="w-20 md:w-24 px-2 md:px-4 py-3 border rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MortgageCalculator;


























  

// "use client";
// import { useState } from "react";

// const MortgageCalculator = () => {
//   const [homePrice, setHomePrice] = useState(615900);
//   const [downPayment, setDownPayment] = useState(20);
//   const [interestRate, setInterestRate] = useState(6.5);
//   const [loanLength, setLoanLength] = useState(30);
//   const [zipCode, setZipCode] = useState("201310");

//   const downPaymentAmount = homePrice * (downPayment / 100);
//   const principal = homePrice - downPaymentAmount;
//   const monthlyInterestRate = interestRate / 100 / 12;
//   const totalPayments = loanLength * 12;

//   // Monthly payment calculation
//   const monthlyPayment = (
//     (principal *
//       (monthlyInterestRate *
//         Math.pow(1 + monthlyInterestRate, totalPayments))) /
//     (Math.pow(1 + monthlyInterestRate, totalPayments) - 1)
//   ).toFixed(2);

//   const [propertyTaxes, setPropertyTaxes] = useState(265);
//   const [homeInsurance, setHomeInsurance] = useState(132);
//   const [hoaFees, setHoaFees] = useState(132);
//   const [utilities, setUtilities] = useState(100);

//   // Total payment calculation
//   const totalPayment = (
//     parseFloat(monthlyPayment) +
//     propertyTaxes +
//     homeInsurance +
//     hoaFees +
//     utilities
//   ).toLocaleString();

//   // Calculate each section for the progress bar
//   const principalInterest = parseFloat(monthlyPayment);
//   const totalMonthlyExpenses =
//     principalInterest + propertyTaxes + homeInsurance + hoaFees + utilities;

//   const principalInterestPercentage =
//     (principalInterest / totalMonthlyExpenses) * 100;
//   const propertyTaxesPercentage = (propertyTaxes / totalMonthlyExpenses) * 100;
//   const homeInsurancePercentage = (homeInsurance / totalMonthlyExpenses) * 100;
//   const hoaFeesPercentage = (hoaFees / totalMonthlyExpenses) * 100;
//   const utilitiesPercentage = (utilities / totalMonthlyExpenses) * 100;

//   return (
//     <>
//       <div className="bg-[#f0faf3] p-12 max-w-screen mx-auto rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold mb-4">Mortgage Calculator</h1>
//         <p className="mb-8 text-gray-600 text-sm pr-[36rem]">
//           Our mortgage calculator includes key factors like homeowners
//           association fees, property taxes, and private mortgage insurance
//           (PMI). Get the whole picture and calculate your total monthly payment.
//         </p>

//         <div className="grid grid-row md:grid-cols-2 gap-6">
//           {/* Home Price */}
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Home price
//             </label>
//             <input
//               type="number"
//               className="w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-xl"
//               value={homePrice}
//               onChange={(e) => setHomePrice(Number(e.target.value))}
//             />
//           </div>

//           {/* Monthly Payment */}
//           <div className="col-span-1 flex flex-row space-x-4">
//             <div className="p-6 ">
//               <p className="text-gray-700 text-sm">Monthly payment</p>
//               <p className="text-3xl font-bold">${monthlyPayment}/mo</p>
//             </div>

//             <div className="mt-8">
//               <button className="bg-green-600 text-white px-6 py-4 rounded-md hover:bg-green-700 transition">
//                 Get pre-approved
//               </button>
//             </div>
//           </div>
//           </div>
//           <div className="w-full p-6 ">
//           <input
//             type="range"
//             min="5"
//             max="50"
//             value={downPayment}
//             onChange={(e) => setDownPayment(Number(e.target.value))}
//             className="w-full mt-2 "
//           />
        
//           </div>

//         <div className="grid grid-row md:grid-cols-4 gap-6">

//                     {/* Zip Code */}
//                     <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               ZIP code
//             </label>
//             <input
//               type="text"
//               className="w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               value={zipCode}
//               onChange={(e) => setZipCode(e.target.value)}
//             />
//           </div>

//           {/* Down Payment */}
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Down payment
//             </label>
//             <div className="flex items-center space-x-2">
//               <input
//                 type="number"
//                 className="w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
//                 value={downPayment}
//                 onChange={(e) => setDownPayment(Number(e.target.value))}
//               />
              
//             </div>
//           </div>
        

        
//           {/* Interest Rate */}
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Interest rate
//             </label>
//             <input
//               type="number"
//               step="0.01"
//               className="w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               value={interestRate}
//               onChange={(e) => setInterestRate(Number(e.target.value))}
//             />
//           </div>

//           {/* Length of Loan */}
//           <div className="col-span-1">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Length of loan
//             </label>
//             <select
//               className="w-[60%] px-6 py-3 border-4 rounded-md hover:border-green-400 focus:outline-none focus:ring focus:border-blue-300 text-sm"
//               value={loanLength}
//               onChange={(e) => setLoanLength(Number(e.target.value))}
//             >
//               <option value="15">15 years</option>
//               <option value="30">30 years</option>
//             </select>
//           </div>
//         </div>
//       </div>

//       {/* Breakdown Section */}
//       <div className="bg-white p-8 space-y-8 rounded-lg max-w-screen mx-auto flex flex-col justify-between md:flex-row items-center md:items-start gap-8">
//         <div className="flex-grow justify-between">
//           <div className="flex flex-col p-4 justify-between">
//             <h2 className="text-xl font-semibold mb-4">
//               Monthly payment breakdown
//             </h2>
//             <p className="text-4xl font-bold mb-10">${totalPayment}/mo</p>

//             {/* Progress bar */}
//             <div className="w-full h-12 bg-white flex rounded-full relative">
//               <div
//                 className="bg-green-700 h-12 rounded-full"
//                 style={{ width: `${principalInterestPercentage}%` }}
//               ></div>
//               <div
//                 className="bg-purple-600 h-12 rounded-full"
//                 style={{
//                   width: `${propertyTaxesPercentage}%`,
//                   position: "absolute",
//                   left: `${principalInterestPercentage}%`,
//                 }}
//               ></div>
//               <div
//                 className="bg-indigo-300 h-12 rounded-full"
//                 style={{
//                   width: `${homeInsurancePercentage}%`,
//                   position: "absolute",
//                   left: `${
//                     principalInterestPercentage + propertyTaxesPercentage
//                   }%`,
//                 }}
//               ></div>
//               <div
//                 className="bg-yellow-400 h-12 rounded-full"
//                 style={{
//                   width: `${hoaFeesPercentage}%`,
//                   position: "absolute",
//                   left: `${
//                     principalInterestPercentage +
//                     propertyTaxesPercentage +
//                     homeInsurancePercentage
//                   }%`,
//                 }}
//               ></div>
//               <div
//                 className="bg-red-400 h-12 rounded-full"
//                 style={{
//                   width: `${utilitiesPercentage}%`,
//                   position: "absolute",
//                   left: `${
//                     totalMonthlyExpenses
//                       ? principalInterestPercentage +
//                         propertyTaxesPercentage +
//                         homeInsurancePercentage +
//                         hoaFeesPercentage
//                       : 0
//                   }%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//           {/* Copy Estimate Button */}
//           <div className="flex-grow flex items-end mt-10 pl-8">
//             <button className="px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
//               Copy estimate link
//             </button>
//           </div>
//         </div>

//         {/* Breakdown Details */}
//         <div className="flex flex-col space-y-8 space-x-10 text-center p-12">
//           <div className="flex items-center justify-between w-full ">
//             <span className="text-gray-700">Principal & interest: </span>
//             <span className="font-semibold">
//               ${principalInterest.toFixed(2)}
//             </span>
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <span className="text-gray-700">Property taxes</span>
//             <input
//               type="number"
//               value={propertyTaxes}
//               onChange={(e) => setPropertyTaxes(Number(e.target.value))}
//               className="w-24 px-4 py-4 border rounded-md"
//             />
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <span className="text-gray-700">Home insurance</span>
//             <input
//               type="number"
//               value={homeInsurance}
//               onChange={(e) => setHomeInsurance(Number(e.target.value))}
//               className="w-24 px-4 py-4 border rounded-md"
//             />
//           </div>

//           <div className="flex items-center mx-auto justify-between w-full">
//             <span className="text-gray-700">HOA fees</span>
//             <input
//               type="number"
//               value={hoaFees}
//               onChange={(e) => setHoaFees(Number(e.target.value))}
//               className="w-24 px-4 py-4 border rounded-md"
//             />
//           </div>

//           <div className="flex items-center justify-between w-full">
//             <span className="text-gray-700">Utilities</span>
//             <input
//               type="number"
//               value={utilities}
//               onChange={(e) => setUtilities(Number(e.target.value))}
//               className="w-24 px-4 py-4 border rounded-md"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MortgageCalculator;
