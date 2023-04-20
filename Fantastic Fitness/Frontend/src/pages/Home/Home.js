import React, {useState} from "react";
import "../Home/Home.css";
import Dashboard from "../../components/Dashboard/Dashboad";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import ContactUs from "../../components/ContactUS/ContactUs";
import Navbar from "../../components/Navbar/Navbar";
import miximg from "../../Images/miximg.png";
import Testimonials from "../../components/Testimonials/Testimonials";
import { Link } from "react-router-dom";
import Chatbotfeature from "../../components/Chatbot/Chatbot";

const Home = () => {

  const [showComponent, setShowComponent] = useState(false);
  const handleButtonClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <div>
      <header>
        <Navbar/>
      </header>

      <section>
        <div className="heroS">
          <h2>For Fitness, Performance and Life</h2>
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
        <img src={miximg} alt=""  className="homeimg"/>
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
      <div className="cbot">
        <button onClick={handleButtonClick}>ChatBotChat</button>
        <div className="cbox">
        {showComponent && <Chatbotfeature/>}
        </div>
      </div>
      {/* <section>
        <Footer />
      </section> */}
    </div>
  );
};

export default Home;
