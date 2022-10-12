import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import API_URL from "../../Helper/base";
import { RiPlayMiniFill } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";

import TLoader from "../../components/TLoader/TLoader";
import Loader from "../Loader/Loader";

import Footer from "../../components/Footer/Footer";
import AsianNav from "../../components/Navigation/AsianNav";
import ImageComponent from "../../components/Image/ImageComponent";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(popular.length / pageCount) + 1;
  useEffect(() => {
    ANISIAN();
  }, []);

  async function ANISIAN() {
    let res = await axios.get(`${API_URL}api/recentlyadded/page=${pageNo}`);
    setLoading(false);
    let data = res.data;
    const merge = [...popular, ...data];
    setPopular(merge);

    document.title = " Asian Home  - Animsia";
  }
  const fetchMoreData = () => {
    ANISIAN();
  };
  return (
    <>
      <AsianNav />
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
                  <div className="card" key={item.id} itemscope itemtype ="https://schema.org/Movie">
                    <Link to={"/asian-detail/" + item.id}>
                      <div className="image-container" itemprop="image">
                        <ImageComponent src={item.image} title={item.title} />
                        <div className="play-icon">
                          <RiPlayMiniFill />
                        </div>
                      </div>
                      <p itemprop="name">
                        {item.title}-{item.episodes}
                      </p>

                      <span itemprop="time">{item.time}</span>
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
