import { useLoaderData } from "react-router-dom";

type Customer = {
  id: number;
  type: string;
  name: string;
  email: string;
  totalSpent: number;
};

export const ScreenCustomer = () => {
  const customer = useLoaderData() as Array<Customer>;
  return (
    <div className="w-full h-fit grid grid-cols-3 xl:grid-cols-5 gap-6">
      {customer.map((cust, index) => {
        return <Customer key={index} customer={cust} num={index} />;
      })}
    </div>
  );
};

const Customer = (props: { customer: Customer; num: number }) => {
  const { customer, num } = props;
  return (
    <div className="flex h-max justify-evenly flex-col p-4 bg-white  text-slate-500">
      <span className="self-center">Customer #{num}</span>
      <span>{customer.name}</span>
      <span>{customer.email}</span>
      <span>Total Spent: {customer.totalSpent}</span>
      <span>{customer.type}</span>
    </div>
  );
};
