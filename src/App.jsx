import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
