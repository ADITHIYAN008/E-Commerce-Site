import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-theme mt-12 pt-10 w-screen">
      <div className="w-full sm:text-center px-4">
        <h2 className="font-secondary text-[39px] leading-none font-extrabold mb-5">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h2>
        <p className="font-primary text-black/60 mb-7 text-[14px]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button
          href=""
          className="bg-black text-white px-20 py-5 rounded-full w-full text-center text-[20px] cursor-pointer sm:w-[17rem] "
        >
          Shop Now
        </button>
        <div className="mt-7 flex flex-col items-center">
          <div className="flex gap-7 mb-3">
            <div>
              <h2 className="font-secondary text-2xl">200+</h2>
              <p className="text-black/60">Internatinal Brands</p>
            </div>
            <div>
              <h2 className="font-secondary text-2xl">2,000+</h2>
              <p className="text-black/60">High-Quality Products</p>
            </div>
          </div>
          <div>
            <h2 className="font-secondary text-2xl">30,000+</h2>
            <p className="text-black/60">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img src="src/assets/HeroImg.png" alt="Hero image" />
        <img
          className="absolute top-6 right-8 w-[75px]"
          src="src/assets/Dimond.png"
          alt="Dimond style"
        />
        <img
          className="absolute top-32 left-10 w-[45px]"
          src="src/assets/Dimond.png"
          alt="Dimond style"
        />
      </div>
    </section>
  );
};

export default HeroSection;
