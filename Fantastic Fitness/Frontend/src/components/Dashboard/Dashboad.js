import React, { useState, useEffect } from 'react';
import '../Dashboard/Dashboard.css'
import axios from 'axios';
import profile from "../../Images/profile.jpg";
import bmiimg from "../../Images/bmi.png";
import oxy from "../../Images/oxygen.png";
import steps from "../../Images/stepstaken.png";
import heartrate from "../../Images/heartrate.png";
import vitaldata from "../../vitals.json"

function Dashboard() {
  const [bmi, setBmi] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [oxygen, setOxygen] = useState('');
  const [stepsTaken, setStepsTaken] = useState("");

  // Use useEffect to fetch data from an API
  useEffect(() => {
        setBmi(vitaldata.bmi);
        setHeartRate(vitaldata.heartRate);
        setOxygen(vitaldata.oxygen);
        setStepsTaken(vitaldata.stepsTaken);
  }, []);

  return (
    <div className="Dashboard">
      <div className='profile'>
        <img src={profile} alt=''/>
      </div>
      <div>
      
      </div>
      <div className='data'>
        <h4 style={{textAlign:"center", color:"black"}} className='vitals'>User Vital Details</h4>
        <div>
          <div className="bmi">
            <h2><img src={bmiimg} alt='' className='bmiimg'/></h2>
            <div>
              <p>BMI: {bmi}</p>
            </div>
          </div>
          <div className="heart-rate">
            <h2><img src={heartrate} alt='' className='bmiimg'/></h2>
            <div>
              <p>Heart Rate: {heartRate}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="oxygen-value">
            <h2><img src={oxy} alt='' className='bmiimg'/></h2>
            <div>
              <p>Oxygen: {oxygen}</p>
            </div>
          </div>
          <div className='steps-taken'>
            <h2><img src={steps} alt='' className='bmiimg'/></h2>
            <div>Steps Taken: {stepsTaken}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;