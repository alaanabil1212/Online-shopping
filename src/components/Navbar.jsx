import React from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import { FaCaretDown } from "react-icons/fa";

import Darkmode from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Electronics",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#",
  },
  {
    id: 3,
    name: "Best selling",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="relative z-50 shadow-md bg-white dark:bg-gray-500 dark:text-white">
      {/* uppernavbar */}
      <div className="bg-primary dark:bg-gray-800 ">
        <div className="container mx-auto flex justify-between items-center px-5 py-2">
          {/* logo */}
          <a
            href="#"
            className="font-bold text-2xl italic flex gap-2 items-center"
          >
            <img
              src={Logo}
              alt="logo"
              className="w-[75px] border border-gray-300 rounded-full"
            />
            E-Shopping
          </a>

          {/* actions */}
          <div className="flex items-center gap-5">
            {/* search */}
            <div className="relative group hidden sm:block">
              <input
                type="search"
                placeholder="Search"
                className="bg-white w-[200px] group-hover:w-[300px]
                transition-all duration-200 rounded-full
                 border border-gray-300 px-2 py-1
                  focus:outline-none focus:border-gray-500
                  dark:bg-gray-700 dark:text-white dark:border-gray-600"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* order */}
            <button
              onClick={() => alert("Ordering is not available yet")}
              className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 transition hover:opacity-90"
            >
              <span className="hidden group-hover:block">Order</span>
              <TiShoppingCart className="text-xl cursor-pointer" />
            </button>

            {/* dark mode */}
            <Darkmode />
          </div>
        </div>
      </div>

      {/* lowernavbar */}
      <div className="flex justify-center">
        <ul className="sm:flex hidden gap-5 items-center">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary transition-all duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a className="flex items-center hover:text-primary">
              Trending
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180 " />
              </span>
            </a>
            <div
              className="absolute left-0 top-full hidden min-w-[180px]
             rounded-md bg-white p-2 shadow-lg
             group-hover:block dark:bg-gray-700"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="
                    block p-2 hover:bg-primary/100"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
