import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React, { useState } from "react";
import { FaCartShopping, FaRegCircleUser } from "react-icons/fa6";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex px-4 h-16 items-center justify-between fixed top-0 w-full bg-white z-50 ">
        <div className="flex gap-2 items-center">
          <div
            className={`relative w-8 flex flex-col gap-1 mt-1.5 mr-1 transition-all duration-1000`}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IoMenu
              className={`absolute -top-4 transition-all duration-500 ease-in-out rotate-0 ${
                isOpen ? "rotate-90 opacity-0" : ""
              }`}
              size={32}
            />
            <IoClose
              className={`absolute -top-4 transition-all duration-500 ease-in-out opacity-0 ${
                isOpen ? "rotate-90 opacity-100" : ""
              }`}
              size={32}
            />
          </div>

          <h1 className="text-[25px] font-secondary ">SHOP.CO</h1>
          <div
            className={`absolute top-[58px] flex flex-col gap-5 bg-gray-200 border border-black/20 w-[350px] items-center py-12 opacity-10 rounded-2xl transition-all duration-500 ease-in-out scale-0 -translate-y-[200px]  -translate-x-[160px]  ${
              isOpen
                ? "scale-105 translate-x-0.5 translate-y-3 opacity-[100%]"
                : ""
            }`}
          >
            <Accordion type="single" collapsible className="w-full px-10">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base no-underline">
                  Shop
                </AccordionTrigger>
                <AccordionContent className="w-[200px]  flex flex-col gap-2">
                  <a href="#" className="flex justify-between">
                    <h2>Men & Boys</h2>
                    <GoArrowRight />
                  </a>
                  <a href="#" className="flex justify-between">
                    <h2>Women & Girls</h2>
                    <GoArrowRight />
                  </a>
                  <a href="#" className="flex justify-between">
                    <h2>Home Accesories</h2>
                    <GoArrowRight />
                  </a>
                  <a href="#" className="flex justify-between">
                    <a>Toys</a>
                    <GoArrowRight />
                  </a>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <a href="#topselling" className="flex w-[78%] justify-between">
              <h2 className="font-medium">Top Selling</h2>
              <GoArrowRight />
            </a>
            <a className="flex w-[78%] justify-between">
              <h2 className="font-medium">New Arrivals</h2>
              <GoArrowRight />
            </a>
            <a className="flex w-[78%] justify-between">
              <h2 className="font-medium">Brands</h2>
              <GoArrowRight />
            </a>
          </div>
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
