import { FaAccusoft, FaQuestion } from "react-icons/fa";

export const ScreenStatistics = () => {
  return (
    <div className="flex-col w-full bg-white">
      <span>Statistics</span>

      <div className="flex container">
        <PartialStats />

        <PartialStats />

        <PartialStats />
      </div>

 
<PartialChartRevenue />
 
    </div>
  );
};

const PartialStats = () => {
  return (
    <div className="flex  w-[320px] h-24 border p-2 justify-evenly items-center ">
      <div className="flex  items-center justify-center bg-green-300 h-10 w-10 rounded-full">
        <FaAccusoft className="" />
      </div>

      <div className="flex-col ">
        <div>€25000</div>
        <div className="text-sm text-gray-500">Total Sales</div>
      </div>

      <div className="flex flex-col  h-full justify-between">
        <FaQuestion className="self-center" />
        <div className="text-sm text-gray-500 self-end">+200%</div>
      </div>
    </div>
  );
};

import { curveCardinal } from "d3-shape";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },

  {
    name: "Aug",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sep",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Oct",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Nov",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Dec",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
];

const cardinal = curveCardinal.tension(0.2);

export const PartialChartRevenue = () => {
  return (
    <ResponsiveContainer width="80%" height="80%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="uv"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
