"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import VideoComponent from "@/components/vedioComponent"; // Import the VideoComponent

export default function AboutUs() {
  return (
    <div className="flex flex-col ">
      <div>
        <Navbar />
      </div>

      <div className="w-full flex flex-col text-center space-y-6 mt-[25%] ">
        <p className="flex text-3xl mx-auto font-bold justify-center text-green-700 ">
          Our mission
        </p>
        <p className="flex w-[80%] mx-auto text-5xl font-bold ">
          We&aposre making homeownership simpler, faster — and most importantly,
          more accessible for all Americans.
        </p>
      </div>

      <div className="w-full h-screen flex flex-col md:flex-row text-center justify-evenly pl-10 pr-10 ">
        {/* Left side: Text and Button */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center pl-7 space-y-6">
          <p className="text-3xl font-semibold">The status quo is broken</p>
          <p className="text-gray-700 w-md">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
            Read Vishal&aposs story
          </button>
        </div>

        {/* Right side: Video Component */}
        <div className="w-full hidden md:flex  md:w-1/2 justify-center items-center">
          <VideoComponent /> {/* Add the VideoComponent here */}
        </div>
      </div>

      <div className="bg-[#1d723e] w-full p-24 space-y-6 mx-auto">
        <p className="text-4xl font-extrabold  text-white">
          How we&aposre changing things
        </p>

        <p className="text-md font-semibold text-white">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers&apos.
        </p>
        <p className="text-md font-semibold text-white">
          That&aposs why Better.com is redefining the homeownership process from the
          ground up. We&aposre using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>

      <div className="p-6">
        <Timeline />
      </div>

      {/* Footer Section */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
