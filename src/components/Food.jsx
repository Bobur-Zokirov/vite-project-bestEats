import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

import { data } from "../data/data";
import { Filters } from "./";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterByType = (category) => {
    setTimeout(() => {
      if (category === "all") {
        return setFoods(data);
      }
      setFoods(data.filter((c) => c.category === category));
    }, 100);
  };

  const filterByPrice = (price) => {
    setTimeout(() => {
      setFoods(data.filter((c) => c.price === price));
    }, 100);
  };

  return (
    <div className="max-w-[1280px] mx-auto p-4 md:py-12">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-orange-600">
        Top Rated Menu Items
      </h1>

      {/* ======== Filter Rows */}
      <Filters filterByType={filterByType} filterByPrice={filterByPrice} />

      {/* ======== Display Foods ==========  */}
      <div className="grid grid-cols-2 md:grid-cols-3  gap-6 rounded-xl mt-10">
        {foods.map((item) => (
          <div
            key={item.id}
            className="border shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover  hover:scale-105 duration-300"
            />
            <div className="flex justify-between items-end p-2 pt-4">
              <p className="font-bold text-lg">{item.name}</p>

              <div className="flex gap-1">
                <p className="text-white bg-orange-400 rounded-full px-1">
                  <span>{item.price}</span>
                </p>

                <button className="border-none pl-2 pr-1 cursor-pointer">
                  <FaShoppingCart size={18} className="mr-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
