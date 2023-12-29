import React from "react";
import "./Navbar.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className="nav__logo logo">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="nav__menu_wrapper">
          <ul className="nav__menu">
            <li>
              <Link to="/profile/:id">Anna</Link>
            </li>
            <li>
              <Link to="/create">Create Post</Link>
            </li>
            <li>
              <Link to="/authors">Author</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
          <button className="nav__toggle-btn">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
