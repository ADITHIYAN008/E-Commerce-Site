import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaRegCopyright, FaTwitter } from "react-icons/fa6";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { IoLogoFacebook, IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="mb-20">
      <div className="mb-10 mx-4 mt-7 flex flex-col gap-4">
        <h2 className="font-secondary text-3xl">SHOP.CO</h2>
        <p className="text-gray-500/60 text-base">
          We have clothes that suits your style and which you're proud to wear
        </p>
        <div className="flex gap-4">
          <a className="px-3 py-3 rounded-full border border-gray-300">
            <FaTwitter size={15} />
          </a>
          <a>
            <IoLogoFacebook size={40} />
          </a>
          <a className="px-3 py-3 rounded-full border border-gray-300">
            <FiInstagram size={15} />
          </a>
          <a className="px-2.5 py-2.5 rounded-full border border-gray-300">
            <IoLogoGithub size={20} />
          </a>
        </div>
      </div>
      <div className="mx-4 grid gap-6 grid-cols-2 grid-rows-2">
        <div className="flex flex-col gap-3">
          <h2 className="tracking-widest">COMPANY</h2>
          <a className="text-gray-400">About</a>
          <a className="text-gray-400">Features</a>
          <a className="text-gray-400">Works</a>
          <a className="text-gray-400">Career</a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="tracking-widest">HELP</h2>
          <a className="text-gray-400">Customer Support</a>
          <a className="text-gray-400">Delivery Details</a>
          <a className="text-gray-400">Terms & Conditions</a>
          <a className="text-gray-400">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="tracking-widest">FAQ</h2>
          <a className="text-gray-400">Account</a>
          <a className="text-gray-400">Manage Deliveries</a>
          <a className="text-gray-400">Orders</a>
          <a className="text-gray-400">Payment</a>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="tracking-widest">RESOURCES</h2>
          <a className="text-gray-400">Free eBook</a>
          <a className="text-gray-400">Development Tutorial</a>
          <a className="text-gray-400">How to - Blog</a>
          <a className="text-gray-400">Youtube Playlist</a>
        </div>
      </div>
      <div className="mb-7 mx-4 h-[1px] bg-gray-400/40 mt-12"></div>
      <div>
        <h2 className="flex justify-center items-center text-gray-400 gap-1">
          Shop.co
          <FaRegCopyright /> 2000 - 2027, All Rights Reserved
        </h2>
        <div className="flex gap-1 justify-center mt-3">
          <img className="w-14" src="src/assets/visa.png" alt="visa" />
          <img className="w-14" src="src/assets/master.png" alt="master" />
          <img className="w-14" src="src/assets/paypal.png" alt="paypal" />
          <img className="w-14" src="src/assets/applepay.png" alt="applepay" />
          <img className="w-14" src="src/assets/gpay.png" alt="gpay" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
