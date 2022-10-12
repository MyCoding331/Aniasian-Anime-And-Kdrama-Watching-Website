import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ANIME_URL from "../../Helper/animeApi";
import AnimeNav from "../../components/Navigation/AnimeNav";
import "./AnimeDetail.scss";
import Episodes from "../Watching/Episodes/AnimeEpisodes";
import Footer from "../../components/Footer/Footer";
const AnimeDetail = () => {
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
    let res = await axios.get(`${ANIME_URL}api/details/${id}`);
    setLoading(false);
    setWatchingEpi(res.data.results);
  }
  document.title = watchingEpi.map((doc, i) => `${doc.title} - Anisian `);

  let ID = watchingEpi.map((item, i) =>
    `${item.id}`
      .replaceAll(" ", "-")
      .replaceAll(":", "")
      .replaceAll(".", "")
      .replaceAll(",", "")
      .replaceAll("♡", "")
      .replaceAll("/", "")
      .replaceAll("|", "")
      .replaceAll("%", "")
      .replaceAll("$", "")
      .replaceAll("#", "")
      .replaceAll("@", "")
      .replaceAll("*", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll("[", "")
      .replaceAll("]", "")
      .replaceAll("{", "")
      .replaceAll("}", "")
      .replaceAll("+", "")
      .replaceAll("=", "")
      .replaceAll("&", "")
      .replaceAll("~", "")
      .replaceAll("?", "")
      .replaceAll("_", "")
      .replaceAll("!", "")
  );

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
                    <div className="wrapper">
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
                          <div className="image" itemprop="image">
                            <img src={item.image} alt={item.title} />
                          </div>
                          <div className="watch-btn">
                            <button className="button">
                              <NavLink to={"/anime-watch/" + ID + "/1"}>
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
                            {item.summary}
                          </p>
                          <p itemprop="type">
                            <span >Type : </span> {item.type}
                          </p>
                          <p itemprop="release-year">
                            <span >ReleaseYear : </span>{" "}
                            {item.relased}
                          </p>
                          <p itemprop="genres">
                            <span >Genres : </span>
                            {item.genres}
                          </p>
                          <p itemprop="status">
                            <span >Status : </span>
                            {item.status}
                          </p>
                          <p itemprop="total-episodes">
                            <span >
                              TotalEpisodes :
                            </span>
                            {item.totalepisode}
                          </p>
                          <p itemprop="other-name">
                            <span >OtherName : </span>
                            {item.Othername}
                          </p>
                          <div className="watch-btn hidden-btn">
                            <button className="button">
                              <NavLink to={"/anime-watch/" + ID + "/1"}>
                                <h2>Watch Now</h2>
                              </NavLink>
                            </button>
                          </div>
                        </div>
                      </div>

                      <Episodes
                        title={item.title}
                        Id={ID}
                        image={item.image}
                        status={item.type}
                      />
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

export default AnimeDetail;
