import axios from "axios";
import React, { useEffect, useState } from "react";
import {  NavLink, useParams } from "react-router-dom";

import "./Episodes.scss";
import ANIME_URL from "../../../Helper/animeApi";

const Episodes = ({ Id, title,image,status }) => {
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
    let res = await axios.get(`${ANIME_URL}api/details/${id}`);
    setLoading(false);
    setWatchingEpi(res.data.results);

 
  }
  document.title = watchingEpi.map((doc,i ) => (

    `${title} - ASIANdrama.fun `
  ))

  return (
    <>
      {/* <AsianNav/> */}
      
      
        
          <div className="episodes">
            <div className="anime-ep">

              {watchingEpi.map((item, i) => (
                <>
                  <div className="episodes-wrapper" key={item.id}>
                    <ul List  className= " List unorder-list">
                    <div className="heading">
                  <h1>Episodes <span>List</span></h1>
                </div>
                <div className="lg">

                      {Array.from({ length: item.totalepisode }, (q, i) => (
                        <li>
                          <NavLink to={"/anime-watch/" + Id + "/" + (i + 1)}>
                            
                            <div className="ep-flex ">
                            
                              <p>{title}</p>
                              <span>Episode-{i + 1}</span>
                            </div>
                              
                          </NavLink>
                        </li>
                      ))}
                </div>
                      <div className="md">

                      {Array.from({ length: item.totalepisode }, (q, i) => (
                        <li>
                          <NavLink to={"/anime-watch/" + Id + "/" + (i + 1)}>
                            
                            <div className="ep-flex ani-ep">
                            
                              
                              <p>{i + 1}</p>
                            </div>
                              
                          </NavLink>
                        </li>
                      ))}
                      </div>
                    
                    </ul>
                  </div>
                </>
              ))}
           
            </div>

           
          </div>
          
        
      
    </>
  );
};

export default Episodes;
