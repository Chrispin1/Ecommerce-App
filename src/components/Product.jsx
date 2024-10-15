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
        <div className="absolute top-2  p-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all -right-11 group-hover:right-2 ">
          <button>
            <div className="flex justify-center items-center text-white w-12 h-12 md:w-7 md:h-7 bg-red-500 shadow-lg">
              <BsPlus className="text-3xl lg:text-xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="flex items-center justify-center md:w-7 md:h-7 w-12 h-12 drop-shadow-xl text-primary bg-red-300">
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="capitalize text-sm text-gray-500">{category}</div>
      <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb-1">{title}</h2>
      </Link>
      <div className="font-semibold">$ {price}</div>
    </div>
  );
};

export default Product;
