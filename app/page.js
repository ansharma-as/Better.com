"use client";
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2";
import Testimonial from "@/components/Testimonials";
import Main2 from "@/components/Main2";

export default function Home() {
  const [isMain2Visible, setIsMain2Visible] = useState(false); // State to manage Navbar2 visibility
  const main2Ref = useRef(null); // Create a reference to Main2 section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsMain2Visible(entry.isIntersecting); // Set state based on visibility of Main2
      },
      {
        root: null, // Use viewport as the root
        threshold: 0.1, // Trigger when at least 10% of Main2 is visible
      }
    );

    if (main2Ref.current) {
      observer.observe(main2Ref.current); // Observe Main2 section
    }

    return () => {
      if (main2Ref.current) {
        observer.unobserve(main2Ref.current); // Cleanup observer on unmount
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar1 shown when Main2 is not visible */}
      {!isMain2Visible && (
        <div className="flex flex-row w-full z-20">
          {/* Show Navbar1 only when Main2 is not visible */}
          <Navbar />
        </div>
      )}

      {/* Main part */}
      <div className="bg-[#1b4634]">
        {isMain2Visible && (
          <div className="sticky top-0 z-20">
            {/* Navbar2 becomes sticky and active */}
            <Navbar2 />
          </div>
        )}

        {/* Main2 Section */}
        <div
          id="main2-section"
          ref={main2Ref}
          className="w-full sm:p-4 md:px-8 lg:px-12"
        >
          <Main2 />
        </div>
        </div>
        <div>
        {/* Testimonial Section */}
        <div className="w-full sm:p-4 md:px-8 lg:px-12">
          <Testimonial />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-14 w-full sm:p-4 md:px-8 lg:px-12">
        <Footer />
      </div>
    </div>
  );
}
