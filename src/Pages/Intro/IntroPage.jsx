import React, { useState, useEffect } from "react";
import "./IntroPage.scss";
import { Link } from "react-router-dom";
import Search from "../../components/Search/MainSearch";
import Footer from "../../components/Footer/Footer";
import Logo from "../../assets/Logo.png";
import Loader from "../Loader/Loader";
const IntroPage = () => {
  const [loading, setLoading] = useState(true);
  document.title = " Anisian - Anime & Asian drama Watching Website";
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="intro-page">
            <div className="top-background">
              <div className="top-wrapper">
                <div className="heading logo">
                  <img src={Logo} alt="LOGO" />
                </div>
                <div className="notice">
                  <h1>
                    anisian.fun - Just a better place for watch anime & asian
                    dramas online free!
                  </h1>
                </div>
                <div className="search-consoule">
                  <Search />
                </div>
              </div>
              <span className="home-btn">
                <Link to="/home">
                  <button>
                    <h3>visit Fullsite</h3>
                  </button>
                </Link>
              </span>
            </div>
            <div className="addthis_inline_share_toolbox"></div>
            <div className="site-text">
              <h1>Watch Anime & Asian drama Online</h1>
              <p>
                ANISIAN is the safest site to watch English Subbed dramas online
                for free. This is the best place to enjoy your favorite shows as
                we provide HD quality, fast loading speed, optimized UI and UX,
                excellent customer service, and many more. With a high video
                quality, your drama world will become more real and lively than
                ever. No matter what you are looking for, you are highly likely
                to find it here on ANISIAN.fun
              </p>
              <h1>Free to Watch Anime & Asian dramas Online</h1>
              <p>
                At ANISIAN, you can watch and download thousands of titles with
                subs from safe sources such as mp4upload, vidstream, streamtape,
                or mycloud. You can check out the "Favorite drams" section for
                the most popular dramas shows worldwide. There are hundreds of
                free asian darmas sites but most of them provide poor-quality
                copies and carry risks of viruses and malware. Choose ANISIAN
                for a safe and excellent streaming experience with our HD
                quality, fast load times, and the ad-free feature.
              </p>
              <h1>Is it Illegal to Use ANISIAN?</h1>
              <p>
                Watching anime on ANISIAN is considered legal in the United
                States. According to copyright attorneys, watching asian dramas
                online at free sites does not violate the copyright laws.
                However, if you are caught downloading or sharing pirated
                content, you might be subject to criminal or civil charges. For
                your safety, watch your asian dramas of interest online only or
                turn on a VPN to stay anonymous if you prefer downloading the
                videos.
              </p>
            </div>
            <span className="home-btn">
              <Link to="/home">
                <button>
                  <h3>visit ANISIAN</h3>
                </button>
              </Link>
            </span>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default IntroPage;
