import React, { useState } from "react";
import Explore from "./Explore";


const Exploredots = ({ total = 6 }) => {
  let [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = total - 2;

  // Example div contents for each dot
  let contents = [
    <Explore myimage='home.JPG'/>,
    <Explore myimage='home.JPG'/>,
    <Explore myimage='home.JPG'/>,
    <Explore myimage='home.JPG'/>,
    <Explore myimage='home.JPG'/>,
    <Explore myimage='home.JPG'/>,
  ];

  return (
    <div className="flex flex-col items-center mt-10  ">
      {/* Show active div */}
     <div className="flex justify-center items-center gap-4 w-80 "
      style={{
              transform: `translateX(-${activeIndex * (100 / 60)}%)`,
              width: `${(total / 2) * 100}%`, 
            }}
     >
        {contents.map((text, index) => (
          <div key={index} className=' rounded-md shadow-md text-center transition-all duration-300'>{text}</div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: maxIndex + 2 }) .map((_, index) => (
             <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mt-[20px] ${
                activeIndex === index ? "bg-main" : "bg-gray-300"
              }`} />
       
        ))}
      </div>
 
    </div>
  );
};

export default Exploredots;