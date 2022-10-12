import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import Search from "../Search/MainSearch";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import useScrollBlock from "../useScrollBlock";
import "./Nav.scss";
import Animeham from "./Hamburger/Animeham";
import Asianham from "./Hamburger/Asianham";
import Logo from "../../assets/Logo.png"

const MainNav = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [subAnime, setSubAnime] = useState(false);
  const [subAsian, setSubAsian] = useState(false);

  const allowscrollMenu = () => {
    allowScroll();
    setOpen(!open);
  };
  const blockScolling = () => {
    blockScroll();

    setOpen(!open);
  };
  const closeSearch = () => {
    setSearch(!search);
  };

  const onClickAnime = () => {
    setSubAnime(!subAnime);
  };
  const onClickAsian = () => {
    setSubAsian(!subAsian);
  };

  return (
    <>
      <nav className="main-top-nav">
        <div className="navbar">
          <div className="search-wrapper">
            <div className="logo heading">
              <NavLink to={"/"}>
              
                <img src={Logo} alt="LOGO" />
              </NavLink>
            </div>

            <ul className="nav-mainlinks">
              <li>
                <NavLink to="/anime/home">
                  <h3>Anime</h3>
                </NavLink>
              </li>
              <li>
                <NavLink to="/asian/home">
                  <h3>AsianDrama</h3>
                </NavLink>
              </li>
            </ul>
            <div className="search">
              <Search />
            </div>
          </div>
          <div className="menu-btn">
            <div className="search-btn" onClick={closeSearch}>
              <FiSearch />
            </div>
            <button className="hamburger-btn" onClick={blockScolling}>
              <HiMenuAlt3 />
            </button>
          </div>
        </div>

        <CSSTransition
          in={search}
          timeout={500}
          classNames="my-node"
          unmountOnExit
        >
          <div className="search-box">{search && <Search />}</div>
        </CSSTransition>
        <CSSTransition
          in={open}
          timeout={500}
          classNames="my-burger"
          unmountOnExit
        >
          <div className="hamburger-menu">
            <div className="anime label" onClick={onClickAnime}>
              <div
                className={
                  subAnime ? " activ dropdown-label" : "dropdown-label"
                }
              >
                <button>ANIME</button>
                <span className={"span"}>
                  <IoMdArrowDropdown />
                </span>
              </div>

              <Animeham
                allowscrollMenu={allowscrollMenu}
                subAnime={subAnime}
                setsubAnime={setSubAnime}
                
              />
            </div>
            <div className="asiandrama label">
              <div
                className={
                  subAsian ? " activ dropdown-label" : "dropdown-label"
                }
                onClick={onClickAsian}
              >
                <button>ASIANDRAMA</button>
                <span className={"span"}>
                  <IoMdArrowDropdown />
                </span>
              </div>
              <Asianham allowscrollMenu={allowscrollMenu} subAsian={subAsian}  />
            </div>

            <div className="btn">
              <button className="close">
                <IoMdClose onClick={allowscrollMenu} />
              </button>
            </div>
          </div>
        </CSSTransition>
        {open && <div className="shadow"></div>}
      </nav>
    </>
  );
};

export default MainNav;
