import { useState } from "react";
import adobeicon from "../assets/img1.jpg";
import icon from "../assets/img2.png";
import MenuBar from "./MenuBar";

export default function Navbar() {
  const link = ["For You", "Discover", "Hire", "Assets", "Jobs"];
  const [toggle, setToggle] = useState(false);
  return (
    <div className="px-2 md:px-6 py-2 lg:px-8 border  font-Poppins flex w-full justify-between">
      <div className="flex relative items-center space-x-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6  lg:hidden  cursor-pointer "
          onClick={() => setToggle(true)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        {toggle ? <MenuBar setToggle={setToggle} link={link} /> : <></>}

        <h1 className="font-bold text-xl hidden lg:block ">Behance</h1>
        <h1 className="font-bold text-xl lg:hidden">Be</h1>
        <ul className="space-x-4 hidden lg:flex font-semibold">
          {link.map((item, index) => (
            <li
              className="hover:border-b-2 cursor-pointer border-color2"
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center font-medium space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <button className="hidden lg:block text-color3 bg-color3 bg-opacity-10 border px-4 py-2 rounded-full">
          Log in
        </button>
        <button className="hidden lg:block bg-color3 text-gray-100 py-2 px-4 rounded-full">
          Sign Up
        </button>

        <span className="hidden lg:block mx-2 text-xl">|</span>
        <button className="hidden lg:flex items-center border py-2 px-4 rounded-full">
          <img src={adobeicon} alt="adobeicon" className="w-12 " />
          Free Trial
        </button>
        <img src={icon} alt="Logoicon" className="hidden lg:block lg:w-20" />
      </div>
    </div>
  );
}
