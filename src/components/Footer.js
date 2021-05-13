import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-white.svg";
import "./Footer.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="logo-links-container">
        <Link to="/">
          <img className="footer-logo" src={Logo} alt="coffeeroasters logo" />
        </Link>
        <ul className="links-container">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/create" className="link">
              Create Your Plan
            </Link>
          </li>
        </ul>
      </div>
      <ul className="socials-container">
        <li className="social">
          <a className="social" href="https://facebook.com">
            <AiFillFacebook />
          </a>
        </li>
        <li className="social">
          <a className="social" href="https://twitter.com">
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social">
          <a className="social" href="https://instagram.com">
            <AiOutlineInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}
