import React, { useState } from "react";
import "../css/navbar.css";
import logo from "../asset/logo.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";
import Footer from "./Footer";
const Navbar = ({ cartitem }) => {
  const navigate = useNavigate();
  // const [cartitem, setitemcart] = useState(
  //   JSON.parse(localStorage.getItem("cart")) || []
  // );
  const [leftnav, setleftnav] = useState(true);
  // useEffect(() => {
  //   setitemcart(JSON.parse(localStorage.getItem("cart")));
  // }, [JSON.parse(localStorage.getItem("cart"))]);
  return (
    <>
      <div className="navbar_main_container">
        <div className="navbar_sub_container">
          <div className="navbar_left_container">
            A
            <img src={logo} alt="" height="40px" />Z cart
            <div className="menu_icon" onClick={() => setleftnav(!leftnav)}>
              {leftnav ? <AiOutlineMenu /> : <RxCross1 />}
            </div>
          </div>
          <div
            className="navbar_right_container"
            style={{ left: leftnav ? "-100%" : "0%" }}
          >
            <div onClick={() => navigate("/home")}>Home</div>
            <div onClick={() => navigate("/product")}>Products</div>
            <div onClick={() => navigate("/contact")}>ContactUs</div>
            <div
              onClick={() => navigate("/cart")}
              className="navbar_cart_container"
              data-count={cartitem.length}
            >
              <AiOutlineShoppingCart style={{ fontSize: "20px" }} />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Navbar;
