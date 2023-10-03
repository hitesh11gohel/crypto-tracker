import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";
import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <div className="footer">
      <Link to="/" style={{ marginLeft: "1rem" }}>
        <h2>CryptoTracker</h2>
      </Link>
      <div className="socials-flex">
        <Link to="/">
          <FacebookIcon className="socials-icon" />
        </Link>
        <Link to="/">
          <InstagramIcon className="socials-icon" />
        </Link>
        <Link to="mailto:avivashishta@gmail.com">
          <EmailIcon className="socials-icon" />
        </Link>
        <RWebShare
          data={{
            text: "Crypto Dashboard made using React JS in 2022",
            url: "https://crypto-dashboard-nov.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
}

export default Footer;
