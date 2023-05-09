/** @format */

import React from "react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { HiMenuAlt3 } from "react-icons/hi";

import { HiX } from "react-icons/hi";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="container mx-auto  px-3 flex justify-between py-4  ">
      <div className="logo ">
        <img src={logo} alt="logo" className="w-[50%]" />
      </div>

      <ul className=" hidden text-white md:flex gap-9">
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>

      <div
        onClick={() => setOpen(!open)}
        className="text-3xl text-white absolute right-4 top-6 cursor-pointer md:hidden"
      >
        {open ? <HiX /> : <HiMenuAlt3 />}
      </div>

      {/* Mobile */}
      <ul
        className={` md:hidden  text-white absolute top-20 right-[2rem] w-[300px] rounded-lg justify-center  bg-slate-200 backdrop-blur-sm overflow-hidden items-center flex flex-col gap-9 ${
          open ? "h-[15rem]" : "h-0"
        }`}
      >
        <li>Home</li>
        <li>About Us</li>
        <li>Features</li>
        <li>Solution</li>
      </ul>
    </nav>
  );
};

export default Navbar;
