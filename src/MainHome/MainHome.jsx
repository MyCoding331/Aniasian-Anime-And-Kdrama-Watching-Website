import React from "react";
import "../Pages/Home/Home.scss";
import MainNav from "../components/Navigation/MainNav";
import "./MainHome.scss";
import AsianSlider from "./Slider/AsianSlider";
import AnimeSlider from "./Slider/AnimeSlider";
import Footer from "../components/Footer/Footer"


const MainHome = () => {
  document.title = " Anisian - Anime & Asian drama Watching Website";
  return (
    <>
      <MainNav />
      {/* <EnglishHome/> */}

      <div className="main-container">
        <div className="anime-container">
          <AnimeSlider />
        </div>
        <div className="asian-container">
          <AsianSlider />
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default MainHome;
