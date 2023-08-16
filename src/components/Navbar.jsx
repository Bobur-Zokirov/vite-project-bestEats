import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { SideBar } from "./";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showHandler = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="w-full max-w-[1640px] mx-auto flex justify-between text-black p-4 shadow-lg fixed top-0 left-[50%] translate-x-[-50%] z-10 bg-white">
      {/* ========= Left side =========== */}
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={showHandler}>
          <HiMenuAlt1
            size={30}
            className="hover:text-orange-500 duration-200"
          />
        </div>

        <h1 className="inline text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        <div className="hidden lg:flex rounded-full bg-gray-200 items-center">
          <p className="px-2 py-1 rounded-full text-white bg-black">Delivery</p>
          <p className="px-2 py-1 rounded-full">Pickup</p>
        </div>
      </div>

      {/* ========= Center | Search Input =========== */}
      <div className=" flex items-center px-2 rounded-full bg-gray-100 w-[200px] sm:w-[300px] lg:w-[500px]">
        <AiOutlineSearch
          size={25}
          className="cursor-pointer hover:text-orange-500 duration-200"
        />
        <input
          type="text"
          placeholder="Search foods"
          className="bg-transparent text-lg p-2 w-full focus:outline-none"
        />
      </div>

      {/* ========= Right side | Cart =========== */}
      <button className="hidden border-none sm:flex items-center bg-gray-200 px-4 py-2 rounded-full cursor-pointer">
        <FaShoppingCart size={20} className="mr-2" /> Cart
      </button>

      {/* ========= Mobile Menu =========== */}
      {showMenu && (
        <div
          className="fixed w-full h-screen bg-black/60 top-0 left-0 z-10"
          onClick={() => setShowMenu(false)}
        ></div>
      )}

      {/* ========= Sidebar =========== */}
      <SideBar showMenu={showMenu} showHandler={showHandler} />
    </div>
  );
};

export default Navbar;
