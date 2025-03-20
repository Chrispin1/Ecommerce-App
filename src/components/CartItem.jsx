import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { title, image, price, id, amount } = item;
  return (
    <div className="flex py-4 lg:px-0 w-full border-b border-gray-500">
      <div className="flex items-center space-x-4 w-full min-h-[150px]">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="image" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between">
            <Link
              className="text-sm uppercase font-medium max-w-[240px] hover:underline hover:underline-offset-4"
              to={`/product/${id}`}
            >
              {title}
            </Link>
            <div
              className="text-xl cursor-pointer"
              onClick={() => removeFromCart(id)}
            >
              <IoMdClose className="hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex space-x-2 h-[36px] items-center text-sm mt-2">
            <div className="flex justify-between px-2 border w-[80px] rounded-md md:w-[70px] lg:w-[100px] max-w-[100px] font-medium items-center h-full">
              <div
                className="cursor-pointer"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              <div>{amount}</div>
              <div
                className="cursor-pointer"
                onClick={() => increaseAmount(id)}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <p>Price</p>$ {price}
            </div>
            <div className="flex flex-col space-y-1 flex-1 justify-end items-center">
              <p>Total Price</p>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
