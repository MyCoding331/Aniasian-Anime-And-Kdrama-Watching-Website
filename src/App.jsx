import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import AsianNav from "./components/AsianNavigation/AsianNav";
import React, { useEffect, useState } from "react";

import Home from "./Pages/Home/AsianHome";
import Movies from "./Pages/Movie/AsianMovies";
import Popular from "./Pages/Popular/AsianPopular";

import SearchResults from "./Pages/SearchResults/SearchResults";
import AnimeHome from "./Pages/Home/AnimeHome";
import AnimePopular from "./Pages/Popular/AnimePopular";

import { Suspense } from "react";

import "./App.scss";
import AnimeWatch from "./Pages/Watching/AnimeWatch";
import AnimeMovies from "./Pages/Movie/AnimeMovies";

import AsianWatching from "./Pages/Watching/AsianWatching";
import AnimeDetail from "./Pages/Detail/AnimeDetail";

import Kshow from "./Pages/Kshow/Kshow";
import MainHome from "./MainHome/MainHome";
import AnimeSearchResults from "./Pages/SearchResults/AnimeSearchResults";
import MainSearchResults from "./Pages/SearchResults/MainSearchResults";
import AsianDetail from "./Pages/Detail/AsianDetail";
import IntroPage from "./Pages/Intro/IntroPage";
import { IoMdArrowRoundUp } from "react-icons/io";
import Error from "./Pages/NotFound/Error";


function App() {
  const [visible, setVisible] = useState(false);
  const toTop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    toTop();
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <Router>
        {/* <AsianNav /> */}

        <Suspense>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/home" element={<MainHome />} />
            <Route path="asian/home" element={<Home />} />

            <Route path="/asian/movies" element={<Movies />} />
            <Route path="/asian/popular" element={<Popular />} />
            <Route path="/asian/drama-watch/:id" element={<AsianWatching />} />
            <Route path="/asian-detail/:id" element={<AsianDetail />} />
            <Route
              path="/asian/search/keyword=:word"
              element={<SearchResults />}
            />

            <Route path="/asian/kshow" element={<Kshow />} />

            <Route path="/anime/home" element={<AnimeHome />} />

            <Route path="/anime/popular" element={<AnimePopular />} />
            <Route path="/anime/movies" element={<AnimeMovies />} />
            <Route path="/anime-detail/:id" element={<AnimeDetail />} />
        
            <Route
              path="/anime-watch/:id/:episodeNo"
              element={<AnimeWatch />}
            />
            <Route
              path="/anime/search/keyword=:word"
              element={<AnimeSearchResults />}
            />
            <Route
              path="/main/search/keyword=:word"
              element={<MainSearchResults />}
            />

            <Route path="*" element={<Error/>} />
          </Routes>
        </Suspense>
      </Router>
      {visible && (
        <button
          id="top"
          className="top"
          onClick={toTop}
          style={{ display: visible ? "grid" : "none" }}
        >
          <IoMdArrowRoundUp />
        </button>
      )}
    </>
  );
}

export default App;
