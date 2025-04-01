import React from 'react';
import Banner from "../../../../Assets/Our-solutions-banner-1.png";

const HeroSection = () => {
  return (

    <>

      <section
        className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] bg-cover bg-center flex items-center md:mt-24"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>

        <div className="w-full flex justify-center sm:justify-end mt-6  ml-10  relative z-10">
          <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col justify-center text-center">
            <h1 className="text-white text-xl lg:text-3xl font-bold">
              Empowering businesses through <br /> applied human intelligence
            </h1>
            <div className="mt-6 md:text-2xl font-semibold text-yellow-400">
              <p>Innovative Talent Supply Chain</p>
              <p>High Performing Teams</p>
              <p>Flexible Engagement Models</p>
            </div>
            <p className="mt-12 text-white text-lg">To find out how we can help you</p>
            <div>
              <a
                href="#"
                className="inline-block mt-2 px-4 py-2 bg-white text-blue-900 font-semibold rounded-2xl shadow-md hover:bg-black hover:text-white transition"
              >
                CONTACT US TODAY!
              </a>
            </div>
          </div>
        </div>

      </section>

    </>
  );
};

export default HeroSection;