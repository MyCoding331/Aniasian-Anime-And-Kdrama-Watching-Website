import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer"
import ANIME_URL from "../../Helper/animeApi";
import {RiPlayMiniFill} from "react-icons/ri"
import InfiniteScroll from "react-infinite-scroll-component";
import TLoader from "../../components/TLoader/TLoader";
import AnimeNav from "../../components/Navigation/AnimeNav"
import ImageComponent from "../../components/Image/ImageComponent"
import Loader from "../Loader/Loader";
const Movies = () => {
  
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(popular.length / pageCount) + 1;
  useEffect(() => {
    popularDrama();
  }, []);

  async function popularDrama() {
  
    let res = await axios.get(
      `${ANIME_URL}api/movies/${pageNo}`
    );
    setLoading(false);
    let data = res.data.results
    const merge = [...popular, ...data];
    setPopular(merge);
   
    document.title = "Anime-Movies - Anisian";
  }
  const fetchMoreData = () => {
    popularDrama();
  };
  return (
    <>

    <AnimeNav/>
      {loading && <Loader/>}
      {!loading && (
        <>

        <InfiniteScroll
          dataLength={popular.length}
          next={fetchMoreData}
          hasMore={true}
          loader={
           <TLoader/>
          }
          scrollableTarget="scrollableDiv"
          scrollThreshold="200px"
        >
        <div className="
        home">
          <div className="heading">
          <h1>Anime <span>Movies</span></h1>
          </div>
          <div className="drama-container">
            {popular.map((item, i) => (
              <div className="card" key={item.id}>
                <Link to={"/anime-detail/" + item.id}>
                  <div className="image-container">

                  <ImageComponent  src={item.image} title={item.title} />
                  <div className="play-icon">

                  <RiPlayMiniFill/>
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

export default Movies;
