// import { useContext } from "react";
// import { Link } from "react-router-dom";

import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const { id, price, category, title, image } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 overflow-hidden group transition relative">
        <div className="w-full h-full flex justify-center items-center">
          <img
            className="max-h-[160px] group-hover:scale-110 transition"
            src={image}
            alt=""
          />
        </div>
        <div className="absolute top-0 bg-red-500/40 p-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all -right-11 group-hover:right-0">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={"/"}
            className="flex items-center justify-center bg-white w-12 h-12 drop-shadow-xl text-primary">
            <BsEyeFill />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
