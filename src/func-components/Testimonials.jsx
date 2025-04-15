import React, { useRef } from "react";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { TESTIMONIALS } from "../constants/data";
import { IoCheckmarkCircle } from "react-icons/io5";

const renderStars = (ratingStr) => {
  const rating = parseFloat(ratingStr.split("/")[0]);
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
  const scrollRef = useRef(null);
  const scrollAmount = 370; // width of one card
  const totalItems = TESTIMONIALS.length;

  const scrollLeft = () => {
    const currentScroll = scrollRef.current.scrollLeft;

    if (currentScroll <= 0) {
      // Jump to end
      scrollRef.current.scrollTo({
        left: scrollAmount * (totalItems - 1),
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    const currentScroll = scrollRef.current.scrollLeft;
    const maxScroll = scrollAmount * (totalItems - 1);

    if (currentScroll >= maxScroll) {
      // Jump to start
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="mb-20 mx-4">
      <div className="flex justify-between items-center">
        <h1 className="mt-16 font-secondary text-4xl mb-10 text-left">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4 mt-16">
          <button onClick={scrollLeft} className="p-2 rounded-full transition">
            <FaArrowLeftLong size={20} />
          </button>
          <button onClick={scrollRight} className="p-2 rounded-full transition">
            <FaArrowRightLong size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
      >
        {TESTIMONIALS.map((item, index) => (
          <div
            key={index}
            className="border px-5 py-5 border-gray-400/30 w-[350px] h-auto rounded-xl flex-shrink-0"
          >
            <div className="flex mb-3">{renderStars(item.stars)}</div>
            <h3 className="flex mb-3 font-bold gap-2 items-center">
              {item.name}
              <IoCheckmarkCircle size={18} className="text-green-500" />
            </h3>
            <p className="text-sm text-gray-500/80">"{item.paragraph}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
