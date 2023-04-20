import React from "react";
import "./Home.css";
import MainHeader from "../../components/MainHeader";
import Program from "../../components/Program";
import Values from "../../components/Values";
import FAQs from "../../components/FAQs";
import Testimonial from "../../components/Testimonial";
// import Footer from "../../components/Footer";
import NavbarK from "../../components/Navbar.jsx"

const Home = () => {
	return (
		<>
		<NavbarK/>
			<MainHeader />
			<Program />
			<Values />
			<FAQs />
			<Testimonial />
			{/* <Footer /> comment this out so footer wount be double */}
		</>
	);
};

export default Home;
