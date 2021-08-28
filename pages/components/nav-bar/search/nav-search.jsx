import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { MdExpandMore } from "react-icons/md";

const NavSearch = () => {
  return (
    <div className="text-white text-3xl flex flex-row border-2 my-2 border-white">
      <section className="flex flex-row items-center cursor-pointer">
        <span className="ml-3 px-2">All</span>
        <span className="mx-2 text-blue-500">
          <MdExpandMore />
        </span>
      </section>
      <section className="flex flex-row">
        <input
          className="mx-2 bg-gray-300 outline-none"
          placeholder="Seach Here"
        />
        <BiSearchAlt className="bg-white h-full text-5xl px-2 text-gray-900 cursor-pointer" />
      </section>
    </div>
  );
};

export default NavSearch;
