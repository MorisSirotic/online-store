import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    Last_Week: 4000,
    This_Week: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    Last_Week: 3000,
    This_Week: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    Last_Week: 2000,
    This_Week: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    Last_Week: 2780,
    This_Week: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    Last_Week: 1890,
    This_Week: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    Last_Week: 2390,
    This_Week: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    Last_Week: 3490,
    This_Week: 4300,
    amt: 2100,
  },
];

export const PartialChartRevenue = () => {
    return <div >
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="This_Week" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="Last_Week" stroke="#82ca9d" />
      </LineChart>
    </div>
  

}
  
  
   
 