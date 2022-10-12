import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

import AnimeNav from "../../components/Navigation/AnimeNav";
import Footer from "../../components/Footer/Footer"
import API_URL from "../../Helper/base";
import AsianEpisodes from "../Watching/Episodes/Asian/AsianEpisodes";

const AsianDetail = () => {
  let id = useParams().id;
  const [watchingEpi, setWatchingEpi] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WatchingDrama();
  }, [id]);

  async function WatchingDrama() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let res = await axios.get(`${API_URL}api/drama-detail/${id}`);
    setLoading(false);
    setWatchingEpi(res.data);

   
  }
  document.title = watchingEpi.map((doc,i ) => (

    `${doc.title} - Anisian `
  ))

  return (
    <>
      <AnimeNav />
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="detail">
            <div className="left-container">
              <div className="detail-container">
                {watchingEpi.map((item, i) => (
                  <>
                    {/* style={{backgroundImage:`url(${item.image})`}} */}
                    <div className="wrapper" key={i}>
                      <div
                        className="card"
                        itemscope
                        itemtype="https://schema.org/Movie"
                        key={item.id}
                        style={{
                          backgroundImage: `url(${item.image} )`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      >
                        <div className="image-container responsive">
                          <div className="image"itemprop="image">

                          <img src={item.image} alt={item.title} />
                          </div>
                          <div className="watch-btn">
                            <button className="button">
                              <NavLink
                                to={"/asian/drama-watch/" + item.watchlink}
                              >
                                <h2>Watch Now</h2>
                              </NavLink>
                            </button>
                          </div>
                        </div>
                        <div className="information">
                          <h1 itemprop="name">{item.title}</h1>

                          <img
                            src={item.image}
                            alt={item.title}
                            itemprop="image"
                            className="hidden-img"
                          />
                          

                          <p itemprop="discription">
                            <span >Discription : </span>
                            {item.description}
                          </p>
                          {/* <p>
                            <span>Type : </span> {item.type}
                          </p> */}
                          <p itemprop="release-year">
                            <span >ReleaseYear : </span> {item.releaseYear}
                          </p>
                          <p itemprop="genres">
                            <span >Genres : </span>
                            {item.genres}
                          </p>
                          <p itemprop="status">
                            <span >Status : </span>
                            {item.status}
                          </p>
                          {/* <p>
                            <span>TotalEpisodes : </span> {item.totalepisode}
                          </p> */}
                          <p itemprop="country">
                            <span >Country : </span>
                            {item.country}
                          </p>
                          <div className="watch-btn hidden-btn">
                            <button className="button">
                              <NavLink
                                to={"/asian/drama-watch/" + item.watchlink}
                              >
                                <h2>Watch Now</h2>
                              </NavLink>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="episodes-wrapper">
                        <AsianEpisodes
                          Id={item.watchlink}
                          status={item.country}
                          image={item.image}
                          title={item.title}
                        />
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="right-container">{/* <Home /> */}</div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default AsianDetail;
