import React from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { TOP_SELLING } from "../constants/data.js";

const renderStars = (ratingStr) => {
  const rating = parseFloat(ratingStr.split("/")[0]); // Get number from "4.5/5"
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="size-5 text-yellow-300" />
      ))}
      {hasHalfStar && <FaStarHalf className="size-5 text-yellow-300" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="size-5 text-yellow-300" />
      ))}
    </>
  );
};

const TopSelling = () => {
  return (
    <>
      <section className="px-5">
        <h1 className="mt-12 font-secondary text-4xl mb-10  text-center">
          TOP SELLING
        </h1>
        <div className="flex gap-5 overflow-y-auto scrollbar-hide">
          {TOP_SELLING.map((item, index) => (
            <div key={index} className=" mb-10">
              <div className="w-[200px] h-[200px] bg-itembg rounded-lg relative">
                <img
                  className="rounded-lg w-[200px] h-[200px]"
                  src={item.img}
                  alt={item.title}
                />
              </div>
              <h2 className="mt-5 font-bold">{item.title}</h2>
              <div className="flex gap-2 items-center text-base text-black/60">
                <div className="flex">{renderStars(item.ratings)}</div>
                {item.ratings}
              </div>
              <div className="flex gap-2 items-center">
                <h3 className="mt-2 font-bold text-2xl">
                  {item.discount ? item.discount_Price : item.price}
                </h3>
                <h3 className="mt-2 font-bold text-2xl text-black/30">
                  {item.discount && item.price}
                </h3>
                <div className="w-12 h-8 text-center">
                  <div className="bg-red-400/20 rounded-2xl text-sm text-red-600 mt-2.5">
                    {item.discount &&
                      `-${Math.round(
                        ((parseFloat(item.price.slice(1)) -
                          parseFloat(item.discount_Price.slice(1))) /
                          parseFloat(item.price.slice(1))) *
                          100
                      )}%`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          href=""
          className="mt-0 bg-transparent border text-black border-gray-400/40 px-20 py-3 rounded-full w-full text-center text-[16px] cursor-pointer"
        >
          View All
        </button>
      </section>
    </>
  );
};

export default TopSelling;
