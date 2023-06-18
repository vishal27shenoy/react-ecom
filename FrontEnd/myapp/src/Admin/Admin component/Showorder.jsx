import React, { useEffect, useState } from "react";
import axios from "axios";
const Showorder = () => {
  const [data, setdata] = useState([]);
  const getAllOrder = async () => {
    const response = await axios.get("http://localhost:5000/order");
    console.log(response);
    setdata(response.data);
  };
  useEffect(() => {
    getAllOrder();
  }, []);
  return (
    <div className="display_order_in_grid">
      {data &&
        data.map((item, index) => {
          return (
            <div key={index} className="order_card">
              <div className="product_img">
                <img src={item.imgsrc} alt="" />
              </div>
              <div className="product_order_info">
                <span className="order_title">{item.title}</span>
                <span>{item.email}</span>
                <span>{item.order_date.substring(0, 10)}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Showorder;
