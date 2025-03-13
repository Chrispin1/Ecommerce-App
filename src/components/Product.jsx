import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, title, category, image, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] overflow-hidden h-[300px] relative group transition">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center w-[200px] mx-auto">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
            />
          </div>
        </div>
        <div className="absolute right-0 p-2 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:mr-2 top-2">
          <button onClick={() => addToCart(id, product)}>
            <div className="flex text-3xl items-center justify-center text-white h-8 w-8 bg-red-500 drop-shadow-xl">
              <BsPlus />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-8 h-8 bg-white items-center flex justify-center drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className="flex flex-col mt-2 mb-1">
        <div className="capitalize text-gray-500 text-sm">{category}</div>
        <Link to={`product/${id}`} className="font-bold mb-1">
          {title}
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
