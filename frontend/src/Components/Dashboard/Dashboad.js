// Dashboard.js

import React, { useState, useEffect } from 'react';
import '../Dashboard/Dashboard.css'
import axios from 'axios';
import profile from "../../Images/profile.jpg";
import bmiimg from "../../Images/bmi.png"

function Dashboard() {
  const [bmi, setBmi] = useState(null);
  const [calorie, setCalorie] = useState(null);
  const [heartRate, setHeartRate] = useState(null);
  const [oxygenValue, setOxygenValue] = useState(null);

//   useEffect(() => {
//     axios.get('/api/bmi')
//       .then(res => {
//         setBmi(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });

//     axios.get('/api/calorie')
//       .then(res => {
//         setCalorie(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });

//     axios.get('/api/heartRate')
//       .then(res => {
//         setHeartRate(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });

//     axios.get('/api/oxygenValue')
//       .then(res => {
//         setOxygenValue(res.data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }, []);

  return (
    <div className="Dashboard">
        <div className='profile'>
            <img src={profile} alt=''/>
        </div>
    <div className='data'>
        <div>
      <div className="bmi">
        <h2>BMI</h2>
        {bmi && (
          <div>
            <p>Height: {bmi.height}</p>
            <p>Weight: {bmi.weight}</p>
            <p>BMI: {bmi.bmi.toFixed(2)}</p>
          </div>
        )}
      </div>
      <div className="calorie">
        <h2>Calorie Tracker</h2>
        {calorie && (
          <div>
            <p>Date: {calorie.date}</p>
            <p>Calories Consumed: {calorie.caloriesConsumed}</p>
            <p>Calories Burned: {calorie.caloriesBurned}</p>
            <p>Net Calories: {calorie.netCalories}</p>
          </div>
        )}
      </div>
      <div className="heart-rate">
        <h2>Heart Rate</h2>
        {heartRate && (
          <div>
            <p>Date: 18-04-2023 {heartRate.date}</p>
            <p>Heart Rate: 72 {heartRate.heartRate}</p>
          </div>
        )}
      </div>
      </div>
      <div>
      <div className="oxygen-value">
        <h2>Oxygen Value</h2>
        {oxygenValue && (
          <div>
            <p>Date: 18-04-2023 {oxygenValue.date}</p>
            <p>Oxygen Value: 120 {oxygenValue.oxygenValue}</p>
          </div>
        )}
      </div>
      <div className='steps-taken'>
        <h2>Steps Taken</h2>
        <div>1234</div>
      </div>
      <div className='sleep-cycle'>
        <h2>Sleep Time</h2>
        <div></div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
