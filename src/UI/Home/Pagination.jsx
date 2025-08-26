import React, { useState } from "react";
import Extra from "./Extra";

const Pagination = ({ total = 4 }) => {
  let [activeIndex, setActiveIndex] = useState(0);

  // Example div contents for each dot
  let contents = [
    <Extra mypic='web.png' writeup='web upd.png'/>,
          <Extra mypic='App.png' writeup='App upd.png'/>,
          <Extra mypic='UI.png' writeup='UI upd.png'/>,
          <Extra mypic='marketing.png' writeup='marketing upd.png'/>,
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      {/* Show active div */}
     <div className="flex justify-center items-center gap-4 w-80">
        {contents.map((text, index) => (
          <div key={index} className={`p-6 rounded-md shadow-md text-center transition-all duration-300 ${activeIndex === index ? "bg-blue-100 border-2 border-blue-500" : "bg-gray-100"}`}>{text}</div>
        ))}
      </div>
      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(total)].map((_, index) => (
          <button key={index} onClick={() => setActiveIndex(index)}className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-blue-600 w-5" : "bg-gray-400"}`}/>
        ))}
      </div>
 
    </div>
  );
};

export default Pagination;