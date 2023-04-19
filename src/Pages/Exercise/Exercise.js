import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "../Exercise/Exercise.css";
import exerciseimg from "../../Images/exerciseimg.jpg";
import SearchExercises from "../../Components/SearchExercises";
import Exercises from "../../Components/Exercises";
import menplans from "../../Images/menplans.jpg";
import womenplans from "../../Images/womenplans.jpg";
import Service from "../../Components/Service/Srevice";
import ImageCardio from "../../Images/cardio.jpg";
import ImageRun from "../../Images/images.jpg";
import ImageTrainer from "../../Images/trainer.jpg";
import trainer1 from "../../Images/trainer1.jpg";
import trainer2 from "../../Images/trainer2.jpg";
import trainer3 from "../../Images/trainer3.jpg";
import trainer4 from "../../Images/trainer4.jpg";
import trainer5 from "../../Images/trainer5.jpg";
import trainer6 from "../../Images/trainer6.jpg";

const Exercise = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  const [visibleSection, setVisibleSection] = useState("exercise");

  const handleSectionClick = (sectionId) => {
    setVisibleSection(sectionId);
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <h1 style={{ textAlign: "center" }}>Plan Your Workout</h1>
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
        <div style={{ display: "flex" }} className="twoimages">
          <div>
            <img
              src={menplans}
              style={{ width: "100%" }}
              className="image1"
              alt="image"
            />
            <div>
              <ul className="exheadings">
                <li>
                  <a href="#3daymen">3-day workout plan</a>
                </li>
                <li>
                  <a href="#5daymen">5-day workout plan</a>
                </li>
              </ul>
            </div>
            <div id="3daymen" className="tablemen">
              <table>
                <thead>
                  <tr>
                    <th>Week1</th>
                    <th>Monday</th>
                    <th>Wednesday</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week2</th>
                    <th>Monday</th>
                    <th>Wednesday</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week3</th>
                    <th>Monday</th>
                    <th>Wednesday</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week4</th>
                    <th>Monday</th>
                    <th>Wednesday</th>
                    <th>Friday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div id="5daymen" className="tablemen">
              <table>
                <thead>
                  <tr>
                    <th>Week1</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                    <td>cvbnn</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week2</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                    <td>cvbnn</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week3</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                    <td>cvbnn</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Week4</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>dfghj</td>
                    <td>,vbcd</td>
                    <td>qwertyu</td>
                    <td>cvbnn</td>
                    <td>qwertyu</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <img
              src={womenplans}
              style={{ width: "100%" }}
              className="image2"
              alt="image"
            />
            <div>
              <ul className="exheadings">
                <li>3-day workout plan</li>
                <li>5-day workout plan</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="training"
      style={{ display: visibleSection === "training" ? "block" : "none" }}>
        <div class="hero1 node-12">
          <div class="overlay">
            <h1>TRAIN WITH US</h1>
            <p>
              The most comprehensive workout routines anywhere! Download workout
              plans any goal or experience level.
            </p>
            <p>
              Choose a category that best suits the workout you're searching
              for. Once in the category, use the sort and filter options to find
              the right workout for your experience and goals.
            </p>
          </div>
        </div>
        <h2>Our Categories</h2>
        <section className="services" style={{ display: "flex" }}>
          <Service title="Cardio" imgUrl={ImageCardio} navi="/abs" />
          <Service title="Abs Workout" imgUrl={ImageRun} navi="/abs" />
          <Service title="Fitness Events" imgUrl={ImageTrainer} navi="/abs" />
        </section>
        <div className="trainersmain">
          <h2>Our Trainers</h2>
          <div style={{ display: "flex" }} className="trainers">
            <div className="trainer">
              <img src={trainer1} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>

            <div className="trainer">
              <img src={trainer2} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>

            <div className="trainer">
              <img src={trainer3} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>
          </div>
          <div style={{ display: "flex" }} className="trainers">
            <div className="trainer">
              <img src={trainer4} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>

            <div className="trainer">
              <img src={trainer5} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>

            <div className="trainer">
              <img src={trainer6} alt="" />
              <h4>Name</h4>
              <p>Starts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercise;
