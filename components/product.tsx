import classNames from "classnames";
import React from "react";
import { IProduct } from "../models/product";

const Product: React.FC<IProduct> = ({ name, category, cost, image }) => {
  return (
    <div className="m-3 w-96 text-left no-underline border border-solid border-purple-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none">
      <div
        id="image"
        className={classNames(
          `h-64 rounded-t-lg flex items-center justify-center`,
          {
            "bg-green-100": image === 0,
            "bg-red-100": image === 1,
            "bg-purple-100": image === 2,
            "bg-yellow-100": image === 3,
          }
        )}
      >
        <span className="material-icons text-6xl text-black">image</span>
      </div>
      <div className="p-5">
        <h2 className="m0 mb-4 text-2xl font-medium">{name}</h2>
        <p className="m-0 text-xl">Category: {category}</p>
        <p className="m-0 text-xl">£{cost}</p>
      </div>
    </div>
  );
};

export default Product;
