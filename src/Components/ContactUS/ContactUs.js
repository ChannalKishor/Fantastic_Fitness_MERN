import React, { useState } from "react";
import "../ContactUS/ContactUs.css";
import call from "../../Images/call.jpg";
import mail from "../../Images/mail.jpg";
import location from "../../Images/location.png"

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setNameError("Please enter your name");
      return;
    }
    if (!email) {
      setEmailError("Please enter your email");
      return;
    }
    if (!message) {
      setMessageError("Please enter your message");
      return;
    }

    const mailtoLink = `mailto:bssandhya97@gmail.com?subject=New message from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contactmain">
      <h2>Contact Us</h2>
      <div className="contactsub">
        <div>
            <h5><img src={call} alt="" className="imageicon"/> Phone no:</h5>
            <h5><img src={mail} alt="" className="imageicon"/> Email:</h5>
            <h5><img src={location} alt="" className="imageicon"/> Address:</h5>
        </div>
        <form onSubmit={handleSubmit} className="contactform">
        <div className="formsection">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="formsection">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="formsection">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {messageError && <div className="error">{messageError}</div>}
        </div>
        <button type="submit">Send</button>
      </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
