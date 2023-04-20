import React, { useState } from 'react';
import workoutPlansData from '../../data.json';
import "../WorkoutPlans/WorkoutPlans.css"

function WorkoutPlans() {
    
    console.log(workoutPlansData)
      const [workoutPlan, setWorkoutPlan] = useState(workoutPlansData);

      let today = new Date();

// Get end date (3 days from today)
let end = new Date();
end.setDate(today.getDate() + 3);

// Format dates for display
let startDate = today.toLocaleDateString('en-US');
let endDate = end.toLocaleDateString('en-US');

      return (
        <div className='animate plansmain'>
            <div style={{textAlign:"center"}}>
          <h1>{workoutPlan.planName}</h1>
          <p>{workoutPlan.description}</p>
          <p>Start Date: {startDate}</p>
          <p>End Date: {endDate}</p>
          </div>
          <table className='tablemain table'>
            <tbody>
            <tr>
                <th style={{fontSize:"25px"}}>Day</th>
                <th style={{fontSize:"25px"}}>Exercises</th>
              </tr>
              {workoutPlan.workouts.map((workout) => (
                
                <tr key={workout.day} className='tabletr'>
                  <td className='daynum'>{workout.day}</td>
                  <td className='workoutsdata'>
                    <ul>
                      {workout.exercises.map((exercise, index) => (
                        <li key={index}>
                          <p>Name: {exercise.name}</p>
                          <p>Sets: {exercise.sets}</p>
                          <p>Reps: {exercise.reps}</p>
                          <p>Rest: {exercise.rest}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default WorkoutPlans;
