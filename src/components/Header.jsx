import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        window.scrollY > 20 ? setIsActive(true) : setIsActive(false);
      },
      []
    );
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } py-4 fixed w-full z-10 transition-all`}
    >
      <div className="container flex items-center justify-between mx-auto h-full px-6 md:px-10 ">
        <Link to={"/"}>
          <div>
            <img src="/logo.svg" alt="logo" className="w-[40px]" />
          </div>
        </Link>
        <div
          className="cursor-pointer flex relative "
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl hover:scale-110 transition duration-300" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 rounded-full text-[12px] h-[18px] w-[18px] flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
