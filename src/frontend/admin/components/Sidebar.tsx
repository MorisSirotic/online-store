import { FaAddressBook } from "react-icons/fa";

const links: Array<any> = ["Link", "Link", "Link", "Link"];

export const Sidebar = () => {
  return (
    <div className="flex flex-col min-w-[200px] h-screen border-r-2  border-b-2  bg-white text-gray-500">
      {links.map((item, index) => {
        return (
          <a key={index} className="flex py-2 px-4 text-lg hover:text-gray-400" href="#">
            <FaAddressBook className=" self-center w-5 h-5 mr-2" />{" "}
            {item + "#" + index}
          </a>
        );
      })}
    </div>
  );
};
