import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaRegCopyright, FaTwitter } from "react-icons/fa6";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <div className="md:relative md:top-28">
      <div className="md:absolute md:-top-32 md:left-4">
        <div
          id="contact"
          className="bg-secondary  px-4 py-5 mx-auto h-[300px] w-[360px] rounded-2xl md:w-[740px] md:flex md:items-center md:justify-center md:text-center"
        >
          <h1 className="text-primary text-3xl font-secondary md:w-[400px] font-bold mb-10 md:mr-7 md:mt-7">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
          <div className="space-y-4">
            <div className="flex items-center md:w-[250px] bg-white rounded-full px-4 py-3">
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
      </div>
      <footer className="pb-20  pt-10 md:pt-48 md:bg-gray-300/90 md:pl-6 ">
        <div className="mb-10 mx-4 sm:mx-6 mt-7 flex flex-col gap-4">
          <h2 className="font-secondary text-3xl">SHOP.CO</h2>
          <p className="text-gray-500/60 text-base md:text-gray-500">
            We have clothes that suits your style and which you're proud to wear
          </p>
          <div className="flex gap-4 md:items-center">
            <a className="px-3 py-3 rounded-full border border-gray-300 md:border-gray-400">
              <FaTwitter size={15} className="md:size-[20px]" />
            </a>
            <a>
              <IoLogoFacebook size={40} />
            </a>
            <a className="px-3.5 py-3 rounded-full border border-gray-300 md:border-gray-400">
              <FiInstagram size={15} />
            </a>
            <a className="px-3 py-2.5 rounded-full border border-gray-300 md:border-gray-400">
              <IoLogoGithub size={20} />
            </a>
          </div>
        </div>
        <div className="mx-4 sm:mx-6 grid gap-6 grid-cols-2 grid-rows-2">
          <div className="flex flex-col gap-3">
            <h2 className="tracking-widest">COMPANY</h2>
            <a className="text-gray-400 md:text-gray-500">About</a>
            <a className="text-gray-400 md:text-gray-500">Features</a>
            <a className="text-gray-400 md:text-gray-500">Works</a>
            <a className="text-gray-400 md:text-gray-500">Career</a>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="tracking-widest">HELP</h2>
            <a className="text-gray-400 md:text-gray-500">Customer Support</a>
            <a className="text-gray-400 md:text-gray-500">Delivery Details</a>
            <a className="text-gray-400 md:text-gray-500">Terms & Conditions</a>
            <a className="text-gray-400 md:text-gray-500">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="tracking-widest">FAQ</h2>
            <a className="text-gray-400 md:text-gray-500">Account</a>
            <a className="text-gray-400 md:text-gray-500">Manage Deliveries</a>
            <a className="text-gray-400 md:text-gray-500">Orders</a>
            <a className="text-gray-400 md:text-gray-500">Payment</a>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="tracking-widest">RESOURCES</h2>
            <a className="text-gray-400 md:text-gray-500">Free eBook</a>
            <a className="text-gray-400 md:text-gray-500">
              Development Tutorial
            </a>
            <a className="text-gray-400 md:text-gray-500">How to - Blog</a>
            <a className="text-gray-400 md:text-gray-500">Youtube Playlist</a>
          </div>
        </div>
        <div className="mb-7 mx-4 h-[1px] bg-gray-400/40 mt-12"></div>
        <div>
          <h2 className="flex justify-center items-center text-gray-400 md:text-gray-500 gap-1">
            Shop.co
            <FaRegCopyright /> 2000 - 2027, All Rights Reserved
          </h2>
          <div className="flex gap-1 justify-center mt-3">
            <img className="w-14" src="src/assets/visa.png" alt="visa" />
            <img className="w-14" src="src/assets/master.png" alt="master" />
            <img className="w-14" src="src/assets/paypal.png" alt="paypal" />
            <img
              className="w-14"
              src="src/assets/applepay.png"
              alt="applepay"
            />
            <img className="w-14" src="src/assets/gpay.png" alt="gpay" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
