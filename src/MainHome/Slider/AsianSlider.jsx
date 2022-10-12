import React, { useEffect, useState,useRef } from "react";
import API_URL from "../../Helper/base";
import axios from "axios";
import { RiPlayMiniFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import ImageComponent from "../../components/Image/ImageComponent";
import TLoader from "../../components/TLoader/TLoader";
import { motion } from "framer-motion";
const AsianSlider = () => {
  const [asian, setAsian] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    ANISIAN();
    setLoading(true);
  }, []);
const slide = useRef
  async function ANISIAN() {
    let res = await axios.get(`${API_URL}api/recentlyadded/page=1`);
    setLoading(false);
    let data = res.data;

    setAsian(data);
  }

  return (
    <>
      <div className="main">
        <div className="heading">
          <h1>
            <Link to={"/asian/home"}>
              Asian
              <span>Drama</span>
            </Link>
          </h1>
          <span>
            <Link to={"/asian/home"}>View All</Link>
          </span>
        </div>
        <div   className="drama-container">

        {loading && <TLoader/>}
      {!loading && (

        <>
          {asian.map((item, i) => (
            <div className="card" key={item.id}>
              <Link to={"/asian-detail/" + item.id}>
                <div className="image-container">
                  <ImageComponent src={item.image} title={item.title} />
                  <div className="play-icon">
                    <RiPlayMiniFill />
                  </div>
                </div>
                <p>
                  {item.title}-{item.episode}
                </p>

                <span>{item.time}</span>
              </Link>
            </div>
          ))}
        </>
      )}
        </div>
      </div>
    </>
  );
};

export default AsianSlider;
