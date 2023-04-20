import React from "react";
import "./about.css";
import Header from "../../components/Header";
import HeaderImage from "../../Images/header_bg_1.jpg";
import StoryImage from "../../Images/about1.jpg";
import VisionImage from "../../Images/about2.jpg";
import MissionImage from "../../Images/about3.jpg";
import NavbarK from "../../components/Navbar.jsx"
// import Navbar from './../../components/Navbar/Navbar';

const About = () => {
  return (
    <>
    {/* <NavbarK/> */}
      <Header title="About us" image={HeaderImage}>
        We are a community-driven gym that focuses on a holistic approach to
        fitness, providing personalized plans, expert coaching, and
        top-of-the-line equipment to help our members achieve their goals and
        transform their lives. Join us on our mission to empower people to
        become the best version of themselves through fitness.
      </Header>
      <section className="about__story section">
        <div className="containerK about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="OurStoryImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Our Story is one of growth and evolution. As our community has
              grown, we've continued to expand our offerings and improve our
              services. But no matter how big we get, we'll never lose sight of
              our original goal - to offer a holistic approach to fitness that
              helps our members achieve their goals and transform their lives.
            </p>
            <p>
              We believe that true fitness is about more than just working out.
              It's about taking care of your body and mind, and making positive
              changes that will last a lifetime. That's why we offer not only
              personalized workout plans, but also customized diet plans and
              one-on-one training with our expert coaches.
            </p>
            <p>
              We know that fitness can be expensive, and we wanted to create a
              gym that was affordable and accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="about__vision section">
        <div className="containerK about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Our vision is to create a world where fitness is not just a hobby,
              but a way of life. We believe that everyone has the power to
              transform their health and well-being, and we're committed to
              providing the tools and support to help them do it.
            </p>
            <p>
              We envision a gym that is more than just a place to work out -
              it's a community of people who are dedicated to living their best
              lives. Our vision includes offering personalized plans that take
              into account each member's unique goals and needs, as well as
              providing access to expert coaches and top-of-the-line equipment.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="VisionImage" />
          </div>
        </div>
      </section>

      <section className="about__mission section">
        <div className="containerK about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="VisionImage" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to empower people to transform their lives through
              fitness. We believe that fitness is more than just a physical
              activity - it's a journey of self-discovery and personal growth.
              That's why we're committed to providing a supportive and inclusive
              environment that helps our members reach their full potential.
            </p>
            <p>
              We also prioritize creating a community where everyone feels
              welcome and supported, regardless of their fitness level. We
              believe that everyone deserves the opportunity to improve their
              health and well-being, and we're dedicated to providing that
              opportunity to our members.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
