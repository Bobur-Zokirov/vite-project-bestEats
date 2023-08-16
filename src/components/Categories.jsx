import { BiCopyright } from "react-icons/bi";

import { categories } from "../data/data";

const Categories = () => {
  return (
    <div className="max-w-[1280px] mx-auto p-4 md:py-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-orange-400 mb-8">
        Top Categories
      </h1>

      {/* ========== Categories ========= */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-20">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex justify-around items-center rounded-xl px-4 bg-gray-200"
          >
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-16" />
          </div>
        ))}
      </div>

      <footer className="flex flex-col md:flex-row justify-center px-2 text-center gap-5 mx-auto">
        <p className="flex items-center px-2 mx-auto md:m-0">
          <span className="font-semibold text-orange-600 mr-2">
            Zokirov Bobur
          </span>
          <BiCopyright /> 2023
        </p>

        <p>
          <span className="font-semibold text-orange-600">Email address:</span>
          <a href="/"> zeromegamaks@gamil.com</a>
        </p>
        <p>
          <span className="font-semibold text-orange-600">Telegram:</span>
          <a href="https://t.me/Bobur_Zokirov" className="text-blue-600">
            {" "}
            t.me/Bobur_Zokirov
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Categories;
