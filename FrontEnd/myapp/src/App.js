import logo from "./logo.svg";
import "./App.css";
import RegistrationAndLogin from "./pages/RegistrationAndLogin";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { useContext } from "react";
import ProductInfo from "./component/ProductInfo";
import { useState } from "react";
import Footer from "./component/Footer";
import AdminHome from "./Admin/Admin component/AdminHome";
import AdminLogin from "./pages/AdminLogin";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [cartitem, setitemcart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RegistrationAndLogin />} />
          <Route element={<Navbar cartitem={cartitem} />}>
            {/* <Route path="/" element={<RegistrationAndLogin />} /> */}
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product/info"
              element={<ProductInfo setitemcart={setitemcart} />}
            />
          </Route>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
