import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../assets/logo.svg";
import Open from "../assets/icon-open.svg";
import Close from "../assets/icon-close.svg";

export default function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div className="header-container">
      <Link to="/">
        <img className="logo" src={Logo} alt="coffeeroasters logo" />
      </Link>
      <div className="nav">
        <Link to="#" className="menu-bars">
          {sidebar ? (
            <img src={Close} alt="coffeeroasters logo" onClick={showSidebar} />
          ) : (
            <img src={Open} alt="coffeeroasters logo" onClick={showSidebar} />
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
      </div>
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
  );
}
