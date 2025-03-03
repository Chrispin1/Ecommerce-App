import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } bg-white w-full md:w-[35vw] xl:max-w-[30vw] shadow-2xl transition-all fixed top-0 h-full z-20 px-4 lg:px-[35px] duration-300`}
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
    </div>
  );
};

export default Sidebar;
