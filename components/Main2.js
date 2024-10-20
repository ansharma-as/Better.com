import Image from "next/image";

export default function Main2() {
  return (
    <>
      <div className="relative flex flex-col justify-end items-center h-screen">
        {/* Image and Text Container */}
        <div className="absolute inset-0 flex flex-col justify-start items-center mt-10 pt-10">
          <div className="flex items-center space-x-1">
            {/* Arrow Image */}
            <div className="relative w-10 h-10">
              <Image
                src="/images/home/arrow.png"
                alt="Arrow"
                layout="fill"
                objectFit="contain"
                className=""
              />
            </div>
            {/* Rate Drop Alert Text */}
            <p className="text-white text-md md:text-xl lg:text-2xl">
              Rate drop alert
            </p>
          </div>

          {/* The rate drop you’ve been waiting for */}
          <p className="mt-2 text-center text-white text-3xl md:text-8xl z-10">
            The rate drop you’ve been waiting for
          </p>
        </div>

        {/* Background Image at Bottom Center */}
        <div className="absolute bottom-0 w-full h-[70%] flex justify-center">
          <div className="relative w-[70%] h-full">
            <Image
              src="/images/home/main-img_files/rate-drop-notify.webp"
              alt="Background"
              layout="fill"
              objectFit="contain"
              className=""
            />
          </div>
        </div>

        {/* Start My Approval - Bottom Left */}
        <div className="absolute bottom-20 left-10 z-2">
          <button className="text-black text-xs md:text-lg font-bold hover:bg-[#1b4634] w-28 md:w-48 px-4 py-3 rounded-full bg-green-500">
            Start my approval
          </button>
          <p className="mt-2 text-white text-xs text-center">
            ⏱️ 3 min | No credit impact
          </p>
        </div>

        {/* Google Reviews - Bottom Right */}
        <div className="absolute bottom-20 right-10 z-2">
          <div className="flex flex-row items-center space-x-2">
            <img
              src="/images/home/googgle_processed.png"
              className="w-6 h-6"
              alt="Google Reviews"
            />
            <p className="text-white">⭐️⭐️⭐️⭐️⭐️</p>
          </div>
          <p className="text-xs text-white">5 stars | 4166 Google reviews</p>
        </div>
      </div>
    </>
  );
}
