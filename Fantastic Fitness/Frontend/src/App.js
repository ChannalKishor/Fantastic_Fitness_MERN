import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Dietplan from "./pages/Dietplan";
import LoginPage from "./pages/LoginPage";

//Sandhya
import Home1 from './pages/Home/Home'
import Exercise from './pages/Exercise/Exercise'
import Abs from './components/Abs/Abs';
import WorkoutPlans from './components/WorkoutPlans/WorkoutPlans';
import WorkoutEdit from "./components/WorkoutEdit/WorkoutEdit";
import WorkoutCreate from "./components/WorkoutCreate/WorkoutCreate";
import CS from "./components/CreateSection/CreateSection";
import WorkoutList from "./components/WorkoutList/WorkoutList"
import Cardio from './components/Cardio/Cardio';
import Chatbotfeature from './components/Chatbot/Chatbot';


//Karthik
import HomeK from "./pages/Home/Home.jsx";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NavbarK from "./components/Navbar";
import FooterK from "./components/Footer.jsx";
import Login from "./pages/login/login";
import UserRegistation from "./pages/login/Register";
import Homelogin from "./pages/login/Home";
import UserTable from "./pages/Admin/admin";



function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="container main">
        <Routes>
          <Route path="/plans" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/dietplan" element={<Dietplan />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/loginpage" element={<LoginPage />} />
          
          <Route path="/land" element={<Home1/>} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/abs" element={<Abs />} />
          <Route path="/3dayplan" element={<WorkoutPlans />} />
          <Route path="/edit/:id" element={<WorkoutEdit />} />
          <Route path="/create" element={<WorkoutCreate />} />
          <Route path="/user" element={<CS />} />
          <Route path="/list" element={<WorkoutList />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/chatbot" element={<Chatbotfeature />} />

          <Route index element={<HomeK />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="Aplans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="/home" element={<Homelogin />} />
        <Route path="/register" element={<UserRegistation />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<UserTable />} />
        </Routes>
      </div>
      <FooterK />
    </Router>
  )
}

export default App;

