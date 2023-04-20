import { Link, useLocation } from "react-router-dom"

import { useState } from "react"
import Sidebar from "./Sidebar"

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons"
import "../styles/css/_navbar.css"
import "../styles/css/index.css"
import "../styles/css/size.css"

export default function Navbar(){
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Home",
            path: "/plans",
            icon: faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Diet Plan",
            path: "/dietplan",
            icon: faCog
        },
        {
            name: "Submit Recipes",
            path: "/loginpage",
            icon: faCog

        },
        {
            name: "Exercise",
            path: "/land",
            icon: faCog
        },
        {
            name: "Settings",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="Navbar container">
                <Link to="/" className="logo">F<span>oo</span>diesFit</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}