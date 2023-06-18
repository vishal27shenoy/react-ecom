import React, { useEffect, useLayoutEffect, useState } from "react";
import Navbar from "../component/Navbar";
import "../css/product.css";
import axios from "axios";
import Card from "../component/Card";
import Footer from "../component/Footer";
const Product = () => {
  const [data, setdata] = useState([]);
  useLayoutEffect(() => {
    FetchProductApi();
  }, []);
  const FetchProductApi = async () => {
    const response = await axios.get("http://localhost:3000/product");
    // console.log(response.data);
    setdata(response.data);
  };
  return (
    <div>
      <div className="product_main_container">
        {data &&
          data.map((item) => {
            return (
              <Card
                ID={item.id}
                TITLE={item.title}
                DESCRIPTION={item.description}
                IMG={item.image}
                PRICE={item.price}
                STAR={item.rating.rate}
                COUNT={item.rating.count}
              />
            );
          })}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Product;
