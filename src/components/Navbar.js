import React from "react";
import Logo from '../assets/logo_navbar.png';
import {Link} from "react-router-dom";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import './NavbarStyle.css'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <Link to="/"> <img src={Logo} className="icon" alt="Logo"/></Link>
            <nav ref={navRef}>
                <Link to="/" onClick={showNavbar}>Home</Link>
                <Link to="/checker" onClick={showNavbar}>Checker</Link>
                <Link to="/about" onClick={showNavbar}>About</Link>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;
