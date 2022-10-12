import React,{useRef,useEffect} from "react";
import { CSSTransition } from "react-transition-group";
import "./Ham.scss"
import { NavLink } from "react-router-dom";
const Asianham = ({ allowscrollMenu, subAsian }) => {
 
  const nodeRef = useRef(null);

  return (
    <>
    <CSSTransition
        in={subAsian}
        timeout={500}
        classNames="my-SubList"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div className="asian-transition" ref={nodeRef}>

      {subAsian && (
        <div className="asianlist list" >
          <NavLink to="/asian/home" onClick={allowscrollMenu}>
            <h3>recently added sub</h3>
          </NavLink>

         

          <NavLink to="/asian/movies" onClick={allowscrollMenu}>
            <h3>movies</h3>
          </NavLink>

          <NavLink to="/asian/popular" onClick={allowscrollMenu}>
            <h3> popular</h3>
          </NavLink>

          <NavLink to="/asian/kshow" onClick={allowscrollMenu}>
            <h3>kshow</h3>
          </NavLink>
        </div>
      )}
        </div>

      </CSSTransition>
    </>
  );
};

export default Asianham;
