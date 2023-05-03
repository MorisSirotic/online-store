import { Link, useActionData, useLoaderData } from "react-router-dom";

export type TypeProduct = {
  publicId: string;
  name: string;
  price: number;
  image: string;
};

export const ScreenProducts = () => {
  const products = useLoaderData() as Array<TypeProduct>;

  return (
    <div className="flex">
      {products.map((prod, index) => {
        return <Product key={index} {...prod} />;
      })}
    </div>
  );
};

const Product = (prod: TypeProduct) => {
  return (

   <Link to={"/detail"}>

    <div className="flex m-2 items-center flex-col">
      <img className="w-40" src={prod.image} />
      <span>{prod.name}</span>
      <span>€{prod.price}</span>
    </div>
    </Link>
  );
};
