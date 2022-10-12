import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ANIME_URL from "../../Helper/animeApi";
import { RiPlayMiniFill } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";

import "../Home/Home.scss";
import AnimeNav from "../../components/Navigation/AnimeNav";
import ImageComponent from "../../components/Image/ImageComponent";
import TLoader from "../../components/TLoader/TLoader";
import Loader from "../Loader/Loader";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(popular.length / pageCount) + 1;
  useEffect(() => {
    popularDrama();
  }, []);

  async function popularDrama() {
    let res = await axios.get(`${ANIME_URL}api/recentlyadded/${pageNo}`);
    setLoading(false);
    let data = res.data.results;
    const merge = [...popular, ...data];
    setPopular(merge);

    document.title = "Anime Home  -  Anisian ";
  }
  const fetchMoreData = () => {
    popularDrama();
  };
  return (
    <>
      <AnimeNav />
      {loading && <Loader />}
      {!loading && (
        <>
          <InfiniteScroll
            dataLength={popular.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<TLoader />}
            scrollableTarget="scrollableDiv"
            scrollThreshold="200px"
          >
            <div
              className="
        home"
            >
              <div className="heading">
                <h1>
                  Recently <span>Added</span>
                </h1>
              </div>
              <div className="drama-container">
                {popular.map((item, i) => (
                  <div
                    className="card  "
                    itemscope
                    itemtype="https://schema.org/Movie"
                    key={item.id}
                  >
                    <Link to={"/anime-detail/" + item.id}>
                      <div className="image-container" itemprop="image">
                        <ImageComponent src={item.image} title={item.title} />
                        <div className="play-icon">
                          <RiPlayMiniFill />
                        </div>
                      </div>
                      <p itemprop="name">
                        {item.title} <span>EP-{item.episodenumber}</span>
                      </p>

                      {/* <span>{item.time}</span> */}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
