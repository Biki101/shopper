import React from "react";
//import "./nav-bar.scss";

const NavBar = () => {
  return (
    <div className="bg-gray-300 flex flex-row justify-between pl-20 pr-10 p-4">
      <section className="flex flex-row justify-between">
        <p>Customer Support: +977 5555555555 | 6666666666</p>
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
  );
};

export default NavBar;
