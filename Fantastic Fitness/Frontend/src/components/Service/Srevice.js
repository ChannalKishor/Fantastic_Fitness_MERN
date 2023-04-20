import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = ({ title, imgUrl, navi }) => {
  return (
    <div className="service">
        <Link to={navi}>
        <div
        style={{ backgroundImage: `url(${imgUrl})` }}
        className="service__bg"
      ></div>
        </Link>
      
      <h3 className="service__title">{title}</h3>
    </div>
  );
};

export default Service;
