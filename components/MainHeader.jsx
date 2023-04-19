import React from "react";
import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#beFITbeFANTASTIC</h4>
          <h1>
            Become a part of Fantastic Fitness and unlock your potential.{" "}
          </h1>
          <p>
            Our approach is not just a fitness program - it's a lifestyle that
            will challenge you physically and mentally, and transform you into
            the best version of yourself. With personalized workout plans,
            nutrition guidance, and support from our community, you'll be
            empowered to achieve things you never thought possible. Join our
            community today and become part of the fitness revolution.
          </p>
          <Link to="/plans" className="btn lg">
            Get Started
          </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="MainHeaderImage" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
