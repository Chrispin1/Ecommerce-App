import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white overflow-x-scroll w-full sm:w-[50vw] md:w-[45vw] lg:w-[32vw] xl:max-w-[40vw] shadow-2xl transition-all fixed top-0 h-full z-20 px-4 lg:px-[30px] duration-300`}
    >
      <div className="flex justify-between items-center border-b py-6">
        <div className="font-semibold uppercase">Shopping Bag (0)</div>
        <div
          className="w-8 h-8 cursor-pointer flex justify-center items-center"
          onClick={handleClose}
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div>
        <div>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between py-2 w-full">
          <div>
            <span className="uppercase font-semibold">Total:</span>
          </div>
          <div
            onClick={() => clearCart()}
            className="cursor-pointer py-4 bg-red-500 w-12 h-12 flex items-center justify-center text-xl text-white"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
