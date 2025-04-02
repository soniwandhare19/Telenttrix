import React from "react";
import mission from "../../../../Assets/our-mission-about.png";
import vission from "../../../../Assets/Our-Vision-about.png";
import goal from "../../../../Assets/Our-Purpose-about.png";

const OurCards = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex items-center justify-center">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-orange-400 mb-6"></div>

          <div className="w-full mb-4">
            <div className="overflow-hidden relative">
              <img
                src={mission}
                alt="Our Mission"
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="text-center px-4">
            <p className="text-sm font-semibold">
              To be the ecosystem connecting people, technology, and
              opportunities through applied human intelligence.
            </p>
          </div>
          <div className="w-full h-1 bg-orange-400 mt-6"></div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Vision
          </h2>
          <div className="w-16 h-1 bg-orange-400 mb-6"></div>

          <div className="relative w-full mb-4">
            <div className="overflow-hidden relative">
              <img
                src={vission}
                alt="Our Vision"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="text-center px-4">
            <p className="text-sm font-semibold">
              Transforming our world by empowering global businesses through
              applied human intelligence.
            </p>
          </div>
          <div className="w-full h-1 bg-orange-400 mt-6"></div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold text-blue-800 mb-2">
            Our Purpose
          </h2>
          <div className="w-16 h-1 bg-orange-400 mb-6"></div>
          <div className="relative w-full mb-4">
            <div className=" overflow-hidden relative">
              <img
                src={goal}
                alt="Our Purpose"
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 w-full"></div>
            </div>
          </div>
          <div className="text-center px-4">
            <p className="text-sm font-semibold">
              We empower businesses not just the right solutions and
              opportunities, but human intellect which makes THE difference.
            </p>
          </div>
          <div className="w-full h-1 bg-orange-400 mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default OurCards;