import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import API_URL from "../../Helper/base";
import Recommend from "../Recommend/AsianRecommend";
import Footer from "../../components/Footer/Footer"
import "./Watching.scss";

import AsianNav from "../../components/Navigation/AsianNav";

import AsianWatchingEp from "./Episodes/Asian/AsianWatchingEp";

const Watching = () => {
  let id = useParams().id;
  const [watchingEpi, setWatchingEpi] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    WatchingDrama();
  }, [id]);

  async function WatchingDrama() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let res = await axios.get(`${API_URL}api/drama-watch/${id}`);
    setLoading(false);
    setWatchingEpi(res.data.watch);

    // document.title = `${res.data.watch.title}`
  }
  document.title = watchingEpi.map((doc,i ) => (

    `${doc.title} - Anisian `
  ))
  return (
    <>
    <div className="A-watching">

      <AsianNav />
      {loading && <Loader />}
      {!loading && (
        <>
         <div className="watching">
            <div className="left-container">
              <>
                <div className="watching-container">
                  {watchingEpi.map((item, i) => (
                    <>
                      <div className="wrapper" key={item.frame}>
                        <div className="heading">
                          <p>
                            <span>watching</span>/{item.title}
                          </p>
                        </div>
                        <div className="card">
                          <h1>{item.headingtitle}</h1>
                          <iframe
                            id="iframe-container"
                            src={item.frame}
                            frameBorder="0"
                            allowFullScreen={true}
                            marginWidth="0"
                            marginHeight="0"
                            scrolling="no"
                            loading="lazy"
                            height={"100%"}
                            width={"100%"}

                          ></iframe>
                         
                          
                        </div>
                      </div>
                    </>
                  ))}
                  <AsianWatchingEp />
                </div>
              </>
            </div>

            <div className="right-container">
              <Recommend />
            </div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </div>
    </>
  );
};

export default Watching;
