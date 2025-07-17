import React from 'react';
import AboutHeading from '../../assets/Images/AboutHeading.png';

const Heading = () => {
  return (
    <div className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px]">
      <img
        alt="Person wearing NYFA shirt holding a camera with a blurred woman in the background"
        className="w-full h-full object-cover"
        height="350"
        src={AboutHeading}
        width="1920"
      />
      <nav className="absolute top-6 left-6 flex space-x-2 text-white text-xs sm:text-sm font-sans">
        <span className="font-semibold">NYFA</span>
        <span>/</span>
        <span className="font-semibold">WHO WE ARE</span>
        <span>/</span>
        <span>ABOUT US</span>
      </nav>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl sm:text-2xl md:text-3xl font-sans font-semibold tracking-wide">
        ABOUT US
      </h1>
    </div>
  );
};

export default Heading;