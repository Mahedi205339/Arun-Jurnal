import { NavLink } from "react-router-dom";
import {  useState } from "react";
import './navbar.css'

const Navbar = () => {


    // const [menuOpen, setMenuOpen] = useState(false)
    // console.log(menuOpen);.
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

    const navLink = <>
        <li> <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "route-text-bg font-semibold px-3 py-2 rounded-lg" : ""
            }
        >
            Home
        </NavLink>
        </li>
        <li> <NavLink
            to="/cars"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "route-text-bg font-semibold px-3 py-2 rounded-lg" : ""
            }
        >
            Cars
        </NavLink>
        </li>
        <li> <NavLink
            to="/my-bookings"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "route-text-bg  px-3 py-2 rounded-lg" : ""
            }
        >
           My Bookings
        </NavLink>
        </li>
        <li> <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "route-text-bg px-3 py-2 rounded-lg" : ""
            }
        >
            Dashboard
        </NavLink>
        </li>
    </>

    return (
        <div className="mb-4 w-full fixed z-20 backdrop-blur-sm bg-neutral-800 bg-opacity-20 ">
            <nav className="nav  max-w-[1500px] mx-auto px-5 lg:px-8 md:px-7">
                <div className="nav-text">
                    <h3 className=" font-bold text-xl md:text-3xl">Arun Journal</h3>
                </div>
                <ul className={active}>
                    {navLink}
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;