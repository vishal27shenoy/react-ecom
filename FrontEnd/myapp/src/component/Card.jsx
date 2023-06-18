import React from "react";
import "../css/card.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const Card = ({ ID, TITLE, DESCRIPTION, PRICE, IMG, STAR, COUNT }) => {
  const navigate = useNavigate();
  return (
    <div className="card_container">
      <img src={IMG} alt="" />
      <span className="card_title">{TITLE}</span>
      <span className="card_cost">${PRICE}</span>
      <span className="card_rating" style={{ display: "flex" }}>
        {Array.from({ length: 5 }, (elem, index) => {
          var number = index + 0.5;
          return (
            <div className="star_holder">
              {STAR >= index + 1 ? (
                <AiFillStar style={{ color: "yellow" }} />
              ) : STAR >= number ? (
                <BsStarHalf style={{ color: "yellow" }} />
              ) : (
                <AiOutlineStar style={{ color: "yellow" }} />
              )}
            </div>
          );
        })}
      </span>
      <button
        className="card_btn"
        onClick={() =>
          navigate("/product/info", {
            state: {
              title: TITLE,
              description: DESCRIPTION,
              price: PRICE,
              img: IMG,
              star: STAR,
              count: COUNT,
            },
          })
        }
      >
        Read More
      </button>
    </div>
  );
};

export default Card;
{
  /* Array.from({ length: 5 }, (elem, index) => {
            var number = index + 0.5;
            return (
              <div>
                {val >= index + 1 ? (
                  <StarIcon sx={{ color: "gold" }} />
                ) : val >= number ? (
                  <StarHalfIcon sx={{ color: "gold" }} />
                ) : (
                  <StarBorderIcon sx={{ color: "gold" }} />
              </div>  )})}}) */
}
