import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
