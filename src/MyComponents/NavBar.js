import React from "react";
import '../css/nav-bar.css'
import { BrowserRouter as Router,Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div className="container">
      <div className="logo">LOGO</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/Blogs">Blogs</Link>
        <Link to="/Blogs">GalleryLink</Link>
      </div>
    </div>
  );
};
