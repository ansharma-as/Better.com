"use client";
import React, { useState } from "react";

const testimonials = {
  Arian: {
    quote:
      "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the one that provided me with the lowest interest rate.",
    author: "Arian — Better Mortgage customer",
    image: "/images/home/still-quote-Arian.webp", 
  },
  Amanda: {
    quote:
      "Better made my homebuying process so easy. The rates were unbeatable and the customer service was excellent.",
    author: "Amanda — Better Mortgage customer",
    image: "/images/home/amanda.webp",
  },
  Paul: {
    quote:
      "I had an amazing experience with Better. They were transparent, and I felt supported every step of the way.",
    author: "Paul — Better Mortgage customer",
    image: "/images/home/paul.webp",
  },
};

const Testimonial = () => {
  const [activeTab, setActiveTab] = useState("Arian");

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-8 bg-white min-h-screen mt-auto">
      {/* Left Section - Testimonial Card */}
      <div className="flex flex-col w-full lg:w-1/2 bg-white rounded-lg relative">
        {/* Image section with adjusted height */}
        <div className="relative h-[500px] lg:h-[500px] rounded-xl">
          {/* Dynamically change the image based on the active tab */}
          <img
            src={testimonials[activeTab].image}  
            alt="Testimonial"
            className=" w-auto h-full object-contain mx-auto rounded-xl"
          />
        </div>

        {/* Tab Buttons */}
        <div className="mt-8 flex justify-center items-center lg:justify-center space-x-4">
          {Object.keys(testimonials).map((name) => (
            <button
              key={name}
              className={`px-4 py-2 rounded-full border-2 ${
                activeTab === name
                  ? "bg-green-700 text-white border-green-700"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setActiveTab(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-12 text-center lg:text-left lg:w-1/2 pl-10">
        <h1 className="text-6xl font-bold text-gray-800">
          Find out why we're better.
        </h1>
        <p className="mt-4 text-gray-600 text-xl">{testimonials[activeTab].quote}</p> 
        <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-md text-lg">
          See all our stories
        </button>
        <div className="flex items-center justify-center lg:justify-start mt-4">
          <span className="text-green-700 text-2xl">★</span>
          <span className="ml-2 text-gray-700">
            Trustpilot Excellent 4.4 out of 5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
