import { FormEvent } from "react";
import { FaAtom, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("search");
  };

  return (
    <div className="flex bg-cyan-950 text-white w-full h-12 px-4 items-center">
      <Link className="" to="/">
        <div className="flex rounded-full mr-2">
          <FaAtom className="w-10 h-10" />
        </div>
      </Link>
      <form className="flex items-center" onSubmit={handleSearch}>
        <button className=" rounded-full p-2">
          <FaSearch />
        </button>
        <input className="w-full rounded-full px-4  outline-none text-black" />
      </form>

      <div className="flex w-16 ml-auto shrink items-center justify-evenly">
        <Link to={"/cart"}>
          <span className="px-2 py-1 rounded-full ">
            <FaShoppingCart className="w-10" />
          </span>
        </Link>

        <Link to={"/account"}>
          <span className="px-2 py-1 rounded-full ">
            <FaUser className="" />
          </span>
        </Link>
      </div>
    </div>
  );
};
