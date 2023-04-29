import { useState } from "react";
import { useLoaderData } from "react-router-dom";

type Product = {
  id: number;
  publicId: string;
  name: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export const ScreenProducts = () => {
  const products = useLoaderData() as Product[];

  console.log(products);
  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {products.map((item) => {
          return <ProductForm {...item} />;
        })}
      </div>
    </div>
  );
};

const Product = (product: Product) => {
  return (
    <div key={product.id} className="flex flex-col p-4 m-2 bg-white ">
      <span>ID: {product.id}</span>
      <span className="w-20 overflow-hidden overflow-ellipsis whitespace-nowrap text-overflow-ellipsis">
        Public ID: ... product.publicId
      </span>
      <span>{product.name}</span>
      <span>Price: {product.price}</span>
      <span>Stock: {product.stock}</span>

      <span>Created: {new Date(product.createdAt).toLocaleString()}</span>
      <span>Updated: {new Date(product.updatedAt).toLocaleString()}</span>
    </div>
  );
};

const ProductForm = (prop: Product) => {
  const [product, setProduct] = useState<Product>({
    ...prop,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send product data to the server
    console.log(product);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      key={product.id}
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-8  bg-white  border-2"
    >
      <div className="mb-4">
        <label
          htmlFor="publicId"
          className="block text-gray-700 font-bold mb-2"
        >
          Public ID
        </label>
        <input
          type="text"
          id="publicId"
          name="publicId"
          value={product.publicId}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="stock" className="block text-gray-700 font-bold mb-2">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
