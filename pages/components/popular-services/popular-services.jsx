import React, { useState } from "react";
import PopularServicesandDeals from "../deals/popular-services-deals";

const PopularServices = () => {
  const [popularServices, serPopularServices] = useState([]);
  return (
    <div className="mt-20">
      <span className="flex flex-col text-xl mt-5 mb-2">Popular Services</span>
      <div className="border-t-8 border-gray-400 border-opacity-50">
        <section className="flex flex-row justify-between border-b-8 border-gray-500">
          <PopularServicesandDeals prop="service" />
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

export default PopularServices;
