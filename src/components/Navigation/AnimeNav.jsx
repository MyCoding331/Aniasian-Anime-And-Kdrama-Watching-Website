import React from "react";
import { NavLink } from "react-router-dom";





import "./Nav.scss";

import MainNav from "./MainNav";

const AsianNav = () => {
  
  



  return (
    <>
    <MainNav/>
      <nav className="nav-links-wrapper" >
        
        <ul className="nav-links">
          <li>
            <NavLink to="/anime/home">
              <h3>recently added sub</h3>
            </NavLink>
          </li>
         
          <li>
            <NavLink to="/anime/movies">
              <h3>movies</h3>
            </NavLink>
          </li>
        
          <li>
            <NavLink to="/anime/popular">
              <h3> popular</h3>
            </NavLink>
          </li>
          
        </ul>
       
      </nav>
    </>
  );
};

export default AsianNav;
