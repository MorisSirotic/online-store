import { FaEnvelope, FaPhone, FaStarOfLife, FaUser } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export type Staff = {
  role: "ADMIN" | "MODERATOR" | "MANAGER";
  name: string;
  phone: string;
  email: string;
  picture: string;
};

export const ScreenStaff = () => {
  const staff = useLoaderData() as Array<Staff>;
  return (
    <div className="flex max-w-max flex-wrap h-max">
      {staff.map((staff) => {
        return <Staff {...staff} />;
      })}
    </div>
  );
};

const Staff = (staff: Staff) => {
  return (
    <div className="flex  m-2 pb-4 flex-col bg-white ">
      <img className="w-20 rounded-full self-center" src={staff.picture} />

      <span className="flex items-center">
        <span className="mr-auto ml-2">
          <FaUser />
        </span>

        <span className="mr-2">{staff.name}</span>
      </span>

      <span className="flex items-center">
        <span className="mr-auto ml-2">
          <FaPhone />
        </span>

        <span className="mr-2">{staff.phone}</span>
      </span>

      <span className="flex items-center">
        <span className="mr-auto ml-2">
          <FaEnvelope />
        </span>

        <span className="mr-2">{staff.email}</span>
      </span>

      <span className="flex items-center">
        <span className="mr-auto ml-2">
          <FaStarOfLife />
        </span>

        <span className="mr-2">{staff.role}</span>
      </span>
    </div>
  );
};
