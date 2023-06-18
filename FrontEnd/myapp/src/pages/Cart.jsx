import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "../css/cart.css";
import Footer from "../component/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Cart = () => {
  const [cartdata, setcardata] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  // useEffect(() => {
  //   console.log(cartdata);
  // });
  const DoOrder = async (title, imgsrc) => {
    const data = {
      email: localStorage.getItem("AZemail"),
      title: title,
      imgsrc: imgsrc,
    };
    const response = await axios.post("http://localhost:5000/order", data);
    if (response.status == 200) {
      alert("Order Sucessfull");
    }
  };
  return (
    <div>
      <div className="cart_main_container">
        {cartdata &&
          cartdata.map((item, index) => {
            return (
              <div className="single_cart_container">
                <div className="left_cart_container">
                  <img src={item.img} alt="" />
                </div>
                <div className="right_cart_container">
                  <span className="cart_name">Title : {item.title}</span>
                  <span className="cart_cost">Cost : {item.price}</span>
                  <span className="cart_description">
                    Description : {item.description}
                  </span>
                  <span className="cart_star">
                    <span className="card_rating" style={{ display: "flex" }}>
                      {Array.from({ length: 5 }, (elem, index) => {
                        var number = index + 0.5;
                        return (
                          <div className="star_holder">
                            {item.rating >= index + 1 ? (
                              <AiFillStar style={{ color: "yellow" }} />
                            ) : item.rating >= number ? (
                              <BsStarHalf style={{ color: "yellow" }} />
                            ) : (
                              <AiOutlineStar style={{ color: "yellow" }} />
                            )}
                          </div>
                        );
                      })}
                    </span>
                  </span>
                  <span className="buy_btn">
                    <button onClick={() => DoOrder(item.title, item.img)}>
                      Buy Now
                    </button>
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;
