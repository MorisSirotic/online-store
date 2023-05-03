import { FaShoppingCart } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

export const ScreenProductDetail = () => {
  const product = useLoaderData() as any;

  return (
    <div className="flex flex-col md:flex-row items-center h-full ">
      <img className="min-w-min w-full h-full" src={product.image} />

      <div className="flex  flex-col h-full bg-red-100 ">
       <div className="self-end">
       {product.description}
        </div> 

        <div className="flex items-center self-center">
          <button className="text-6xl border-2 rounded-full hover:bg-slate-400">
            +
          </button>
          <div className="text-4xl p-4 ">1</div>
          <button className="text-6xl p-4 rounded-full hover:bg-slate-400">
            -
          </button>
        </div>

        <div className="flex self-center">
          <button className="flex w-40  text-2xl border-2 items-center justify-center rounded-full hover:bg-slate-400">
            <FaShoppingCart className="mr-2" /> <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
