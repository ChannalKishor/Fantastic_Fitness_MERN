import React from "react";
import Image from "../Images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";

const Values = () => {
	return (
		<section className="values section">
			<div className="containerK values__container">
				<div className="values__left">
					<div className="values__image">
						<img src={Image} alt="values Image" />
					</div>
				</div>
				<div className="values__right">
					<SectionHead icon={<GiCutDiamond />} title="Values" />
					<p>
						Our values towards customer satisfaction culminates from the highest standards maintained by Fantastic Fitness.
					</p>
					<div className="values__wrapper">
						{values.map(({ id, icon, title, desc }) => {
							return (
								<Card className="values__value" key={id}>
									<span>{icon}</span>
									<h4>{title}</h4>
									<small>{desc}</small>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Values;
