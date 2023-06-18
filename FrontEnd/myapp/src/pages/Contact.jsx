import React, { useState } from "react";
import "../css/contact.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xdovqnaj");
  const [data, setdata] = useState({ username: "", email: "", query: "" });
  const HandleSubmit = () => {
    window.Email.send({
      Host: "smtp.gmail.com",
      Username: "azcart27@gmail.com",
      Password: "Azcart@gmail26",
      To: "azcart27@gmail.com",
      From: data.email,
      Subject: "Az cart",
      Body: data.query,
    }).then((message) => alert(message));
  };
  console.log("Rendering in contact");
  return (
    <div>
      <div className="contact_main_container">
        <div className="contact_board_container"></div>
        {/* <div className="contact_form_container">
          <input
            type="text"
            name=""
            id=""
            className="contact_input_name"
            placeholder="Username"
            onChange={(e) => setdata({ ...data, username: e.target.value })}
          />
          <input
            type="text"
            name=""
            id=""
            className="contact_input_email"
            placeholder="Email"
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <textarea
            placeholder="Your query"
            name=""
            id=""
            className="contact_input_text"
            onChange={(e) => setdata({ ...data, query: e.target.value })}
          />
          <button className="contact_button" onClick={() => HandleSubmit()}>
            Submit
          </button>
        </div> */}
      </div>
      <form onSubmit={handleSubmit} className="contact_form_container">
        <input
          id="email"
          type="email"
          className="contact_input_email"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="contact_input_text"
          placeholder="Your Query"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className="contact_button"
        >
          Submit
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
};

export default Contact;
