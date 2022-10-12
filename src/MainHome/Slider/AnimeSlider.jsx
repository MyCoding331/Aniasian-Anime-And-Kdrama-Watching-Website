import React, { useEffect, useState } from "react";
import "./Slider.scss";
import axios from "axios";
import { RiPlayMiniFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import ANIME_URL from "../../Helper/animeApi";
import ImageComponent from "../../components/Image/ImageComponent";
import TLoader from "../../components/TLoader/TLoader";
const AnimeSlider = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Anime();
    setLoading(true);
  }, []);

  async function Anime() {
    let res = await axios.get(`${ANIME_URL}api/recentlyadded/1`);

    let data = res.data.results;
    setLoading(false);
    setAnime(data);
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>
            <Link to={"/anime/home"}>
              Ani
              <span>me</span>
            </Link>
          </h1>
          <span>
            <Link to={"/anime/home"}>View All</Link>
          </span>
        </div>

        <div className="drama-container">
        {loading && <TLoader/>}
      {!loading && (
        <>


          {anime.map((item, i) => (
            <>
              <div className="card" key={item.id}>
                <Link to={"/anime-detail/" + item.id}>
                  <div className="image-container">
                    <ImageComponent src={item.image} title={item.title} />
                    <div className="play-icon">
                      <RiPlayMiniFill />
                    </div>
                  </div>
                  <p>
                    {item.title} <span>-EP{item.episodenumber}</span>
                  </p>

                  {/* <span>{item.time}</span> */}
                </Link>
              </div>
            </>
          ))}
           </>
      )}
        </div>
      </div>
    </>
  );
};

export default AnimeSlider;
