import { FormEvent } from "react";
import {
  FaAtom,
  FaSearch,
  FaShoppingCart,
  FaUser
} from "react-icons/fa";

export const Navbar = () => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("search");
  };

  return (
    <div className="flex justify-between w-full h-12 px-4 items-center text-white bg-zinc-800">
      <div className="flex rounded-full hover:bg-stone-700">
        <FaAtom className="w-12 h-12" />
      </div>

      <form className="flex items-center" onSubmit={handleSearch}>
        <button className="hover:bg-stone-700 rounded-full p-2">
          <FaSearch />
        </button>
        <input className="rounded-full pl-4  outline-none text-black" />
      </form>

      <div className="flex w-32 shrink justify-evenly">
        <span className="px-2 py-1 rounded-full hover:bg-stone-700">
          <FaShoppingCart className="w-10 h-10" />
        </span>
        <span className="px-2 py-1 rounded-full hover:bg-stone-700">
          <FaUser className="w-10 h-10" />
        </span>
      </div>
    </div>
  );
};

const Link = () => {};
