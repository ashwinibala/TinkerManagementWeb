import React from "react";
import { Link } from "react-router-dom";
import "./shared.css";

export const Header = () => {
  return (
    <div className="header-nav">
        <div className="header">
            <h1>Tinker Management System</h1>
        </div>
        <div className="nav">
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/clientRegistration"> Add New Tinker </Link>
            </div>
      </div>
    </div>
    
  );
};
