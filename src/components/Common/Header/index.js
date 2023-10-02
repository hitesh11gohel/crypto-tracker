import React, { useState } from "react";
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

  const toggleTheme = (e) => {
    if (!mode) {
      setDark();
    } else {
      setLight();
    }
    setMode(!mode);
  };

  return (
    <div className="navbar">
      <h1 className="heading">
        <a href="/">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </a>
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
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text="dashboard" />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;
