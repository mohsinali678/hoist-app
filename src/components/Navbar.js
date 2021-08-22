import React from "react";
import Header from "../components/Header.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navBar">
        <Link id="link" to="/">
          <Header />
        </Link>
        <Link id="link" to="/new-user-form">
          Enter Your Health Details
        </Link>

        <Link id="link" to="/dashboard">
          Dashboard
        </Link>

        <Link id="link">Meal Log</Link>

        <Link id="link">Custom Trackers</Link>

        <Link id="link">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Navbar;
