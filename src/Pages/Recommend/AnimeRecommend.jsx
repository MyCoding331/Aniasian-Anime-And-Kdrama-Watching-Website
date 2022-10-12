import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Recommend.scss";
import ImageComponent from '../../components/Image/ImageComponent'

import ANIME_URL from "../../Helper/animeApi";


const AnimeRecommend = () => {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ANISIAN();
  }, []);

  async function ANISIAN() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let res = await axios.get(`${ANIME_URL}api/recentlyadded/1`);
    setLoading(false);

    setRecent(res.data.results);
  }
  return (
    <>
      {!loading && (
        <div className="recommend">
          <div className="heading">
            <h1>
              Latest <span>Anime</span>
            </h1>
          </div>
          <div className="recommend-container">
            {recent.map((item, i) => (
              <div className="card" key={item.id}>
                <Link to={"/anime-detail/" + item.id}>
                  <div className="image-container">
                  <ImageComponent  src={item.image} title={item.title} />
                  </div>
                  <p className="title">
                    {item.title} <span>EP-{item.episodenumber}</span>
                  </p>

                  <span>{item.time}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeRecommend;
