import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdExpandMore } from "react-icons/md";

const NavCart = () => {
  return (
    <div className="mr-5 flex flex-row justify-end items-center cursor-pointer">
      <CartIcon />
      <span className="mr-2">My Cart</span>
      <MdExpandMore />
    </div>
  );
};

export default NavCart;

const CartIcon = () => {
  return (
    <section className="relative flex items-center justify-center mr-3">
      <HiOutlineShoppingCart className="text-4xl" />
      <span className="absolute text-sm bg-green-600 rounded-full p-1 text-white mb-4 ml-6">
        10
      </span>
    </section>
  );
};
