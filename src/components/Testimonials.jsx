import React from "react";
import { BiArrowToLeft } from "react-icons/bi";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TESTIMONIALS } from "../constants/data";
import { IoCheckmarkCircle, IoCheckmarkCircleOutline } from "react-icons/io5";
import { TbMarquee, TbMarquee2 } from "react-icons/tb";

const renderStars = (ratingStr) => {
  const rating = parseFloat(ratingStr.split("/")[0]); // Get number from "4.5/5"
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className="size-5 mr-2 text-yellow-300" />
      ))}
      {hasHalfStar && <FaStarHalf className="size-5 text-yellow-300" />}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className="size-5 text-yellow-300" />
      ))}
    </>
  );
};

const Testimonials = () => {
  return (
    <div className="mb-40 mx-4">
      <div className="flex">
        <h1 className="mt-16  font-secondary text-4xl mb-10 text-left">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-8 items-center mt-16">
          <FaArrowLeftLong size={20} />
          <FaArrowRightLong size={20} />
        </div>
      </div>
      <div>
        {TESTIMONIALS.map((item, index) => (
          <div className="border px-5 py-5 border-gray-400/30 w-[360px] h-[200px] rounded-xl">
            <div key={index}>
              <div className="flex mb-3">{renderStars(item.stars)}</div>
              <h3 className="flex mb-3 font-bold gap-2 items-center">
                {item.name}
                <IoCheckmarkCircle size={18} className="text-green-500" />
              </h3>
              <p className="text-sm text-gray-500/80">"{item.paragraph}"</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
