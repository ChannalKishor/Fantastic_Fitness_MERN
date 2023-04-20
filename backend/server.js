// // Importing required libraries
// const express = require('express');
// const mongoose = require('mongoose');

// // Connecting to MongoDB database
// mongoose.connect('mongodb://localhost:27017/workout-plans', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB connected successfully'))
// .catch(err => console.log('MongoDB connection error: ', err));

// // Defining the schema for the workout plan
// const workoutPlanSchema = new mongoose.Schema({
//   planName: String,
//   description: String,
//   startDate: Date,
//   endDate: Date,
//   workouts: [
//     {
//       day: Number,
//       exercises: [
//         {
//           name: String,
//           sets: Number,
//           reps: String,
//           rest: String
//         }
//       ]
//     }
//   ]
// });

// // Creating a model for the workout plan
// const WorkoutPlan = mongoose.model('WorkoutPlan', workoutPlanSchema);

// // Creating an Express app
// const app = express();

// // Defining a GET endpoint to fetch workout plans
// app.get('/workout-plans', async (req, res) => {
//   try {
//     // Fetching all workout plans from the database
//     const workoutPlans = await WorkoutPlan.find();

//     // Filtering the workout plans based on the user's request
//     const filteredWorkoutPlans = workoutPlans.filter((plan) => {
//       return (plan.planName.includes(req.query.planName) && plan.startDate >= new Date(req.query.startDate) && plan.endDate <= new Date(req.query.endDate));
//     });

//     // Sending the filtered workout plans as a JSON response
//     res.json(filteredWorkoutPlans);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// // Starting the server
// app.listen(3001, () => {
//   console.log('Server started on port 3001');
// });

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect("mongodb://localhost:27017/finalworkout");

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');

app.use('/workouts', workoutsRouter);
app.use('/users', usersRouter);

// define the ticket schema
const ticketSchema = new mongoose.Schema({
    name: String,
    email: String,
    issue: String,
    date: { type: Date, default: Date.now },
  });
  
  // define the ticket model
  const Ticket = mongoose.model("Ticket", ticketSchema);
  

// define the POST API endpoint for creating new tickets
app.post("/api/tickets", (req, res) => {
    const { name, email, issue } = req.body;
  
    // create a new ticket using the Ticket model
    const newTicket = new Ticket({ name, email, issue });
  
    // save the new ticket to the database
    newTicket
      .save()
      .then((savedTicket) => {
        console.log("Ticket created:", savedTicket);
        res.json(savedTicket);
      })
      .catch((err) => {
        console.error("Failed to create ticket:", err);
        res.status(500).json({ error: "Failed to create ticket" });
      });
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
