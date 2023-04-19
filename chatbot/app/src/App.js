import "./App.css";
import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
// import { Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
// import { Segment } from "semantic-ui-react";

const theme = {
  background: "white",
  fontFamily: "Arial",
  headerBgColor: "black",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "black",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

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
    id: "Continue message",
    message: "Continue",
    trigger: "Continue",
  },

  {
    id: "Continue",
    options: [
      { value: "Yes", label: "Yes", trigger: "C Yes" },
      { value: "No", label: "No", trigger: "C No" },
    ],
  },
  {
    id: "C Yes",
    message: "Please select what you are looking for?",
    trigger: "sections",
  },
  {
    id: "C No",
    message:
      "See you again. I hope you got to know what you where looking for!",
    end: true,
  },

  {
    id: "sections",
    options: [
      { value: "Workouts", label: "Workouts", trigger: "Workouts" },
      { value: "Diet Plan", label: "Diet Plan", trigger: "Diet Plan" },
      {
        value: "Equipments Buying",
        label: "Equipments Buying",
        trigger: "Equipments Buying",
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
        trigger: "B Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Beginner Workout",
        label: "Bodyweight Beginner Workout",
        trigger: "Bodyweight Beginner Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "B Resistance Band Workout",
      },
    ],
  },

  {
    id: "B Full-body Dumbbell Workout",
    message: "Excellent choice! Here's your workout plan:",
    trigger: "B Full-body Dumbbell Workout points",
  },

  {
    id: "B Full-body Dumbbell Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5-10 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li> Barbell squats (3 sets of 10-12 reps) </li>
          <li> Barbell bench press (3 sets of 10-12 reps) </li>
          <li> Bent-over barbell rows (3 sets of 10-12 reps) </li>
          <li> Dumbbell shoulder press (3 sets of 10-12 reps) </li>
          <li> Lat pull-downs (3 sets of 10-12 reps) </li>
          <li> Tricep pushdowns (3 sets of 10-12 reps)</li>
          <li> Bicep curls (3 sets of 10-12 reps) </li>
          <li> Plank (3 sets of 60 seconds) </li>
          <li> Cool-down (5-10 minutes): stretching to prevent soreness </li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },
  {
    id: "Bodyweight Beginner Workout",
    message:
      "Great choice for a workout! Here's a beginner bodyweight workout to get you started:",
    trigger: "Bodyweight Beginner Workout points",
  },
  {
    id: "Bodyweight Beginner Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Squats (3 sets of 10 reps)</li>
          <li>Push-ups (3 sets of 10 reps)</li>
          <li>Lunges (3 sets of 10 reps)</li>
          <li>Plank (3 sets of 30 seconds)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "B Resistance Band Workout",
    message: "Great! Here's your workout plan:",
    trigger: "B Resistance Band Workout points",
  },

  {
    id: "B Resistance Band Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Resistance band bicep curls (3 sets of 12 reps)</li>
          <li>Resistance band lateral raises (3 sets of 12 reps)</li>
          <li>Resistance band squats (3 sets of 12 reps)</li>
          <li>Resistance band hamstring curls (3 sets of 12 reps)</li>
          <li>Push-ups (3 sets of 12 reps)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
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
        trigger: "I Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Intermediate Workout",
        label: "Bodyweight Intermediate Workout",
        trigger: "Bodyweight Intermediate Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "I Resistance Band Workout",
      },
    ],
  },

  {
    id: "I Full-body Dumbbell Workout",
    message: "Great! Here's your workout plan:",
    trigger: "I Full-body Dumbbell Workout points",
  },

  {
    id: "I Full-body Dumbbell Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5-10 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Barbell squats (3 sets of 10-12 reps)</li>
          <li>Barbell bench press (3 sets of 10-12 reps)</li>
          <li>Bent-over barbell rows (3 sets of 10-12 reps)</li>
          <li>Dumbbell shoulder press (3 sets of 10-12 reps)</li>
          <li>Lat pull-downs (3 sets of 10-12 reps)</li>
          <li>Tricep pushdowns (3 sets of 10-12 reps)</li>
          <li>Bicep curls (3 sets of 10-12 reps)</li>
          <li>Plank (3 sets of 60 seconds)</li>
          <li>Cool-down (5-10 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "Bodyweight Intermediate Workout",
    message:
      "Great choice for a workout! Here's a beginner bodyweight workout to get you started:",
    trigger: "Bodyweight Intermediate Workout points",
  },

  {
    id: "Bodyweight Intermediate Workout points",

    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Bodyweight squats (3 sets of 12 reps)</li>
          <li>Push-ups (3 sets of 12 reps)</li>
          <li>Lunges (3 sets of 12 reps)</li>
          <li>Pull-ups or inverted rows (3 sets of 8 reps)</li>
          <li>Plank (3 sets of 30 seconds)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "I Resistance Band Workout",
    message: "Great! Here's your workout plan:",
    trigger: "I Resistance Band Workout points",
  },

  {
    id: "I Resistance Band Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Resistance band squats (3 sets of 12 reps)</li>
          <li>Resistance band push-ups (3 sets of 12 reps)</li>
          <li>Resistance band bicep curls (3 sets of 12 reps)</li>
          <li>Resistance band tricep extensions (3 sets of 12 reps)</li>
          <li>Resistance band lateral pulls (3 sets of 12 reps)</li>
          <li>Plank (3 sets of 30 seconds)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),

    trigger: "Continue message",
  },

  // Advanced Workout
  {
    id: "Advanced",
    message:
      "Perfect. Here are some intermediate strength training workouts you can choose from:",
    trigger: "Advanced Workout",
  },
  {
    id: "Advanced Workout",
    options: [
      {
        value: "Full-body Dumbbell Workout",
        label: "Full-body Dumbbell Workout",
        trigger: "A Full-body Dumbbell Workout",
      },
      {
        value: "Bodyweight Advanced Workout",
        label: "Bodyweight Advanced Workout",
        trigger: "Bodyweight Advanced Workout",
      },
      {
        value: "Resistance Band Workout",
        label: "Resistance Band Workout",
        trigger: "A Resistance Band Workout",
      },
    ],
  },

  {
    id: "A Full-body Dumbbell Workout",
    message: "Excellent choice! Here's your workout plan:",
    trigger: "I Full-body Dumbbell Workout points",
  },

  {
    id: "A Full-body Dumbbell Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (10 minutes): dynamic stretching to loosen up your muscles
          </li>
          <li>Dumbbell bench press (4 sets of 8 reps)</li>
          <li>Dumbbell incline bench press (4 sets of 8 reps)</li>
          <li>Dumbbell flyes (4 sets of 8 reps)</li>
          <li>Dumbbell curls (4 sets of 8 reps)</li>
          <li>Hammer curls (4 sets of 8 reps)</li>
          <li>Tricep extensions (4 sets of 8 reps)</li>
          <li>Tricep kickbacks (4 sets of 8 reps)</li>
          <li>Seated dumbbell press (4 sets of 8 reps)</li>
          <li>Lateral raises (4 sets of 8 reps)</li>
          <li>Rear delt flyes (4 sets of 8 reps)</li>
          <li>Dumbbell squats (4 sets of 8 reps)</li>
          <li>Dumbbell lunges (4 sets of 8 reps)</li>
          <li>Deadlifts (4 sets of 8 reps)</li>
          <li>Leg curls (4 sets of 8 reps)</li>
          <li>Plank (3 sets of 1 minute)</li>
          <li>Cool-down (10 minutes): static stretching to prevent injury</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "Bodyweight Advanced Workout",
    message:
      "Great choice for a workout! Here's a beginner bodyweight workout to get you started:",
    trigger: "Bodyweight Advanced Workout points",
  },

  {
    id: "Bodyweight Advanced Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Plyometric push-ups (3 sets of 12 reps)</li>
          <li>Bulgarian split squats (3 sets of 12 reps each leg)</li>
          <li>Single-leg deadlifts (3 sets of 12 reps each leg)</li>
          <li>Pull-ups (3 sets of 10 reps)</li>
          <li>Dips (3 sets of 10 reps)</li>
          <li>Burpees (3 sets of 12 reps)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "A Resistance Band Workout",
    message: "Great! Here's your workout plan:",
    trigger: "A Resistance Band Workout points",
  },

  {
    id: "A Resistance Band Workout points",
    component: (
      <div class="workout">
        <ol>
          <li>
            Warm-up (5 minutes): light cardio to get your heart rate up and
            blood flowing
          </li>
          <li>Resistance band squats (4 sets of 12 reps)</li>
          <li>Resistance band chest press (4 sets of 12 reps)</li>
          <li>Resistance band bicep curls (4 sets of 12 reps)</li>
          <li>Resistance band tricep extensions (4 sets of 12 reps)</li>
          <li>Resistance band rows (4 sets of 12 reps)</li>
          <li>Resistance band deadlifts (4 sets of 12 reps)</li>
          <li>Plank (3 sets of 1 minute)</li>
          <li>Cool-down (5 minutes): stretching to prevent soreness</li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  // Diet Plan

  {
    id: "Diet Plan",
    message: "Great choice! What type of diet plan would you like to follow",
    trigger: "Type of diet plan",
  },

  {
    id: "Type of diet plan",
    options: [
      {
        value: "Basic",
        label: "Basic",
        trigger: "Basic",
      },
      {
        value: "Weight Loss",
        label: "Weight Loss",
        trigger: "Weight Loss",
      },
      {
        value: "Weight Gain",
        label: "Weight Gain",
        trigger: "Weight Gain",
      },
    ],
  },

  {
    id: "Basic",
    message: "Here's a basic diet plan to help you reach your fitness goals:",
    trigger: "Basic points",
  },

  {
    id: "Basic points",
    component: (
      <ol class="workout">
        <li>
          <strong>Breakfast</strong>: Scrambled eggs with spinach and whole
          grain toast
        </li>
        <li>
          <strong>Morning snack</strong>: Greek yogurt with mixed berries
        </li>
        <li>
          <strong>Lunch</strong>: Grilled chicken with mixed veggies and brown
          rice
        </li>
        <li>
          <strong>Afternoon snack</strong>: Apple slices with almond butter
        </li>
        <li>
          <strong>Dinner</strong>: Baked salmon with roasted sweet potato and
          asparagus
        </li>
        <li>
          <strong>Dessert (optional)</strong>: Dark chocolate square
        </li>
      </ol>
    ),
    trigger: "Continue message",
  },

  {
    id: "Weight Loss",
    message:
      "To lose weight, it's important to create a calorie deficit, which means consuming fewer calories than you burn each day. Here's a daily meal plan:",
    trigger: "Weight Loss points",
  },

  {
    id: "Weight Loss points",
    component: (
      <div class="workout">
        <ol>
          <li>
            <strong>Breakfast (300 calories)</strong>:
            <ul>
              <li>1 slice whole grain toast (70 calories)</li>
              <li>2 scrambled eggs (140 calories)</li>
              <li>1 small apple (90 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Snack (100 calories)</strong>:
            <ul>
              <li>1/2 cup blueberries (40 calories)</li>
              <li>1 low-fat string cheese (60 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Lunch (400 calories)</strong>:
            <ul>
              <li>Grilled chicken breast (120 calories)</li>
              <li>1/2 cup brown rice (110 calories)</li>
              <li>1 cup mixed vegetables (70 calories)</li>
              <li>1 small orange (100 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Snack (100 calories)</strong>:
            <ul>
              <li>1 medium carrot (25 calories)</li>
              <li>2 tablespoons hummus (75 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Dinner (500 calories)</strong>:
            <ul>
              <li>Grilled salmon (200 calories)</li>
              <li>1 cup quinoa (220 calories)</li>
              <li>1 cup steamed broccoli (50 calories)</li>
              <li>1 small banana (80 calories)</li>
            </ul>
          </li>
        </ol>
        <p class="total">Total calories: 1,400 calories</p>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "Weight Gain",
    message:
      "For weight gain, you need to consume more calories than you burn. Here's a sample meal plan for you:",
    trigger: "Weight Gain points",
  },

  {
    id: "Weight Gain points",
    component: (
      <div class="workout">
        <ol>
          <li>
          <strong>Breakfast (600-800 calories):</strong>
            <ul>
              <li>2-3 eggs (140-210 calories per egg)</li>
              <li>2 slices of whole-grain bread (200 calories)</li>
              <li>1 cup of whole milk (150 calories)</li>
              <li>
                1 cup of oatmeal (150-300 calories depending on added toppings)
              </li>
            </ul>
          </li>
          <li>
          <strong>Mid-Morning Snack (300-400 calories):</strong>
            <ul>
              <li>1 serving of mixed nuts (200-300 calories)</li>
              <li>1 banana (100 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Lunch (700-900 calories):</strong>
            <ul>
              <li>
                6 oz chicken breast (250-350 calories depending on preparation)
              </li>
              <li>1 large sweet potato (150-200 calories)</li>
              <li>2 cups of mixed vegetables (100-150 calories)</li>
              <li>2 tbsp of olive oil (120 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Afternoon Snack (300-400 calories):</strong>
            <ul>
              <li>1 protein shake (200-300 calories)</li>
              <li>1 apple (100 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Dinner (800-1000 calories):</strong>
            <ul>
              <li>8 oz salmon (400-500 calories depending on preparation)</li>
              <li>2 cups of brown rice (300-400 calories)</li>
              <li>2 cups of mixed vegetables (100-150 calories)</li>
              <li>2 tbsp of olive oil (120 calories)</li>
            </ul>
          </li>
          <li>
          <strong>Evening Snack (300-400 calories):</strong>
            <ul>
              <li>1 serving of Greek yogurt (150-200 calories)</li>
              <li>1 serving of mixed berries (100-150 calories)</li>
              <li>1 serving of granola (100 calories)</li>
            </ul>
          </li>
        </ol>
      </div>
    ),
    trigger: "Continue message",
  },

  {
    id: "Equipments Buying",
    message: "Here are some of Equipments that we sell:",
    trigger: "Equipments list",
  },

  {
    id: "Equipments list",
    component: (
      <div class="workout">
        <ol>
          <li>Cardio machines (treadmills, exercise bikes, ellipticals)</li>
          <li>
            Strength training equipment (dumbbells, barbells, weight machines)
          </li>
          <li>Yoga and Pilates equipment (mats, blocks, straps)</li>
        </ol>
      </div>
    ),
    trigger:"Continue message",
  },
  {
    id: "Customer Support",
    message: "Angular issue",
    end: true,
  },
];

function App() {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(!reload);
  };

  const CustomHeader = () => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        background: "black",
        color: "white",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <h3 style={{ marginRight: "auto" }}>Fitness App Chatbot</h3>
      {/* <Button
        style={{ color: "black", background: "white" }}
        onClick={handleReload}
      >
        <FontAwesomeIcon icon={faRedoAlt} /> */}
      {/* </Button> */}
      <FontAwesomeIcon icon={faRedoAlt} className="reload-icon" onClick={handleReload} />
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <ChatBot steps={bot_messages} />; */}
      <ChatBot
        headerComponent={<CustomHeader />}
        steps={bot_messages}
        key={reload}
        // botAvatar={"bot.png"}
      />
    </ThemeProvider>
  );
}

export default App;
