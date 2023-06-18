import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../css/productinfo.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import axios from "axios";
const ProductInfo = ({ setitemcart }) => {
  const location = useLocation();
  const data = location.state;
  const [localvalues, setlocalvalues] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  // const [rerednder, setrerender] = useState(false);
  const SetItemToLocalStroage = () => {
    let values = {
      img: data.img,
      title: data.title,
      price: data.price,
      description: data.description,
      rating: data.star,
    };
    localvalues.push(values);
    console.log("hello", localvalues);
    localStorage.setItem("cart", JSON.stringify(localvalues));
    // setrerender(!rerednder);
    setitemcart(JSON.parse(localStorage.getItem("cart")));
  };
  // useEffect(() => {}, [rerednder]);
  return (
    <div>
      {/* <Navbar /> */}
      <div className="product_info_container">
        <div className="product_info_left_container">
          <img src={data.img} alt="" />
        </div>
        <div className="product_info_right_container">
          <span className="product_info_title">Name : {data.title}</span>
          <span className="product_info_cost">COST : {data.price}</span>
          <span className="product_info_description">
            DESCRIPTION : {data.description}
          </span>
          <span className="product_info_rating">
            {Array.from({ length: 5 }, (elem, index) => {
              var number = index + 0.5;
              return (
                <div className="star_holder">
                  {data.star >= index + 1 ? (
                    <AiFillStar style={{ color: "yellow" }} />
                  ) : data.star >= number ? (
                    <BsStarHalf style={{ color: "yellow" }} />
                  ) : (
                    <AiOutlineStar style={{ color: "yellow" }} />
                  )}
                </div>
              );
            })}
          </span>
          <span className="buyed_count">
            Total number of people buyed : {data.count}
          </span>
          <span className="product_info_buy">
            <button onClick={() => SetItemToLocalStroage()}>Add to Cart</button>
          </span>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default ProductInfo;
