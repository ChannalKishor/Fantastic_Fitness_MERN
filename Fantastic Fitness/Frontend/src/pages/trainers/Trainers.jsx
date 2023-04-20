import React from "react";
import Header from "../../components/Header";
import HeaderImage from "../../Images/header_bg_5.jpg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer";
import "./trainers.css";
import Navbar from "../../components/Navbar.jsx";

const Trainers = () => {
	return (
		<>
		<Navbar/>
			<Header image={HeaderImage} title="Our Trainers">
				We have a myriad of trainers specializing in various aspects such as Strength Training, Zumba, Calisthenics, etc.
			</Header>
			<section className="trainers section">
				<div className="containerK trainers__container">
					{trainers.map(({ id, image, name, job, socials }) => {
						return (
							<Trainer
								key={id}
								image={image}
								name={name}
								job={job}
								socials={[
									{ icon: <BsInstagram />, link: socials[0] },
									{ icon: <AiOutlineTwitter />, link: socials[1] },
									{ icon: <FaFacebookF />, link: socials[2] },
									{ icon: <FaLinkedinIn />, link: socials[3] },
								]}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Trainers;
