import React from "react";
import winning from "../../../../Assets/bg-about.png";

const Winning = () => {
  return (
    <div
      className="w-full bg-cover p-8 bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${winning})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center max-w-2xl px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
          Winning is our way of life
        </h1>
        <p className="font-semibold mt-5 text-md">
          Over the last 3 decades, Artech has consistently outperformed
          expectations,<br></br>winning accolades and recognitions from peers,
          industry, and media.
        </p>
        <button className="mt-8 mb-8 px-10 py-1 bg-blue-800 text-white rounded-full text-xl shadow-lg hover:bg-white hover:text-blue-600 border-2 border-blue-800 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Winning;