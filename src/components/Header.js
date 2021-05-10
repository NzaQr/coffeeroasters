import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.svg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={Logo} alt="myteam logo" />
      </Link>
      <div className="nav">
        <Link to="#" className="menu-bars">
          {sidebar ? (
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          ) : (
            <FaIcons.FaBars onClick={showSidebar} />
          )}
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/about">About Us</Link>
            </li>
            <li className="item">
              <Link to="/create">Create Your Plan</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-item-container">
          <Link className="nav-item" to="/">
            HOME
          </Link>
          <Link className="nav-item" to="/about">
            ABOUT US
          </Link>
          <Link className="nav-item" to="/contact">
            CREATE YOUR PLAN
          </Link>
        </div>
      </div>
    </div>
  );
}
