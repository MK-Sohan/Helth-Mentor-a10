import logo from "./logo.svg";
import "./App.css";
import Header from "./Pages/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Services from "./Pages/Home/Services/Services";
import Blogs from "./Pages/Blogs/Blogs";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Registration/Register";
import Requireauth from "./Pages/Requireauth/Requireauth";
import Four0four from "./Pages/404/Four0four";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route
          path="/checkout"
          element={
            <Requireauth>
              <Checkout></Checkout>
            </Requireauth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<Four0four></Four0four>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
