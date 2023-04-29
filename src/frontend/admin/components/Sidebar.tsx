import { IconType } from "react-icons";
import {
  FaAddressCard,
  FaBars,
  FaBox,
  FaComment,
  FaDashcube,
  FaShoppingCart,
  FaStarOfLife,
  FaUsers,
} from "react-icons/fa";


const links: Array<{ name: string; url: string; icon: IconType }> = [
  { name: "Dashboard", url: "/dashboard/", icon: FaDashcube },
  { name: "Orders", url: "/dashboard/orders", icon: FaShoppingCart },
  { name: "Products", url: "/dashboard/products", icon: FaBox },
  { name: "Customers", url: "/dashboard/customers", icon: FaUsers },
  { name: "Statistics", url: "/dashboard/statistics", icon: FaBars },
  { name: "Reviews", url: "/dashboard/reviews", icon: FaComment },
  { name: "Staff", url: "/dashboard/staff", icon: FaStarOfLife },
  { name: "Hot Offers", url: "/dashboard/hot", icon: FaAddressCard },
];

export const Sidebar = () => {
  return (
    <div className="flex flex-col min-w-[200px] h-screen border-r-2  border-b-2  bg-white text-gray-500">
      {links.map((item, index) => {
        return (
          <a
            key={index}
            className="flex py-2 px-4 text-lg hover:text-gray-400"
            href={item.url}
          >
            <item.icon className=" self-center w-5 h-5 mr-2" />
            {item.name}
          </a>
        );
      })}
    </div>
  );
};
