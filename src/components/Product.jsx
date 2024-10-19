import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product)
  const  {id, price, category, title, image}  = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] relative overflow-hidden group h-[300px] mb-4">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] flex justify-center items-center">
            <img className="max-h-[160px] group-hover:scale-110 transition" src={image} alt="" />
          </div>
        </div>
        <div className="absolute right-0 top-0 bg-red-500 opacity-0 group-hover:opacity-100 transition ">
          <button>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};


export default Product;
