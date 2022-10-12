import React from "react";
import "./error.scss";
import Footer from "../../components/Footer/Footer"
import MainNav from "../../components/Navigation/MainNav";
import MainSearch from "../../components/Search/MainSearch";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
    <MainNav/>
      <div className="error-page">
        <div className="bold-text">
          <h1>4<span>0</span>4</h1>
        </div>
        <div className="notice-section">
          <h3>THE PAGE YOU REQUESTED COULD NOT FOUND</h3>
        </div>
        <div className="error-btn">
          <Link to={"/home"}>
          <button>
            <h4>

            Home Page
            </h4>
          </button>
          </Link>
         

        </div>

     
</div>
      <Footer/>
    </>
  );
};

export default Error;
