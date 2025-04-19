import React from "react";
import { BROWSE_STYLE } from "../constants/data.js";

const BrowseStyle = () => {
  return (
    <div className="bg-gray-400/20 mx-4 pt-20 pb-7 rounded-xl mt-12">
      <h1 className=" font-secondary text-4xl mb-10  text-center">
        BROWSE BY DRESS STYLE
      </h1>
      <div className="md:grid md:grid-cols-3 md:max-w-[700px] md:items-center">
        {BROWSE_STYLE.map((item, index) => (
          <div
            key={index}
            className={`mt-10 relative w-[320px] h-[200px] bg-white mx-auto rounded-xl overflow-hidden ${
              item.title === "Casual"
                ? "col-span-2 md:w-[26rem]"
                : "col-span-1 md:w-[250px]"
            } ${
              item.title === "Gym" ? "col-span-2 md:w-[26rem] md:ml-16" : ""
            } ${item.title === "Party" ? "md:ml-6" : ""}  `}
          >
            <img
              className="w-full h-full object-cover absolute top-0 left-0"
              src={item.img}
              alt={item.title}
            />

            <h3 className="absolute z-40 top-4 left-5 font-semibold text-xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseStyle;
