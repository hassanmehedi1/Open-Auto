import Footer from './Components/Footer'
import Header from './Components/Header'
import Midpart from './Components/Midpart'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <div className="">
      <Header></Header>
      <Midpart></Midpart>
      <Footer></Footer>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App
