import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import ANIME_URL from "../../Helper/animeApi";
import "./Watching.scss";

import Footer from "../../components/Footer/Footer"
import AnimeNav from "../../components/Navigation/AnimeNav";

import AnimeDetail from "../Detail/AnimeDetail";

import AnimeRecommend from "../Recommend/AnimeRecommend";
const AnimeWatch = ({ Id, title, image, status }) => {
  let id = useParams().id;
  let EpisodeNo = useParams().episodeNo;
  const [watching, setWatching] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WatchingDrama();
  }, [id, EpisodeNo]);

  async function WatchingDrama() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let res = await axios.get(`${ANIME_URL}api/watching/${id}/${EpisodeNo}`);
    setLoading(false);
    setWatching(res.data.results);

    // document.title = res.data.link;
  }
  document.title = watching.map((doc,i ) => (

    `${doc.title} - Anisian `
  ))

  return (
    <>
    <div className="A-watching">

      <AnimeNav />
      {loading && <Loader />}
      {!loading && (
        <>
          <div className="watching">
            <div className="left-container">
              <>
                <div className="watching-container">
                  {watching.map((item, i) => (
                    <>
                      <div className="wrapper" key={item.frame}>
                        <div className="heading">
                          <p>
                            <span>watching</span>/{item.title}
                          </p>
                        </div>
                        <div className="card">
                          <h1>{item.title}</h1>
                          <iframe
                            id="iframe-container"
                            src={item.link}
                            frameBorder="0"
                            allowFullScreen={true}
                            marginWidth="0"
                            marginHeight="0"
                            scrolling="no"
                            loading="lazy"
                          ></iframe>
                        </div>
                      </div>
                    </>
                  ))}
                  <AnimeDetail />
                </div>
              </>
            </div>

            <div className="right-container">
              <AnimeRecommend />
            </div>
          </div>
          {/* <Footer/> */}

        </>
      )}
    </div>
    </>
  );
};

export default AnimeWatch;
