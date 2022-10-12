import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../../Helper/base";
import Loader from "../Loader/Loader"
import AsianNav from "../../components/Navigation/AsianNav"
import "./SearchResults.scss";
import ImageComponent from '../../components/Image/ImageComponent'
import TLoader from "../../components/TLoader/TLoader";
import InfiniteScroll from "react-infinite-scroll-component";
function SearchResults() {
  let urlParams = useParams().word;
  
  urlParams = urlParams.replace(":", "");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const pageCount = 30;
  const pageNo = Math.ceil(results.length / pageCount) + 1;
  useEffect(() => {
    getResults();
 
  }, [urlParams]);

  async function getResults() {
    let res = await axios.get(
      `${API_URL}api/search/keyword=${urlParams}/page=${pageNo}`
    );
    setLoading(false);
    let data = res.data;
    const merge = [...results, ...data];
    setResults(merge);
    document.title = urlParams + " - ANISIAN";
  }
  const fetchMoreData = () => {
    getResults();
  };
  return (
    <>
    <div className="Search">

      <AsianNav />
      <div className="serarch-result-heading">
        <h1>
          Asian <span>Results :</span>
        </h1>
      </div>
      {loading &&  <Loader/>}
      {!loading && (
        <>
        <InfiniteScroll
            dataLength={results.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
             <TLoader/>
            }
            scrollableTarget="scrollableDiv"
            scrollThreshold="200px"
          >

          <div className="search-drama">
            <div className="search-container">
              {results.map((item, i) => (
                <div className="card" key={item.id}>
                  <Link to={"/asian-detail/" + item.id}>
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

export default SearchResults;
