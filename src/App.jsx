// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/login/login";
import UserRegistation from "./pages/login/Register";
import Homelogin from "./pages/login/Home";
import UserTable from "./pages/Admin/admin";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<NotFound />} />
        <Route path="login" element={<Login />} />
        <Route path="/home" element={<Homelogin />} />
        <Route path="/register" element={<UserRegistation />} />
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<UserTable />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
