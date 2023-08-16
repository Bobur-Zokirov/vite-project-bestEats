import { AiOutlineClose, AiFillTags } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdOutlineFavorite } from "react-icons/md";
import { BsFillSaveFill } from "react-icons/bs";
import { FaWallet, FaUserFriends } from "react-icons/fa";

const SideBar = ({ showMenu, showHandler }) => {
  return (
    <div
      className={`fixed text-black bg-white top-0 pt-5 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[27%] h-screen z-10 ease-linear duration-500 ${
        showMenu ? "left-0" : "left-[-100%] "
      }`}
    >
      <div className="absolute top-10 right-4 rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer hover:text-orange-500 duration-200">
        <AiOutlineClose size={23} onClick={showHandler} />
      </div>
      <h2 className="text-3xl p-4 pl-8 cursor-pointer">
        Beast <span className="font-bold">Eats</span>
      </h2>

      <nav>
        <ul className="flex flex-col px-8 py-4">
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <TbTruckDelivery size={23} className="mr-4" /> Orders
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <MdOutlineFavorite size={23} className="mr-4" /> Favourites
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <FaWallet size={23} className="mr-4" /> Wallet
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <MdHelp size={23} className="mr-4" /> Help
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <AiFillTags size={23} className="mr-4" /> Promotions
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <BsFillSaveFill size={23} className="mr-4" /> Best Ones
          </li>
          <li className="text-xl py-4 flex font-semibold items-center cursor-pointer rounded-md px-2 hover:text-white hover:bg-orange-500 duration-100">
            <FaUserFriends size={23} className="mr-4" /> Invite Friends
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
