import React from "react";
import { cards } from "../data/data";

const HeadlineCards = () => {
  return (
    <div className="w-full max-w-[1640px] mx-auto p-4 py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* ======= Card ======= */}

      {cards.map((card) => (
        <div key={card.p1} className="rounded-xl relative">
          {/* ======== Overlay ======== */}

          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{card.p1}</p>
            <p className="px-2">{card.p2}</p>

            <button className="bg-white border-none font-semibold rounded-xl px-4 py-2 md:py-1 text-black mx-2 absolute bottom-4 hover:bg-black/90 hover:text-white">
              Order Now
            </button>
          </div>

          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={card.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
};

export default HeadlineCards;
