import React from "react";
import workout1Gif from "../../Images/workout1.gif";
import workout2Gif from "../../Images/workout2.gif";
import workout3Gif from "../../Images/workout3.gif";
import "../Cardio/Cardio.css"
import Navbar from "../Navbar/Navbar";

const Cardio = () => {
  const workouts = [
    {
      name: "Cycling",
      benefit1: "Low-impact exercise that is easy on joints",
      benefit2: "Improves muscular strength and endurance",
      gif: workout2Gif,
    },
    {
        name: "Running",
        benefit1: "Improves cardiovascular health",
        benefit2: "Burns calories and aids in weight loss",
        gif: workout1Gif,
      },
    {
      name: "Jumping Jacks",
      benefit1: "Increases heart rate and improves cardiovascular health",
      benefit2: "Improves coordination and agility",
      gif: workout3Gif,
    },
  ];

  return (
    <div>
      <Navbar/>
      <h1>3 Different Cardio Workouts and Their Benefits</h1>
      <div className="workoutgifmain">
      {workouts.map((workout, index) => (
        <div key={index}>
          <h2>{workout.name}</h2>
          <img src={workout.gif} width="300px" height="250px" className="workoutgif" alt={workout.name} />
          <ul>
            <li>{workout.benefit1}</li>
            <li>{workout.benefit2}</li>
          </ul>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Cardio;
