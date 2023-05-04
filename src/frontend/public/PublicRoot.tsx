import { FaFacebook, FaInstagram, FaTumblr } from "react-icons/fa";
import { Outlet, useLocation } from "react-router-dom";
import { ScreenProducts } from "../screens/ScreenProducts";
import { Navbar } from "./components/Navbar";

export const PublicRoot = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-full h-full bg-slate-200">
      <Navbar />

      {location.pathname === "/" ? (
        <div>
          <Top />
          <ScreenProducts />
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

const Top = () => {
  return (
    <div className="flex flex-col lg:flex-row container text-center items-center m-auto">
      <div className="flex flex-col">
        <h2 className="text-teal-950   text-6xl font-bold uppercase">
          take your dive to the next level
        </h2>
        <div className="px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem
          molestiae vitae modi eos voluptate omnis amet ullam. Est, omnis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quo rem molestiae
          vitae modi eos voluptate omnis amet ullam. Est, omnis.
        </div>

        <button className="self-center rounded-full p-4 m-2 text-white uppercase bg-teal-950">
          Shop Now
        </button>
      </div>
      <img
        className="container h-fit"
        src="https://via.placeholder.com/1080"
      ></img>
    </div>
  );
};

const Footer = () => {
  return (
    <div
      className="flex flex-col w-full h-44  items-center uppercase
     text-white bg-cyan-900"
    >
      <div className="flex pt-4 w-full items-center">
        <div className="w-[30%]  h-1 ml-2 bg-white" />
        <div className="w-[30%] text-2xl text-center m-auto">Aquatic</div>
        <div className="w-[30%]  h-1 mr-2 bg-white" />
      </div>

      <div className="w-full flex justify-evenly text-xs">
        <div className="flex w-[30%] flex-col uppercase  [&>a]:py-2 [&>a]:self-start [&>a:hover]:text-red-300">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">About</a>
        </div>

        <div className="flex flex-col">
          <div className="flex w-full justify-evenly  [&>a:hover]:text-orange-400">
            <a href="/" target="_blank">
              <FaInstagram className="w-6 h-6" />
            </a>

            <a href="/" target="_blank">
              <FaTumblr className="w-6 h-6" />
            </a>

            <a href="/" target="_blank">
              <FaFacebook className="w-6 h-6" />
            </a>
          </div>
          <div className="h-full self-center mt-2 w-1 bg-white"></div>
          <span className="uppercase">Aquatic &copy; 2023</span>
        </div>

        <div className="flex w-[30%] text-end flex-col uppercase [&>a]:py-2 [&>a]:self-end  [&>a:hover]:text-red-300">
          <a href="/">Shipping</a>
          <a href="/">Returns / Exchanges</a>
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
};
