import { PartialChartCustomers } from "../../common/charts/PartialChartCustomers";
import { PartialChartRevenue } from "../../common/charts/PartialChartRevenue";

export const ScreenRoot = () => {
  return (
    <div className="w-full">
      <div className="flex w-full">
        <PartialRevenue />
        <PartialCustomers />
      </div>

      <div className="flex w-full">
        <PartialOrders title="Orders" />
        <PartialOrders title="Latest Orders" />
        <PartialOrders title="Best Products" />
      </div>

      <BestBrands />
    </div>
  );
};

const PartialRevenue = () => {
  return (
    <div className="flex-col m-2 bg-white">
      <div className="flex"> Revenue</div>
      <PartialChartRevenue />
    </div>
  );
};

const PartialCustomers = () => {
  return (
    <div className="m-2 bg-white">
      <PartialChartCustomers />
    </div>
  );
};

const PartialOrders = (props: { title: string }) => {
  return (
    <div className="w-[320px] m-4 flex-col bg-white">
      <div className="flex justify-between">
        <span>{props.title}</span>
        <span>+2.5%</span>
      </div>

      <div className="flex justify-evenly m-2 py-2 ">
        <div className="flex">
          <img
            className="h-14 rounded-full"
            src="https://via.placeholder.com/400"
          />
          <div className="flex-col pl-2">
            <div>Name</div>
            <div>ID 3643</div>
          </div>{" "}
        </div>

        <div className="flex px-2 items-center rounded-2xl bg-green-200 ">
          Colored Div
        </div>
      </div>
      <div className="flex justify-evenly m-2 py-2 ">
        <div className="flex">
          <img
            className="h-14 rounded-full"
            src="https://via.placeholder.com/400"
          />
          <div className="flex-col pl-2">
            <div>Name</div>
            <div>ID 3643</div>
          </div>{" "}
        </div>

        <div className="flex px-2 items-center rounded-2xl bg-green-200 ">
          Colored Div
        </div>
      </div>
      <div className="flex justify-evenly m-2 py-2 ">
        <div className="flex">
          <img
            className="h-14 rounded-full"
            src="https://via.placeholder.com/400"
          />
          <div className="flex-col pl-2">
            <div>Name</div>
            <div>ID 3643</div>
          </div>{" "}
        </div>

        <div className="flex px-2 items-center rounded-2xl bg-green-200 ">
          Colored Div
        </div>
      </div>
    </div>
  );
};

const PartialLastOrders = () => {
  return <div></div>;
};

const BestProducts = () => {
  return <div></div>;
};

const BestBrands = () => {
  return (
    <div className="flex-col jusitfy-evenly ">
      <span className="text-lg font-bold">Best Selling Brands</span>
      <table className="w-full table-auto bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Brand</th>
            <th className="py-3 px-6 text-left">Category</th>
            <th className="py-3 px-6 text-left">Sold</th>
            <th className="py-3 px-6 text-left">Pending</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">001</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">Waterco</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Diving Gear
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">150</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">75</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">001</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">Waterco</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Diving Gear
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">150</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">75</td>
          </tr>
          <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="py-3 px-6 text-left whitespace-nowrap">001</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">Waterco</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">
              Diving Gear
            </td>
            <td className="py-3 px-6 text-left whitespace-nowrap">150</td>
            <td className="py-3 px-6 text-left whitespace-nowrap">75</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
