import axios from "axios";
import React, { useEffect, useState } from "react";
import {  NavLink, useParams } from "react-router-dom";

import "../Episodes.scss";
import API_URL from "../../../../Helper/base";


const ASianEpisodes = ({ Id, image, status, title }) => {
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
    let res = await axios.get(`${API_URL}api/drama-episodes/${Id}`);
    setLoading(false);
    setWatchingEpi(res.data);

    
  }

  return (
    <>
     
      {!loading && (
        <>
          <div className="episodes">
            <div className="ep">
              


              <ul className="List">
                
                {watchingEpi.map((item, i) => (
                  <>
                    <li key={item.id}>
                      <NavLink to={"/asian/drama-watch/" + item.id}>
                        {/* <div className="image-container">
                          <img src={image} alt={title} />

                          <span>{status}</span>
                        </div> */}
                        <div className="ep-flex ">
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
              
             
            </div>
            </div>

          
         
        </>
      )}
    </>
  );
};

export default ASianEpisodes;
