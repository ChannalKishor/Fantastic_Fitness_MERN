import React from "react";
import { Navbar } from "react-bootstrap";
import "../Home/Home.css";
import Dashboard from "../../Components/Dashboard/Dashboad";
import logo from "../../Images/log.png";
import Features from "../../Components/Features/Features";
import Footer from "../../Components/Footer/Footer";
import ContactUs from "../../Components/ContactUS/ContactUs";
import { Link } from "react-router-dom";
import miximg from "../../Images/miximg.png";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar className="nav">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>
              <Link to="/exercise">Exercises</Link>
            </li>
            <img
              src={logo}
              width="50px"
              height="50px"
              style={{ paddingRight: "2rem", marginTop: "-1rem" }}
              alt=""
            />
            <li>Plans</li>
            <li>Contact Us</li>
            <li>Profile</li>
          </ul>
          <h4 style={{ marginRight: "-5rem" }}>Welcome User !</h4>
        </Navbar>
      </header>

      <section>
        <div className="hero">
          <h2>AERTYUIOKJHGDSRTYUIOLNBVCDFGHJKL</h2>
          <p>loremfhgvshhjdigbdsn:Lkhknk;lhubknlkhbnkldhfbnldld </p>
          <button className="heroBtn">Get Started</button>
        </div>
      </section>
      <Dashboard />
      <section>
        <Features />
      </section>
      <br />
      <div className="info">
        <div className="textinfo">
          <h2>SPA AND MASSAGE SERVICES</h2> 
          <p>Both men and women can benefit from taking
          the time to recover and relax after a workout or busy day. Our sauna,
          steam room, and whirlpool areas are available for use and we offer a
          variety of massages provided by licensed professionals.</p> 
          
          <h2>FITNESS CLASSES</h2> 
          <p>Working out with others can be motivating and fun. Our range
          of classes is designed to keep things interesting and our enthusiastic
          instructors will encourage you to push yourself. We also offer virtual
          classes through HWX Digital Studio for your convenience.</p> 
          
          <h2>PERSONALIZED TRAINING</h2> 
          <p>Everyone has unique goals, challenges, and bodies. That's why
          we offer personalized training to help you achieve your best self. We
          match you with the right trainer who will guide you without
          intimidation. </p>
          
          <h2>COMMUNITY</h2> 
          <p>At our clubs, we understand the
          importance of connection and support. These intentional spaces provide
          an opportunity for us to come together and build meaningful
          friendships, which plays a vital role in physical and mental wellness
          for all of us.</p>
        </div>
        <img src={miximg} alt="" />
      </div>
      <br />
      <section>
        <Testimonials/>
      </section>
      <br/>
      <section>
        <ContactUs />
      </section>
      <br />
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
