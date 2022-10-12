import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.scss";
import MainNav from "./MainNav";

const Nav = () => {
  

  return (
    <>
    <MainNav/>
      <nav className="nav-links-wrapper">
        
       
       
        <ul className="nav-links">
          <li>
            <NavLink to="/asian/home">
              <h3>recently added sub</h3>
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/asian/movies">
              <h3>movies</h3>
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/asian/popular">
              <h3> popular</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/asian/kshow">
              <h3>kshow</h3>
            </NavLink>
          </li>
        </ul>
        
      </nav>
    </>
  );
};

export default Nav;
