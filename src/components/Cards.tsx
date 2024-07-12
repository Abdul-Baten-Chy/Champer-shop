/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Cards = ({ product }) => {
  return (
    <div className="my-4">
      <div className="w-[300px] h-[500px]  bg-[#EDF7FB] drop-shadow-sm border-2">
        <div className="h-[250px] bg-black relative">
          <img
            src={product?.images[0]}
            alt=""
            className="h-full object-cover"
          />
          <div className="w-16 h-16 bg-[#36D6A8] absolute bottom-0 left-0 text-center flex flex-col justify-center text-white ">
            <p>{product.quantity}</p>
            <p className="-mt-2">Items</p>
          </div>
        </div>
        <div className="mt-6 pl-5">
          <div className="flex  items-center gap-4">
            <div className="flex text-white gap-1 items-center px-2 bg-[#36D6A8]">
              <h3 className=" inline-block bg-[#36D6A8] px-2 py-1">
                {product.brand}
              </h3>
            </div>
            <p className="text-black"> Price: ${product.price} </p>
          </div>
          <p className="text-black font-bold mt-4">{product.name}</p>
          <div className="flex items-center gap-5 mt-5">
            <div className="">Category: {product.category}</div>
            <h3 className="text-[#4F46E5]  text-[18px] flex gap-2">
              Sizes:{" "}
              {product?.sizes?.map((item) => (
                <h2>{item}</h2>
              ))}
            </h3>
          </div>
          <div className="flex justify-center pr-5">
            <Link to={`/details/${product._id}`}>
              <button className="bg-[#4F46E5] w-[200px] text-center text-white  py-2 mt-5 ">
                VIEW DETAILS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
