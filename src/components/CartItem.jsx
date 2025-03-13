import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { title, image, price, id, amount } = item;
  return (
    <div className="flex">
      <div className="flex items-center space-x-4 w-full min-h-[150px]">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="image" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] hover:underline"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose className="hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex space-x-2 h-[36px] items-center text-sm mt-2">
            <div className="flex justify-between px-2 border rounded-md w-[100px] max-w-[100px] font-medium items-center h-full">
              <div className="cursor-pointer">
                <IoMdRemove />
              </div>
              <div>{amount}</div>
              <div className="cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div>$ {price}</div>
            <div>{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
