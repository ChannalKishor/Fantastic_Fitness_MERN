import React, {useState} from "react";
import "../Abs/Abs.css";
import abs1 from "../../Images/abs1.jpg";
import abs2 from "../../Images/abs2.jpg";
import abs3 from "../../Images/abs3.jpg";
import VideoPlayer from "./VideoPlayer";
import Navbar from "../Navbar/Navbar";

const Abs = () => {

    const [videoId, setVideoId] = useState(null);

  const handleClick = (videoId) => {
    setVideoId(videoId);
  };

  return (
    <div>
      <Navbar/>
      <div className="blocks">
      <div className="eachblock">
        {/* <a href="#" onClick={() => handleClick('https://youtu.be/tLOPm7vu4Qg')}> */}
            <h2>10-Minute Core Conditioning Workout You Can Do Anywhere</h2>
        <img src={abs1} alt=""/>
        <p>Train your abs effectively and efficiently! This versatile workout can be done with just your bodyweight and should be incorporated into your training plan 2-3 times per week.</p>
        {/* </a> */}
        
      </div>

      <div className="eachblock">
      <a href="#" onClick={() => handleClick('https://www.youtube.com/watch?v=tLOPm7vu4Qg')}>
        <h2>Best Abs & Core Exercises: 5 Partner Moves for Your Six Pack</h2>
        <img src={abs2} alt=""/>
        <p>Have your abs come out of hiding yet? You can blast some serious fat and sculpt strong and sexy abs with these 5 exercises. You need a partner to do these exercises with you because it's SO MUCH better than working out alone...am I right?</p>
        </a>
      </div>

      <div className="eachblock">
        <h2>10 Minute Intense Abs Workout without any Equipment</h2>
        <img src={abs3} alt=""/>
        <p>This intense 10 minute abs circuit is designed to help you build thicker abs; abs that can be seen more easily with a slightly higher bodyfat percentage.</p>
      </div>
    </div>
    <div style={{marginLeft:"30%", marginTop:"2rem", marginBottom:"2rem"}}>
      {videoId && <VideoPlayer videoId={videoId} />}
      </div>
    </div>
    
  )
};

export default Abs;
