import axios from "axios";
import React, { useEffect, useState } from "react";
import {  NavLink, useParams } from "react-router-dom";

import "../Episodes.scss";
import API_URL from "../../../../Helper/base";


const AsianWatchingEp = () => {
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
    let res = await axios.get(`${API_URL}api/drama-episodes/${id}`);
    setLoading(false);
    setWatchingEpi(res.data);

    document.title = "";
  }

  return (
    <>
      {/* <AsianNav/> */}
      {/* {loading && <Loader />} */}
      {!loading && (
        <>
          <div className="episodes">
            <div className="asian-ep">
              <ul className="List">
             
                {watchingEpi.map((item, i) => (
                  <>
                  
                    <li className="list-item" key={item.id}>
                      <NavLink to={"/asian/drama-watch/" + item.id}>
                        {/* <div className="image-container">

                       <img
                       src={photo}
                       alt={item.episode}

                       />
                        </div> */}
                        <div className="ep-flex">
                          <p>{item.episode}</p>
                        </div>
                      </NavLink>
                    </li>
                  </>
                ))}
                 <div className="heading">
                  <h1>Episodes <span>List</span></h1>
                </div>
              </ul>
              {/* <Episodes /> */}
            </div>

            <div className="right-container">{/* <Recommend /> */}</div>
          </div>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
};

export default AsianWatchingEp;
