import {
  FaBell,
  FaChevronDown,
  FaRegBookmark,
  FaSearch,
  FaSun
} from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="flex w-full h-20  items-center bg-white">
      <div className="flex min-w-[200px] h-full  items-center border-b border-r-2">
        <div className="flex ">
          <FaRegBookmark className="w-10 h-10 self-center" />
          <div className="flex flex-col ">
            <span className="text-2xl font-bold">Admin</span>
            <span className="-mt-2.5 ">eCommerce</span>
          </div>
        </div>
      </div>

      <div className="pl-2 flex h-full w-full items-center border-b-2">
        {/*SearchBar*/}
        <div className="flex items-center ">
          <FaSearch className="w-4 mr-2 text-slate-500" />
          <input
            className="text-slate-300 focus:text-black"
            placeholder="Search"
          ></input>
        </div>

        {/*InformationBar*/}
        <div className="flex justify-evenly items-center ml-auto text-slate-500">
          <div className="flex w-8 h-8 mr-2cursor-pointer  hover:bg-slate-200 rounded-full">
            <FaSun className="m-auto " />
          </div>

          <div className="flex  w-8 h-8 mr-2 hover:bg-slate-200 rounded-full">
            <FaBell className="m-auto" />
          </div>
          <img
            className="w-12 hover:border-4 hover:border-slate-100 rounded-full cursor-pointer"
            src="https://via.placeholder.com/400/300"
          />

          <div className="flex  w-8 h-8 mr-2 hover:bg-slate-200 rounded-full">
            <FaChevronDown className="m-auto cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
