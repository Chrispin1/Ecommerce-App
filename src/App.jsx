import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <Sidebar />
        <Footer />
      </div>
    </>
  );
}

export default App;
