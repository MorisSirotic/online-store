import { IconType } from "react-icons";
import {
  FaAddressCard,
  FaBars,
  FaBox,
  FaComment,
  FaDashcube,
  FaMoneyBill,
  FaShoppingCart,
  FaUsers
} from "react-icons/fa";

const links: Array<{ name: string; url: string; icon: IconType }> = [
  { name: "Dashboard", url: "/admin/dashboard", icon: FaDashcube },
  { name: "Orders", url: "/admin/dashboard/orders", icon: FaShoppingCart },
  { name: "Products", url: "/admin/dashboard/products", icon: FaBox },
  { name: "Customers", url: "/admin/dashboard/customers", icon: FaUsers },
  { name: "Statistics", url: "/admin/dashboard/statistics", icon: FaBars },
  { name: "Reviews", url: "/admin/dashboard/reviews", icon: FaComment },
  { name: "Transactions", url: "/admin/dashboard/transactions", icon: FaMoneyBill },
  { name: "Staff", url: "/admin/dashboard/staff", icon: FaAddressCard },
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
