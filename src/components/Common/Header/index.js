import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import "./styles.css";

function Header() {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const [mode, setMode] = useState(defaultDark ? true : false);

  const toggleTheme = () => {
    !mode ? setDark() : setLight();
    setMode(!mode);
  };

  return (
    <div className="navbar">
      <h1 className="heading">
        <Link to="/">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </Link>
      </h1>
      <div className="links">
        <Tooltip
          title={
            mode ? "Click to enable dark mode" : "Click to enable light mode"
          }
        >
          <span className="link" onClick={() => toggleTheme()}>
            {mode ? (
              <span className="mode-container">
                <label>Light</label>
                <LightModeIcon />
              </span>
            ) : (
              <span className="mode-container">
                <label>Dark</label>
                <NightlightIcon />
              </span>
            )}
          </span>
        </Tooltip>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/compare" className="link">
          Compare
        </Link>
        <Link to="/watchlist" className="link">
          Watchlist
        </Link>
        <Link to="/dashboard" className="link">
          <Button text="dashboard" />
        </Link>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
