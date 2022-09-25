import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Midpart from "./Components/Midpart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <Header></Header>
      <Midpart data-aos="fade-up"></Midpart>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
