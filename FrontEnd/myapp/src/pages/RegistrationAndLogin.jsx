import React, { useState } from "react";
import "../css/regandlogin.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegistrationAndLogin = () => {
  const navigate = useNavigate();
  const [change, setchange] = useState(false);
  const [Regdata, setRegdata] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });
  const Registration = async () => {
    if (
      Regdata.username &&
      Regdata.email &&
      Regdata.password == Regdata.confirmPassword
    ) {
      console.log(Regdata);
      const data = Regdata;
      delete data.confirmPassword;
      console.log(data);
      const response = await axios.post("http://localhost:5000/Register", data);
      console.log(response);
      if (response.status === 200) {
        // navigate("/home");
        setchange(true);
      }
    }
  };
  const login = async () => {
    console.log("login");
    if (logindata.email && logindata.password) {
      const data = logindata;
      console.log(data);
      const response = await axios.post("http://localhost:5000/login", data);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("AZemail", logindata.email);
        navigate("/home");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="main_contaiber_login_reg">
      <div className="reg_and_login_container">
        <div className="left_container">
          <AiOutlineShoppingCart className="logo" />
          A-Z cart
        </div>
        <div className="right_login_container">
          <div
            className="login_container"
            style={{ display: change ? "flex" : "none" }}
          >
            <input
              type="text"
              placeholder="Email"
              id=""
              className="email_input"
              onChange={(e) =>
                setlogindata({ ...logindata, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              id=""
              className="password_input"
              onChange={(e) =>
                setlogindata({ ...logindata, password: e.target.value })
              }
            />
            <button className="login_btn" onClick={() => login()}>
              Login
            </button>
            <span className="already_user">
              New Here ?{" "}
              <span className="register" onClick={(e) => setchange(!change)}>
                Register
              </span>
            </span>
          </div>
          <div
            className="register_container"
            style={{ display: change ? "none" : "flex" }}
          >
            <input
              type="text"
              placeholder="Username"
              id=""
              className="email_input"
              onChange={(e) =>
                setRegdata({ ...Regdata, username: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Email"
              id=""
              className="email_input"
              onChange={(e) =>
                setRegdata({ ...Regdata, email: e.target.value })
              }
            />
            <input
              type="Password"
              placeholder="Password"
              id=""
              className="password_input"
              onChange={(e) =>
                setRegdata({ ...Regdata, password: e.target.value })
              }
            />
            <input
              type="Password"
              placeholder="Confirm Password"
              id=""
              className="password_input"
              onChange={(e) =>
                setRegdata({ ...Regdata, confirmPassword: e.target.value })
              }
            />
            <button className="login_btn" onClick={() => Registration()}>
              Register
            </button>
            <span className="already_user">
              Already a user ?
              <span className="register" onClick={(e) => setchange(!change)}>
                login
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationAndLogin;
