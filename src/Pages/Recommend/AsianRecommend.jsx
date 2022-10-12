import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Recommend.scss"
import API_URL from "../../Helper/base";
import ImageComponent from '../../components/Image/ImageComponent'

const AsianRecommend = () => {
  const [recent, setRecent] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    ANISIAN();
  }, []);

  async function ANISIAN() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let res = await axios.get(
      `${API_URL}api/recentlyadded/page=1`
    );
    setLoading(false);
    
    setRecent(res.data);
   
    
  }
  return (
    <>
   
   {!loading && (
        <div className="recommend">
          <div className="heading">
            <h1> Latest <span>Drama</span> </h1> 
          </div>
          <div  className="recommend-container">
          {recent.map((item, i) => (
              <div  className="card" key={item.id}>
                <Link to={"/asian-detail/" + item.id}>
                  <div className="image-container">

                  <ImageComponent  src={item.image} title={item.title} />
                 
                  </div>
                  <p className="title" >{item.title}-<span>{item.episodes}</span></p>
                  
                  <span>{item.time}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
     )}
    
    </>
  )
}

export default AsianRecommend