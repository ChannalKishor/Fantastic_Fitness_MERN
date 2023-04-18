// import "./App.css";
import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

const bot_messages = [
  {
    id: "Greet",
    message: "Hello, Welcome to Fitness App",
    trigger: "Ask Name",
  },
  {
    id: "Ask Name",
    message: "Please enter your name",
    trigger: "waiting1",
  },
  {
    id: "waiting1",
    user: true,
    trigger: "My Name",
  },
  {
    id: "My Name",
    message: "Hi {previousValue}, Please select what you are looking for?",
    trigger: "sections",
  },
  {
    id: "sections",
    options: [
      { value: "Workouts", label: "Workouts", trigger: "Workouts" },
      { value: "Diet Plan", label: "Diet Plan", trigger: "Diet Plan" },
      {
        value: "Equipments Bying",
        label: "Equipments Bying",
        trigger: "Equipments Bying",
      },
      {
        value: "Customer Support",
        label: "Customer Support",
        trigger: "Customer Support",
      },
    ],
  },

  // Workouts
  {
    id: "Workouts",
    message:
      "Great choice! We offer a variety of strength training workouts to choose from. What is your fitness level?",
    trigger: "fitness level",
  },
  {
    id: "fitness level",
    options: [
      { value: "Beginner", label: "Beginner", trigger: "Beginner" },
      { value: "Intermediate", label: "Intermediate", trigger: "Intermediate" },
      { value: "Advanced", label: "Advanced", trigger: "Advanced" },
    ],
  },
  // Beginner Workout
  {
    id: "Beginner",
    message:
      "Perfect. Here are some beginner strength training workouts you can choose from:",
    trigger: "Beginner Workouts",
  },
  {
    id: "Beginner Workouts",
    options: [
      {
        value: "Full-body Dumbbell Workout",
        label: "Full-body Dumbbell Workout",
        trigger: "Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Beginner Workout",
        label: "Bodyweight Beginner Workout",
        trigger: "Bodyweight Beginner Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "Resistance Band Workout",
      },
    ],
  },

  {
    id: "Full-body Dumbbell Workout",
    message: `Excellent choice! Here's your workout plan:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing
    2. Dumbbell squats (3 sets of 12 reps)
    3. Dumbbell chest press (3 sets of 12 reps)
    4. Dumbbell lunges (3 sets of 12 reps)
    5. Dumbbell rows (3 sets of 12 reps)
    6. Plank (3 sets of 30 seconds)
    7. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },
  {
    id: "Bodyweight Beginner Workout",
    message: `Great choice for a workout! Here's a beginner bodyweight workout to get you started:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing 
    2. Squats (3 sets of 10 reps)
    3. Push-ups (3 sets of 10 reps)
    4. Lunges (3 sets of 10 reps)
    5. Plank (3 sets of 30 seconds)
    6. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },
  {
    id: "Resistance Band Workout",
    message: `Great! Here's your workout plan:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing 
    2. Resistance band bicep curls (3 sets of 12 reps)
    3. Resistance band lateral raises (3 sets of 12 reps)
    4. Resistance band squats (3 sets of 12 reps)
    5. Resistance band hamstring curls (3 sets of 12 reps)
    6. Push-ups (3 sets of 12 reps)
    7. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },

  // Intermediate Workout
  {
    id: "Intermediate",
    message:
      "Perfect. Here are some intermediate strength training workouts you can choose from:",
    trigger: "Intermediate Workouts",
  },
  {
    id: "Intermediate Workouts",
    options: [
      {
        value: "Full-body Dumbbell Workout",
        label: "Full-body Dumbbell Workout",
        trigger: "Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Intermediate Workout",
        label: "Bodyweight Intermediate Workout",
        trigger: "Bodyweight Intermediate Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "Resistance Band Workout",
      },
    ],
  },

  {
    id: "Full-body Dumbbell Workout",
    message: `Excellent choice! Here's your workout plan:
    1. Warm-up (5-10 minutes): light cardio to get your heart rate up and blood flowing 
    2. Barbell squats (3 sets of 10-12 reps)
    3. Barbell bench press (3 sets of 10-12 reps)
    4. Bent-over barbell rows (3 sets of 10-12 reps)
    5. Dumbbell shoulder press (3 sets of 10-12 reps)
    6. Lat pull-downs (3 sets of 10-12 reps)
    7. Tricep pushdowns (3 sets of 10-12 reps)
    8. Bicep curls (3 sets of 10-12 reps)
    9. Plank (3 sets of 60 seconds)
    10. Cool-down (5-10 minutes): stretching to prevent soreness`,
    end: true,
  },
  {
    id: "Bodyweight Intermediate Workout",
    message: `Great choice for a workout! Here's a beginner bodyweight workout to get you started:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing 
    2. Bodyweight squats (3 sets of 12 reps)
    3. Push-ups (3 sets of 12 reps)
    4. Lunges (3 sets of 12 reps)
    5. Pull-ups or inverted rows (3 sets of 8 reps)
    6. Plank (3 sets of 30 seconds)
    7. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },
  {
    id: "Resistance Band Workout",
    message: `Great! Here's your workout plan:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing 
    2. Resistance band squats (3 sets of 12 reps)
    3. Resistance band push-ups (3 sets of 12 reps)
    4. Resistance band bicep curls (3 sets of 12 reps)
    5. Resistance band tricep extensions (3 sets of 12 reps)
    6. Resistance band lateral pulls (3 sets of 12 reps)
    7. Plank (3 sets of 30 seconds)
    8. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },

  // Advanced Workout
  {
    id: "Advanced",
    message:
    "Perfect. Here are some intermediate strength training workouts you can choose from:",
    trigger: "Advanced Workout"
  },
  {
    id: "Advanced Workout",
    options: [
      {
        value: "Full-body Dumbbell Workout",
        label: "Full-body Dumbbell Workout",
        trigger: "Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Advanced Workout",
        label: "Bodyweight Advanced Workout",
        trigger: "Bodyweight Advanced Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "Resistance Band Workout",
      },
    ],
  },

  {
    id: "Full-body Dumbbell Workout",
    message: `Excellent choice! Here's your workout plan:
    1. Warm-up (10 minutes): dynamic stretching to loosen up your muscles
    2. Dumbbell bench press (4 sets of 8 reps)
    3. Dumbbell incline bench press (4 sets of 8 reps)
    4. Dumbbell flyes (4 sets of 8 reps)
    5. Dumbbell curls (4 sets of 8 reps)
    6. Hammer curls (4 sets of 8 reps)
    7. Tricep extensions (4 sets of 8 reps)
    8. Tricep kickbacks (4 sets of 8 reps)
    9. Seated dumbbell press (4 sets of 8 reps)
    10. Lateral raises (4 sets of 8 reps)
    11. Rear delt flyes (4 sets of 8 reps)
    12. Dumbbell squats (4 sets of 8 reps)
    13. Dumbbell lunges (4 sets of 8 reps)
    14. Deadlifts (4 sets of 8 reps)
    15. Leg curls (4 sets of 8 reps)
    16. Plank (3 sets of 1 minute)
    17. Cool-down (10 minutes): static stretching to prevent injury`,
    end: true,
  },
  {
    id: "Bodyweight Advanced Workout",
    message: `Great choice for a workout! Here's a beginner bodyweight workout to get you started:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing
    2. Plyometric push-ups (3 sets of 12 reps)
    3. Bulgarian split squats (3 sets of 12 reps each leg)
    4. Single-leg deadlifts (3 sets of 12 reps each leg)
    5. Pull-ups (3 sets of 10 reps)
    6. Dips (3 sets of 10 reps)
    7. Burpees (3 sets of 12 reps)
    8. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },
  {
    id: "Resistance Band Workout",
    message: `Great! Here's your workout plan:
    1. Warm-up (5 minutes): light cardio to get your heart rate up and blood flowing 
    2. Resistance band squats (4 sets of 12 reps)
    3. Resistance band chest press (4 sets of 12 reps)
    4. Resistance band bicep curls (4 sets of 12 reps)
    5. Resistance band tricep extensions (4 sets of 12 reps)
    6. Resistance band rows (4 sets of 12 reps)
    7. Resistance band deadlifts (4 sets of 12 reps)
    8. Plank (3 sets of 1 minute)
    9. Cool-down (5 minutes): stretching to prevent soreness`,
    end: true,
  },

  {
    id: "Diet Plan",
    message: "Angular issue",
    end: true,
  },
  {
    id: "Equipments Bying",
    message: "Angular issue",
    end: true,
  },
  {
    id: "Customer Support",
    message: "Angular issue",
    end: true,
  },
];

function App() {
  return (
    <>
      <Segment floated="right">
        <ChatBot steps={bot_messages} />
      </Segment>
    </>
  );
}

export default App;
