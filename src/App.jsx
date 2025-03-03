import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Outlet />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
