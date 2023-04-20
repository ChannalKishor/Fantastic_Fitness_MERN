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


function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/dietplan" element={<Dietplan />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/loginpage" element={<LoginPage />} />
         
          
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;

