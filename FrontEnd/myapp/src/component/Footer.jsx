import React from "react";
import "../css/footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="sub_footer_container">
        <div className="footer_left">
          <div>
            Developed by <span className="footer_owner">Vishal Shenoy B</span>
          </div>
          <div className="social_media_container">
            <AiFillFacebook className="footer_logo" />
            <BsInstagram className="footer_logo" />
            <BsTwitter className="footer_logo" />
          </div>
        </div>
        <div className="copyright">© All copyright rights preserved</div>
      </div>
    </div>
  );
};

export default Footer;
