"use client";
import { useState } from "react";
import Image from "next/image";

const VideoComponent = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleImageClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
  };

  return (
    <div className="w-full md:w-1/2 flex justify-center items-center">
      {/* Image Container */}
      <div
        className="relative w-[500px] h-[400px] md:w-[600px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer"
        onClick={handleImageClick}
      >
        <Image
          src="/images/about/vishal-mission.jpg"
          alt="Vishal Garg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-2xl"
        />

        {/* Video Icon Overlay */}
        <div className="absolute inset-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full justify-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.752 11.168l-3.197-1.866A1 1 0 0010 10.618v2.764a1 1 0 001.555.832l3.197-1.866a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.428 15.341A8 8 0 105.57 8.658 8 8 0 0019.428 15.34z"
            />
          </svg>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative w-[80%] h-[70%] max-w-4xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1KjYlLBM9j4"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            {/* Close Button */}
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-red-600 text-2xl font-extrabold "
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoComponent;
