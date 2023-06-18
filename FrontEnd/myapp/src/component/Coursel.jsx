import React, { useEffect, useState } from "react";
import "../css/coursel.css";
const Coursel = () => {
  const [move, setmove] = useState(true);
  var counter = 0;
  const slidingImageset = () => {
    const slides = document.querySelectorAll(".slideimg");
    slides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    });
  };
  const slideImg = () => {
    const slides = document.querySelectorAll(".slideimg");
    // console.log("hello slideimg");
    slides.forEach((slide, index) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
    if (counter == 3) {
      counter = 0;
    } else {
      counter++;
    }
  };
  const goNext = () => {
    slideImg();
  };
  setTimeout(() => {
    slidingImageset();
  }, 1000);
  setInterval(() => {
    goNext();
  }, 3000);
  return (
    <div className="coursel_main_container">
      <img
        src="https://www.gizchina.com/wp-content/uploads/images/2021/03/iPhone-13-Pro-2.jpg"
        alt=""
        className="slideimg"
      />
      <img
        src="https://image-us.samsung.com/us/smartphones/galaxy-s20/marketing/kv/images/S20_PZN_LO_KV_01_POSTERFRAME_PC.jpg"
        alt=""
        className="slideimg"
      />
      <img
        src="https://www.apple.com/v/macbook-pro-14-and-16/e/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png"
        alt=""
        className="slideimg"
      />
      <img
        src="https://c4.wallpaperflare.com/wallpaper/298/13/143/watch-technology-apple-watch-wallpaper-preview.jpg"
        alt=""
        className="slideimg"
      />
    </div>
  );
};

export default Coursel;
