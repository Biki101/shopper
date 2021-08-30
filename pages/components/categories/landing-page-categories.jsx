import React from "react";
import landingPagePicture from "../../../public/landing-page-image.jpg";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
const LandingPageCategories = () => {
  return (
    <div className="flex p-3 pl-1">
      <Image
        src={landingPagePicture}
        alt="landing page picture"
        height={600}
        width={2000}
      />
      <div className="absolute z-2 flex flex-col">
        <div className="flex flex-row bg-white ml-5 h-800 w-3/7 p-5 pt-5 gap-10">
          <div className="flex flex-col justify-between">
            <section className="">
              <section className="flex flex-row">
                <span className="font-black">Collectibles & art</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col ">
                <span>Collectibles</span>
                <span>Antiques</span>
                <span>Sports souvenir</span>
                <span>Art</span>
              </section>
            </section>
            <section className="mt-10 pt-5">
              <section className="flex flex-row">
                <span className="font-black">Electronics</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>Computers & tablets</span>
                <span>Camera & photo</span>
                <span>TV, audio & surveillance</span>
                <span>Cell phone & accessories</span>
              </section>
            </section>
            <section className="mt-20">
              <sectrion className="flex flex-row">
                <span className="font-black">Fashion</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </sectrion>
              <section className="flex flex-col">
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Jwelery & watches</span>
              </section>
            </section>
          </div>
          <div className="flex flex-col justify-between">
            <section className="pr-10">
              <section className="flex flex-row">
                <span className="font-black">Home & garden</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col pr-20">
                <span>Yard, garden & outdoor</span>
                <span>Crafts</span>
                <span>Home improvements</span>
                <span>Pet supplies</span>
              </section>
            </section>
            <section className="mb-10 pt-5">
              <section className="flex flex-row">
                <span className="font-black">Auto parts and Accessories</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>GPS & Security Devices</span>
                <span>Radar & Laser Detectors</span>
                <span>Care & Detailing</span>
                <span>Scooter Parts & Accessories</span>
              </section>
            </section>
            <section>
              <section className="flex flex-row">
                <span className="font-black">Musical instruments & gear</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>Guitar</span>
                <span>Pro audio equipment</span>
                <span>String</span>
                <span>Stage lighting & effects</span>
              </section>
            </section>
          </div>
          <div className="flex flex-col justify-between">
            <section>
              <section className="flex flex-row">
                <span className="font-black">Outdoor sports</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>Team sports</span>
                <span>Exercise & fitness</span>
                <span>Golf</span>
              </section>
            </section>
            <section className="mb-5 pt-5">
              <section className="flex flex-row">
                <span className="font-black">Toys & hobbies</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>Radio control</span>
                <span>Kids toys</span>
                <span>Action figures</span>
                <span>Dolls & bears</span>
              </section>
            </section>
            <section>
              <section className="flex flex-row">
                <span className="font-black">Others</span>
                <IoMdArrowDropright className="m-1 text-xl" />
              </section>
              <section className="flex flex-col">
                <span>Video games & consoles</span>
                <span>Healtgh & beauty</span>
                <span>Baby</span>
                <span>Buisness & industries</span>
              </section>
            </section>
          </div>
        </div>
        <div className="flex flex-row bg-white text-blue-600 ml-5 justify-center border-2 border-l-0 border-r-0 p-2">
          <span>See all categories</span>
          <IoMdArrowDropright className="m-1 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default LandingPageCategories;
