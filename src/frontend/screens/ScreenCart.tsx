import { FaTrash } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

type TypeCartItem = {
  quantity: number;
  product: {
    name: string;
    price: number;
    image: string;
  };
};

export const ScreenCart = () => {
  const items = useLoaderData();

  return (
    <div className="flex flex-col ">
      {cart_items.map((ci) => {
        return <CartItem {...ci} />;
      })}

      <div className="text-2xl">Total: €200</div>
    </div>
  );
};

const CartItem = (ci: TypeCartItem) => {
  return (
    <div className="flex min-w-[300px] flex-col m-2 bg-white">
      <div className="flex">
        <img className="w-52" src={ci.product.image}></img>

        <div className="flex w-full flex-col justify-evenly bg-red-300">
          <div className="flex w-full bg-green-800 h-8 p-2 items-center">
            -10%
          </div>

          <div className="flex w-full items-center justify-between bg-slate-200">
            <div>{ci.product.name}</div>
            <div className="self-auto">
              <FaTrash/>
            </div>
          </div>

          <div className="flex items-center justify-between text-2xl">
            <div className="flex border">
              <span className="p-2 border-r">+</span>
              <span className="p-2">10</span>
              <span className="p-2 border-l">-</span>
            </div>

            <div className="font-extrabold bg-emerald-200">
              €{ci.product.price}
            </div>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

const cart_items = [
  {
    quantity: 10,
    product: {
      name: "Cart Item",
      price: 60.0,
      image: "https://via.placeholder.com/400/400",
    },
  },
  {
    quantity: 10,
    product: {
      name: "Cart Item",
      price: 60.0,
      image: "https://via.placeholder.com/400/400",
    },
  },
  {
    quantity: 10,
    product: {
      name: "Cart Item",
      price: 60.0,
      image: "https://via.placeholder.com/400/400",
    },
  },
  {
    quantity: 10,
    product: {
      name: "Cart Item",
      price: 60.0,
      image: "https://via.placeholder.com/400/400",
    },
  },
] as Array<TypeCartItem>;
