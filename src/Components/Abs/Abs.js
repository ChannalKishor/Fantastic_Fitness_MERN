import React, {useState} from "react";
import "../Abs/Abs.css";
import abs1 from "../../Images/abs1.jpg";
import abs2 from "../../Images/abs2.jpg";
import abs3 from "../../Images/abs3.jpg";
import VideoPlayer from "./VideoPlayer";

const Abs = () => {

    const [videoId, setVideoId] = useState(null);

  const handleClick = (videoId) => {
    setVideoId(videoId);
  };

  return (
    <div className="blocks">
      <div class="eachblock">
        <a href="#" onClick={() => handleClick('https://youtu.be/tLOPm7vu4Qg')}>
            <h2>15-Minute Core Conditioning Workout You Can Do Anywhere</h2>
        <img src={abs1} alt=""/>
        <p>Train your abs effectively and efficiently! This versatile workout can be done with just your bodyweight and should be incorporated into your training plan 2-3 times per week.</p>
        <button>View</button>
        </a>
        
      </div>

      <div class="eachblock">
        <h2>15-Minute Core Conditioning Workout You Can Do Anywhere</h2>
        <img src={abs2} alt=""/>
        <p>Train your abs effectively and efficiently! This versatile workout can be done with just your bodyweight and should be incorporated into your training plan 2-3 times per week.</p>
        <button>View</button>
      </div>

      <div class="eachblock">
        <h2>15-Minute Core Conditioning Workout You Can Do Anywhere</h2>
        <img src={abs3} alt=""/>
        <p>Train your abs effectively and efficiently! This versatile workout can be done with just your bodyweight and should be incorporated into your training plan 2-3 times per week.</p>
        <button>View</button>
      </div>

      <div>
      {videoId && <VideoPlayer videoId={videoId} />}
      </div>
    </div>
  )
};

export default Abs;
