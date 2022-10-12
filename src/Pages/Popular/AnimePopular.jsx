import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../../Helper/animeApi";
import Footer from "../../components/Footer/Footer"
import InfiniteScroll from "react-infinite-scroll-component";
import TLoader from "../../components/TLoader/TLoader";
import { RiPlayMiniFill } from "react-icons/ri";
import AnimeNav from "../../components/Navigation/AnimeNav";
import ImageComponent from "../../components/Image/ImageComponent";
import Loader from "../Loader/Loader";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(popular.length / pageCount) + 1;
  useEffect(() => {
    popularDrama();
  }, []);

  async function popularDrama() {
    let res = await axios.get(`${API_URL}api/popular/${pageNo}`);
    setLoading(false);
    let data = res.data.results;
    const merge = [...popular, ...data];
    setPopular(merge);
    console.log(data);

    document.title = "Popular Anime -  Anisian";
  }
  const fetchMoreData = () => {
    popularDrama();
  };
  return (
    <>
      <AnimeNav />
      {loading && <Loader/>}
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
            <div className="home">
              <div className="heading">
                <h1>
                  Popular <span>Drama</span>
                </h1>
              </div>
              <div className="drama-container">
                {popular.map((item, i) => (
                  <div className="card" key={item.id}>
                    <Link to={"/anime-detail/" + item.id}>
                      <div className="image-container">
                        <ImageComponent src={item.image} title={item.title} />
                        <div className="play-icon">
                          <RiPlayMiniFill />
                        </div>
                      </div>
                      <p>{item.title}</p>
                    </Link>
                  
                  </div>
                ))}
              </div>
            </div>
          </InfiniteScroll>
          <Footer/>
        </>
      )}
    </>
  );
};

export default Popular;
