import React from "react";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { IoMenu, IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav className="flex px-4 h-14 items-center justify-between">
        <div className="flex gap-2 items-center">
          <IoMenu className="w-[35px] h-[35px] mt-1.5" />
          <h1 className="text-[25px] font-secondary ">SHOP.CO</h1>
        </div>
        <div className="flex gap-3">
          <IoSearch className="w-[25px] h-[25px] mt-1.5" />
          <FaCartShopping className="w-[25px] h-[25px] mt-1.5" />
          <FaRegCircleUser className="w-[25px] h-[25px] mt-1.5" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
