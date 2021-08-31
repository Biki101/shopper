import React from "react";
import Image from "next/image";
import offer from "../../../public/limited-offer.png";

const LimitedOffer = () => {
  return (
    <div className="mt-10">
      <Image src={offer} alt="offer" height={400} width={2000} />
    </div>
  );
};

export default LimitedOffer;
