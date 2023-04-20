var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mongoose = require("mongoose");
var cors = require('cors');

var port = process.env.PORT || 8080;

mongoose.connect("mongodb://127.0.0.1:27017/Finalproject", { useNewUrlParser: true });
app.use(cors());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("X-HTTP-Method-Override"));
app.use(express.static(__dirname + "/public"));
require("./app/routes")(app);
try{
    app.listen(port);
    console.log(`App started at port ${port}`);
}
catch(err){
    console.log('Port in already in use');
}
/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
    console.log('database connection error');
    console.log(err)
}); // end mongoose connection error


//sandhya
const workoutsRouter = require('./routes/workouts');
const usersRouter = require('./routes/users');

app.use('/workouts', workoutsRouter);
app.use('/userType', usersRouter);


//chinmay
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


//karthik
//login shcema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

//register schema
const memberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

// const User = mongoose.model("User", userSchema);
const Member = mongoose.model("Member", memberSchema);

//register API
app.post("/members/create", async (req, res) => {
  try {
    // Create new member object from request body
    const newMember = new Member(req.body);

    // Save new member object to database
    await newMember.save();

    // Return success message to client
    res.status(201).send("Member registration successful");
  } catch (error) {
    // Return error message to client
    res.status(500).send(error.message);
  }
});

// Get Users API
app.get("/members/getAll", async (req, res) => {
  try {
    // Find all members in the database
    const members = await Member.find();

    // Return the members to the client
    res.json(members);
  } catch (error) {
    // Return error message to client
    res.status(500).send(error.message);
  }
});

//Login API
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await Member.findOne({ email });

    if (!user) {
      console.log("User not found");
      //   return res.status(404).json({ message: "User not found" });
      return res.send(false);
    }

    let match = 0;
    if (password == user.password) {
      match = 1;
    } else {
      match = 0;
    }
    console.log(password);
    console.log(user.password);
    if (!match) {
      console.log("Invalid");
      //   return res.status(401).json({ message: "Invalid credentials" });
      return res.send(false);
    }

    // const token = jwt.sign({ userId: user._id }, "mysecretkey");

    res.send(true);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});



mongoose.connection.on('open', function (err) {
    if (err) {
        console.log("database error");
        console.log(err);
    } else {
        console.log("database connection open success");
    }
}); // end mongoose connection open handler

exports = module.exports = app;
