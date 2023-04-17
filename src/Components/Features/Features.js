import React from "react";
import "./Features.css";
import calendar from "../../Images/calender.png";
import dietplans from "../../Images/dietplans.jpg";
import equipment from "../../Images/equipment.png";
import workoutplan from "../../Images/workoutplan.png";
import bgimg from "../../Images/featurebgimg.jpg"

const Features = () => {
  return (
    <section id="features" className="container m-3 center featuremain">
      <h2 className="m-3" style={{color:"white"}}>Our Features</h2>
      <div className="features">
        <div className="feature">
          <img className="feature__img" style={{borderRadius:"50%"}} src={calendar} alt="FitClub events" />
          <h4>COOL EVENTS</h4>
        </div>
        <div className="feature">
          <img
            className="feature__img"
            src={dietplans}
            style={{borderRadius:"50%"}}
            alt="Medical Attention FitClub"
          />
          <h4>DIET PLANS</h4>
        </div>
        <div className="feature">
          <img className="feature__img" style={{borderRadius:"50%"}} src={equipment} alt="FitClub Equipment" />
          <h4>EQUIPMENT</h4>
        </div>
        <div className="feature">
          <img className="feature__img image4" src={workoutplan} alt="FitClub Showers" />
          <h4>WORKOUT PLANS</h4>
        </div>
      </div>
    </section>
  );
};

export default Features;
