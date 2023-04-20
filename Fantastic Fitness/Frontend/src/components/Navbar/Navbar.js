import React from 'react';
import logo from "../../Images/log.png";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <div className="navS">
          <ul>
            <Link to="/land"><li
            style={{marginTop:"1rem"}}>Home</li></Link>
              <Link to="/exercise"><li
              style={{marginTop:"1rem"}}>Exercises</li></Link>
            <img
              src={logo}
              width="50px"
              height="50px"
              style={{ marginRight: "2rem",marginTop:"0.5rem", marginLeft:"2rem" }}
              alt=""
            />
            <Link to="/plans"><li
            style={{marginTop:"1rem"}}>Plans</li></Link>
            <Link to=""><li
            style={{marginTop:"1rem"}}>ContactUs</li></Link>
          </ul>
          <h4 style={{ marginRight: "-5rem", color:"white" }}><Link to="/">Logout</Link></h4>
        </div>
    </div>
  )
}

export default Navbar