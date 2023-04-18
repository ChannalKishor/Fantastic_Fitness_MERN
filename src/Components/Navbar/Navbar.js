import React from 'react';
import logo from "../../Images/log.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="nav">
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
        </div>
    </div>
  )
}

export default Navbar