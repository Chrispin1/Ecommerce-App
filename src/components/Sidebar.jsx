import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { SidebarContext } from "../context/SidebarContext";
import CartItem  from '../components/CartItem'


const Sidebar = () => {
  const {isOpen,handleClick}=useContext(SidebarContext)
  return <div>Sidebar</div>;
};

export default Sidebar;
