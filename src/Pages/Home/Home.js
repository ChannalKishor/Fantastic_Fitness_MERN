import React from 'react'
import { Navbar } from 'react-bootstrap';
import "../Home/Home.css"
import Dashboard from '../../Components/Dashboard/Dashboad';
import logo from "../../Images/log.png";
import Features from '../../Components/Features/Features'
import Footer from '../../Components/Footer/Footer';
import ContactUs from '../../Components/ContactUS/ContactUs';

const Home = () => {
  return (
    <div>
        <header>
             <Navbar className='nav'>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Exercises</li>
                <img src={logo} width="50px" height="50px" style={{paddingRight:"2rem", marginTop:"-1rem"}} alt=''/>
                <li>Plans</li>
                <li>Contact Us</li>
                <li>Profile</li>
            </ul>
            <h4 style={{marginRight: "-5rem"}}>Welcome User !</h4>
        </Navbar>
        </header>
       
        <section>
            <div className='hero'>
                <h2>AERTYUIOKJHGDSRTYUIOLNBVCDFGHJKL</h2>
                <p>loremfhgvshhjdigbdsn:Lkhknk;lhubknlkhbnkldhfbnldld </p>
                <button className='heroBtn'>Get Started</button>
            </div>
            
        </section>
        <Dashboard/>
        <section>
            <Features/>
        </section>
        <br/>
        <section>
            <ContactUs/>
        </section>
        <br/>
        <section>
            <Footer/>
        </section>
    </div>
  )
}

export default Home