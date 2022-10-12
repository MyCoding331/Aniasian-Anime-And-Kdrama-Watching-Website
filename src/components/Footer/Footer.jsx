import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import Logo from "../../assets/Logo.png"
const Footer = () => {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const locale = "en";
  const today = new Date();

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  return (
    <>
      <div className="footer">
        <div className="footer-wrapper">
          <div className="logo">
            <Link to="/" >
              <img src={Logo} alt="LOGO" />
            </Link>
          </div>
          <div className="footer-info ">
            <h5 className="info">
              <span>ANISIAN</span> is a Free anime & asian drama streaming site with
              zero ads. We let you watch anime & asian drama online without having to
              register or paying, with over 10000+ movies and dramas. You can
              also Download full episodes from ANISIAN and watch it later if
              you want.
            </h5>
            <div className=" btn-links">
              <Link to="/terms-condition" className="redirect">
                <h3>Terms & Condition</h3>
              </Link>
              <Link to="/privacy-policy" className="redirect">
                <h3>Privacy & Policy</h3>
              </Link>
            </div>
          </div>
          <div className="footer-notice">
            <span className="animate  "></span>
            <span className="  animate-ping "></span>
            <p>
              "ANISIAN" does not store any files on our server, we only
              linked to the media which is hosted on "
              <span className="pulse-notice">3rd party services</span>".
            </p>
          </div>
        </div>

        <p className=" copyright">
          <span>
            &copy;Copyright by <span className="text-primary">A</span>S
          </span>
          <br />
          <span className="block">
            {" "}
            &copy; {date} and {time}{" "}
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
