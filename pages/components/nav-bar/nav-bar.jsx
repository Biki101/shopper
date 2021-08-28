import React from "react";
import NavCart from "../cart/nav-cart";
import Menu from "./menu/menu";
import NavSearch from "./search/nav-search";
//import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div>
      <div className="bg-gray-100 flex flex-row justify-between pl-20 pr-10 p-4 border-2 border-bottom border-gray-300">
        <section className="flex flex-row">
          <p className="mr-7">Customer Support: +977 5555555555 | 6666666666</p>
          <p>info@gmail.com</p>
        </section>
        <section className="">
          <span className="bg-blue-800 text-white rounded-full px-4 py-3 cursor-pointer">
            Login
          </span>
          <span className="bg-blue-800 text-white rounded-full px-4 py-3 ml-5 cursor-pointer">
            Register
          </span>
        </section>
      </div>
      <div className="flex flex-row justify-between bg-gray-300 mt-2 text-center">
        <span className="flex flex-row">
          <Menu />
          <span className="flex flex-col text-4xl text-blue-800 justify-center cursor-pointer">
            logo
          </span>
        </span>
        <NavSearch />
        <NavCart />
      </div>
    </div>
  );
};

export default NavBar;
