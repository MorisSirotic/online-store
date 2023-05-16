import { Cell, Pie, PieChart } from "recharts";

const data = [
  { name: "Returning Customers", value: 400 },
  { name: "New Customers", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F"];

export const PartialChartCustomers = () => {
  return (
    <PieChart width={320} height={320} >
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
     
    </PieChart>
  );
};
