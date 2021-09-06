import classNames from "classnames";
import React from "react";

const Product:React.FC<{ name: string }> = ({name}) => {
	return (
		<div className="m-3 w-96 text-left no-underline border border-solid border-gray-200 rounded-lg hover:shadow-md focus:shadow-md focus:outline-none">
        <div
            id="image"
        className={classNames(
          `h-64 rounded-t-lg flex items-center justify-center bg-blue-100`
        )}
      >
        <span className="material-icons text-6xl text-white">image</span>
      </div>
      <div className="p-5">
        <h2 className="m0 mb-4 text-2xl font-medium">{name}</h2>
        <p className="m-0 text-xl">Category: $category$</p>
        <p className="m-0 text-xl">£$cost$</p>
      </div>
    </div>
	);
};

export default Product;