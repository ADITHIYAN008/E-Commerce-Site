import React from "react";
import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <>
      <div className="bg-secondary px-4 py-5 mx-auto h-[300px] w-[360px] rounded-2xl">
        <h1 className="text-primary text-3xl font-secondary font-bold mb-10">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="space-y-4">
          <div className="flex items-center bg-white rounded-full px-4 py-3">
            <Mail className="text-gray-400 w-5 h-5 mr-3" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent flex-1 text-gray-800 outline-none placeholder-gray-400"
            />
          </div>
          <button className="w-full bg-white text-black font-medium py-3 rounded-full hover:bg-gray-200 transition duration-200">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
