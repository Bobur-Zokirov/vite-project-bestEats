import React from "react";

const Hero = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto mt-12">
      <div className="max-h-[450px] relative">
        {/* =============== Overlay =============== */}

        <div className="absolute w-full h-full text-gray-200 max-h-[450px] bg-black/80 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>

          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivered</span>
          </h1>
        </div>

        <img
          className="max-h-[450px] w-full object-cover"
          src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="hero-img"
        />
      </div>
    </div>
  );
};

export default Hero;
