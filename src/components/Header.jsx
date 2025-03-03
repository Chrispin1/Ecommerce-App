import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <header className="bg-pink-200">
      <div>Header</div>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl hover:scale-110 transition duration-300" />
      </div>
    </header>
  );
};

export default Header;
