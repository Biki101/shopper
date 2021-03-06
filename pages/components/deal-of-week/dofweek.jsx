import React, { useState } from "react";
import PopularServicesandDeals from "../deals/popular-services-deals";

const Dotw = () => {
  const [topDeals, setTopDeals] = useState([]);
  return (
    <div className="mt-20">
      <span className="flex flex-col text-xl mt-5 mb-2">Deal of the week</span>
      <div className="border-t-8 border-gray-400 border-opacity-50">
        <section className="flex flex-row justify-between border-b-8 border-gray-500">
          <PopularServicesandDeals prop="deals" />
          <PopularServicesandDeals />
          <PopularServicesandDeals />
          <PopularServicesandDeals />
          <PopularServicesandDeals />
          <PopularServicesandDeals />
          <PopularServicesandDeals />
        </section>
      </div>
    </div>
  );
};

export default Dotw;
