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
    <div className="flex flex-col m-auto items-center p-2 min-h-[690px]">
      {cart_items.map((ci) => {
        return <CartItem {...ci} />;
      })}

      <PromoCode />
      <Total />
    </div>
  );
};

const PromoCode = () => {
  return (
    <div className="w-full max-w-md">
      <span>Promo code</span>
      <div className="flex w-full justify-center self-center">
        <input className="w-[70%] max-w-xs outline-none px-2" />
        <button className="py-2  w-[30%] max-w-xs text-center bg-cyan-400">
          Apply
        </button>
      </div>
    </div>
  );
};

const Total = () => {
  return (
    <div className="w-full max-w-md my-10">
      <div className="flex w-full justify-center self-center">
        <div className="w-[70%] max-w-xs outline-none px-2 text-4xl">
          Total: €3000.25
        </div>
        <button className="py-2  w-[40%] max-w-xs text-center bg-cyan-400 upp">
          Checkout
        </button>
      </div>
    </div>
  );
};

const CartItem = (ci: TypeCartItem) => {
  return (
    <div className="flex w-full max-w-md flex-col m-2">
      <div className="flex bg-slate-100 items-center">
        <img className="w-20" src={ci.product.image} />

        <div className="flex w-full flex-col">
          {/*Discount*/}
          <div className="text-center max-w-[50px] ">-10%</div>
          {/*Name*/}
          <div className="">{ci.product.name}</div>
          {/*Amount*/}
          <div className="flex  0 justify-between">
            <div className="flex w-max items-center border border-slate-300">
              <span className="border-r p-0.5 border-slate-300">+</span>
              <span className="p-0.5">10</span>
              <span className="border-l p-0.5 border-slate-300">-</span>
            </div>
            <div className="mr-2">€50</div>
          </div>
        </div>
      </div>

      {/* Amount */}
    </div>
  );
};

const cart_items = [
  {
    quantity: 10,
    product: {
      name: "Cart Item",
      price: 600.42,
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
