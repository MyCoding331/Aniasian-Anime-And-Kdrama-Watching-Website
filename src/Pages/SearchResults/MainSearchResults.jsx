import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API_URL from "../../Helper/base";
import Loader from "../Loader/Loader";

import "./SearchResults.scss";

import Footer from "../../components/Footer/Footer";

import ANIME_URL from "../../Helper/animeApi";
import MainNav from "../../components/Navigation/MainNav";

import ImageComponent from "../../components/Image/ImageComponent";

function MainSearchResults() {
  let urlParams = useParams().word;

  urlParams = urlParams.replace(":", "");

  const [results, setResults] = useState([]);
  const [animeResults, SetAnimeResults] = useState([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    getResults();
    getAnimeResults();
  }, [urlParams]);

  async function getResults() {
    let res = await axios.get(
      `${API_URL}api/search/keyword=${urlParams}/page=1
      `
    );
    setLoading(false);

    let data = res.data;

    setResults(data);
    document.title = urlParams + " - ANISIAN";
  }
  async function getAnimeResults() {
    let res = await axios.get(
      `
      ${ANIME_URL}api/search/${urlParams}/1`
    );
    setLoading(false);
    let data = res.data.results;

    SetAnimeResults(data);
  }

  return (
    <>
      <MainNav />

      {loading && <Loader />}
      {!loading && (
        <>
          <div className="results">
            
            <div className="animeresults">
              <div className="serarch-result-heading">
                <h1>
                  Anime <span>Results :</span>
                </h1>
              </div>
              <div className="search-drama">
                <div className="search-container">
                  {animeResults.map((item, i) => (
                    <div className="card" key={item.id}>
                      <Link to={"/anime-detail/" + item.id}>
                        <ImageComponent src={item.image} title={item.title} />
                        <p>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </div>
                {animeResults.length >= 20 && (
                  <div className="view-more-btn">
                    <Link to={"/asian/search/keyword=" + urlParams}>
                      <button>VIEW MORE</button>
                    </Link>
                  </div>
                )}
                {animeResults.length < 20 && <h1 className="no-results-btn" >No More Results</h1>}
              </div>
            </div>
            <div className="asianresults">
              <div className="serarch-result-heading">
                <h1>
                  Asian <span>Results :</span>
                </h1>
              </div>
              <div className="search-drama">
                <div className="search-container">
                  {results.map((item, i) => (
                    <div className="card" key={item.id}>
                      <Link to={"/asian-detail/" + item.id}>
                        <ImageComponent src={item.image} title={item.title} />
                        <p>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </div>
                {results.length >= 20 && (
                  <div className="view-more-btn">
                    <Link to={"/asian/search/keyword=" + urlParams}>
                      <button>VIEW MORE</button>
                    </Link>
                  </div>
                )}
                {results.length < 20 && <h1 className="no-results-btn" >No More Results</h1>}
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
}

export default MainSearchResults;
