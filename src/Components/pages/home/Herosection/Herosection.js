import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const slides = [
  {
    image: '/path-to-your-image.jpg', 
    text: 'Empowering Businesses and Careers through Applied Human Intelligence',
  },
  {
    image: '/path-to-your-image.jpg', 
  },
 
];

const HeroSection = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-70 h-full">

            <h1 className="text-3xl  text-center text-white">
               {slide.text}
            </h1>
          </div>
        </div>
      ))}

      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}


export default HeroSection;