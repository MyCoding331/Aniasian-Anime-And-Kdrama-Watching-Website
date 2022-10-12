import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Movies.scss";
import API_URL from "../../Helper/base";
import { RiPlayMiniFill } from "react-icons/ri";
import InfiniteScroll from "react-infinite-scroll-component";
import TLoader from "../../components/TLoader/TLoader";
import Loader from "../Loader/Loader";

import Footer from "../../components/Footer/Footer"
import AsianNav from "../../components/Navigation/AsianNav";
import ImageComponent from "../../components/Image/ImageComponent";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(movies.length / pageCount) + 1;
  useEffect(() => {
    ANISIAN();
  }, []);

  async function ANISIAN() {
    let res = await axios.get(`${API_URL}api/movies/page=${pageNo}`);
    setLoading(false);
    let data = res.data;
    const merge = [...movies, ...data];
    setMovies(merge);

    document.title = "Drama-Movies - Anisian";
  }
  const fetchMoreData = () => {
    ANISIAN();
  };
  return (
    <>
  
    <AsianNav/>
      {loading && <Loader />}
      {!loading && (
        <>
          <InfiniteScroll
            dataLength={movies.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              <TLoader/>
            }
            scrollableTarget="scrollableDiv"
            scrollThreshold="200px"
          >
            <div className="movies-drama">
              <div className="heading">
                <h1>
                  <span>Drama</span> Movies
                </h1>
              </div>
              <div className="movies-container">
                {movies.map((item, i) => (
                  <div className="card" key={item.id}>
                    <Link to={"/asian-detail/" + item.id}>
                      <div className="image-container">
                      <ImageComponent  src={item.image} title={item.title} />
                        <div className="play-icon">
                          <RiPlayMiniFill />
                        </div>
                      </div>
                      <p>
                        {item.title}-{item.episodes}
                      </p>

                      <span>{item.time}</span>
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

export default Movies;
