import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "../Exercise/Exercise.css";
import exerciseimg from "../../Images/exerciseimg.jpg";
import SearchExercises from "../../components/SearchExercises";
import Exercises from "../../components/Exercises";
import menplans from "../../Images/menplans.jpg";
import womenplans from "../../Images/womenplans.jpg";
import Service from "../../components/Service/Srevice";
import ImageCardio from "../../Images/cardio.jpg";
import ImageRun from "../../Images/images.jpg";
import ImageTrainer from "../../Images/trainer.jpg";
import trainer1 from "../../Images/trainer1.jpg";
import trainer2 from "../../Images/trainer2.jpg";
import trainer3 from "../../Images/trainer3.jpg";
import trainer4 from "../../Images/trainer4.jpg";
import trainer5 from "../../Images/trainer5.jpg";
import trainer6 from "../../Images/trainer6.jpg";
import { Link } from "react-router-dom";
import customimg from "../../Images/customimg.jpg";
import CreateSection from "../../components/CreateSection/CreateSection";
import WorkoutList from "../../components/WorkoutList/WorkoutList"

const Exercise = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  const [visibleSection, setVisibleSection] = useState("exercise");
  const [dayplan, setDayplan] = useState("");

  const handleSectionClick = (sectionId) => {
    setVisibleSection(sectionId);
  };

  const selectplan = (p) => {
    setDayplan(p);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h1 style={{ textAlign: "center", color:"black" }}>Plan Your Workout</h1>
      <div class="navbar">
        <a href="#exercise" onClick={() => handleSectionClick("exercise")}>
          Exercise
        </a>
        <a href="#" onClick={() => handleSectionClick("plans")}>
          Workout Plans
        </a>
        <a href="#training" onClick={() => handleSectionClick("training")}>
          Training
        </a>
      </div>

      <div
        id="exercise"
        style={{ display: visibleSection === "exercise" ? "block" : "none" }}
      >
        <div>
          <h1 style={{ textAlign: "center" }}>
            The Best Exercises To Include In A Workout Routine
          </h1>
          <br />
          <img src={exerciseimg} className="exerciseimg" alt="" />
        </div>
        <div>
          <box>
            <SearchExercises
              setExercises={setExercises}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
            <Exercises
              exercises={exercises}
              setExercises={setExercises}
              bodyPart={bodyPart}
            />
          </box>
        </div>
      </div>

      <div
        id="plans"
        style={{ display: visibleSection === "plans" ? "block" : "none" }}
      >
        <div className="twoimages">
          <div style={{ display: "flex" }}>
            <img
              src={menplans}
              style={{ width: "50%" }}
              className="image1"
              alt="image"
            />
            <img
              src={womenplans}
              style={{ width: "50%" }}
              className="image2"
              alt="image"
            />
          </div>
          <div>
            <ul className="exheadings">
              <li>
                <a
                  href="#3daymen"
                  onClick={(e) => {
                    e.preventDefault();
                    selectplan("3daymen");
                  }}
                >
                  <button>3-day workout plan</button>
                </a>
              </li>
              <li>
                <a
                  href="#5daywomen"
                  onClick={(e) => {
                    e.preventDefault();
                    selectplan("5daywomen");
                  }}
                >
                  <button>5-day workout plan</button>
                </a>
              </li>
            </ul>
          </div>
          <div
            id="3daymen"
            className="tablemen"
            style={{
              color: "black",
              display: dayplan === "3daymen" ? "block" : "none",
            }}
          >
            <a href="/3dayplan">Muscle Build</a>
            <a href="/3dayplan">Core Strength</a>
            <a href="/3dayplan">Bench Press</a>
          </div>

          <div
            id="5daywomen"
            className="tablemen"
            style={{
              color: "black",
              display: dayplan === "5daywomen" ? "block" : "none",
            }}
          >
            <a href="/3dayplan">Lower Body</a>
            <a href="/3dayplan">Summer Burn</a>
            <a href="/3dayplan">Body Tone</a>
          </div>
          <h1 style={{ textAlign: "center", color:"black" }}>------ New Feature -----</h1>
          <h2 style={{ textAlign: "center", color:"black" }}>Customise Your Workout</h2>
          <img src={customimg} alt="" className="customimg" />
          <div className="choosemain">
            <ul className="chooseul">
              <li className="chooseli">
                <Link to="/list" className="nav-link">
                  Workouts
                </Link>
              </li>
              <li className="chooseli">
                <Link to="/create" className="nav-link">
                  Create Workout Log
                </Link>
              </li>
              <li className="chooseli">
                <Link to="/user" className="nav-link">
                  Set Type
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <WorkoutList/>
          </div>
        </div>
      </div>

      <div
        id="training"
        style={{ display: visibleSection === "training" ? "block" : "none" }}
      >
        <div class="hero1 node-12">
          <div class="overlay">
            <h1 className="t_head">TRAIN WITH US</h1>
            {/* <p className="t_para1">
              The most comprehensive workout routines anywhere! Download workout
              plans any goal or experience level.
            </p> */}
            <p className="t_para2">
              Choose a category that best suits the workout you're searching
              for. Once in the category, use the sort and filter options to find
              the right workout for your experience and goals.
            </p>
          </div>
        </div>
        <h2 style={{ textAlign: "center" }}>Our Categories</h2>
        <section className="services" style={{ display: "flex" }}>
          <Service title="Cardio" imgUrl={ImageCardio} navi="/cardio" />
          <Service title="Abs Workout" imgUrl={ImageRun} navi="/abs" />
          <Service title="Fitness Events" imgUrl={ImageTrainer} navi="/abs" />
        </section>
        <div className="trainersmain">
          <h2 style={{ textAlign: "center" }}>Our Trainers</h2>
          <div className="trainers">
            <div className="trainer">
              <img src={trainer1} alt="" />
              <h4>John Harry</h4>
            </div>

            <div className="trainer">
              <img src={trainer2} alt="" />
              <h4>Chris Larry</h4>
            </div>

            <div className="trainer">
              <img src={trainer3} alt="" />
              <h4>Jane Audrey</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
