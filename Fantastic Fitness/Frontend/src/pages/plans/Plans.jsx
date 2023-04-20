import React from "react";
import "./plans.css";
import { plans } from "../../data";
import Header from "../../components/Header";
import HeaderImage from "../../Images/header_bg_4.jpg";
import Card from "../../UI/Card";
import Navbar from "../../components/Navbar.jsx";

const Plans = () => {
  return (
    <>
    <Navbar/>
      <Header title="Membership Plans" image={HeaderImage}>
        We provide a range of affordable packages which contain Fantastic
        features!
      </Header>
      <section className="plans section">
        <div className="containerK plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$ ${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available, index }) => {
                  return (
                    <p key={index} className={available ? "" : "disabled"}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg" style={{textAlign:"center"}}>Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
