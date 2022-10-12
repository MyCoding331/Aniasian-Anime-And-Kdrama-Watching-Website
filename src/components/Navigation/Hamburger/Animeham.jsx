import React, { useRef, useEffect } from "react";
import "./Ham.scss"
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
const Animeham = ({ allowscrollMenu, subAnime, setSubAnime }) => {
  // const [subAnime, setSubAnime] = useState(false);
  const nodeRef = useRef(null);

 
  return (
    <>
      <CSSTransition
        in={subAnime}
        timeout={500}
        classNames="my-SubList"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="anime-transition" ref={nodeRef}>
          {subAnime && (
            <div className="animesublists list">
              <NavLink to="/anime/home" onClick={allowscrollMenu}>
                <h3>recently added sub</h3>
              </NavLink>

              <NavLink to="/anime/movies" onClick={allowscrollMenu}>
                <h3>movies</h3>
              </NavLink>
              <NavLink to="/anime/popular" onClick={allowscrollMenu}>
                <h3> popular</h3>
              </NavLink>
            </div>
          )}
        </div>
      </CSSTransition>
    </>
  );
};

export default Animeham;
