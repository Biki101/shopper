import React, { useState } from "react";
import Deals from "./deals/deals";

const Dotw = () => {
  const [topdeals, setTopDeals] = useState([
    {
      category: 1,
      item: "item 1",
    },
    {
      category: 2,
      item: "item 2",
    },
    {
      category: 3,
      item: "item 3",
    },
    {
      category: 4,
      item: "item 4",
    },
    {
      category: 5,
      item: "item 5",
    },
    {
      category: 6,
      item: "item 6",
    },
    {
      category: 7,
      item: "item 7",
    },
  ]);
  return (
    <div>
      <span className="flex flex-col text-xl mt-5">Deal of the week</span>
      {topdeals.map((deal) => (
        <Deals key={deal.category} item={deal.item} />
      ))}
    </div>
  );
};

export default Dotw;
