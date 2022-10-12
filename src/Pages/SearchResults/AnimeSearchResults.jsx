import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ImageComponent from '../../components/Image/ImageComponent'
import Loader from "../Loader/Loader";
import AnimeNav from "../../components/Navigation/AnimeNav"
import "./SearchResults.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import ANIME_URL from "../../Helper/animeApi";
import TLoader from "../../components/TLoader/TLoader";


function AnimeSearchResults() {
  
  let urlParams = useParams().word;
  urlParams = urlParams.replace(":", "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
 
  


  const pageCount = 50;
  const pageNo = Math.ceil(results.length / pageCount) + 1;
  useEffect(() => {
    getResults();
    
   
  }, [urlParams]);



  

  const  getResults = async()  => {
    let res = await axios.get(`${ANIME_URL}api/search/${urlParams}/${pageNo}`);
    setLoading(false);
    let data = res.data.results;
    const merge = [...results, ...data];
    setResults(merge);
    
    // document.title = urlParams + " - ANISIAN";
    
  }
  const fetchMoreData = () => {
    getResults();

  };

  return (
    <>
    <div className="Search">

      <AnimeNav />
      <div className="serarch-result-heading">
        <h1>
          Anime <span>Results :</span>
        </h1>
      </div>
      

      {loading &&  <Loader />}
      {!loading && (
        <>
        <InfiniteScroll
            dataLength={results}
            next={fetchMoreData}
            hasMore={true}
            loader={
             <TLoader results ={results.length}/>
            }
            scrollableTarget="scrollableDiv"
            scrollThreshold="200px"
          >

          <div className="search-drama">
            <div className="search-container">
              {results.map((item, i) => (
                <div className="card" key={item.id}>
                  <Link to={"/anime-detail/" + item.id}>
                  <ImageComponent  src={item.image} title={item.title} />
                    <p>{item.title}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          </InfiniteScroll>

         

          {results.length === 0 && (
            <h2 className="search-notfound">No Search Results Found</h2>
          )}
          {/* <Footer /> */}
        </>
      )}
    </div>
      
    </>
  );
}

export default AnimeSearchResults;
