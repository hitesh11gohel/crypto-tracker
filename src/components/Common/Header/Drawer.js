import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import "./styles.css";
import { Link } from "react-router-dom";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
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
    <div className="drawerDiv">
      <MenuRoundedIcon
        className="link"
        style={{ fontSize: "1.5rem", margin: 0 }}
        onClick={() => setOpen(true)}
      />
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer">
          <p>
            <Link to="/" className="link">
              Home
            </Link>
          </p>
          <p>
            <Link to="/compare" className="link">
              Compare
            </Link>
          </p>
          <p>
            <Link to="/watchlist" className="link">
              Watchlist
            </Link>
          </p>
          <p>
            <Link to="/dashboard" className="link">
              Dashboard
            </Link>
          </p>

          <span onClick={() => toggleTheme()}>
            {mode ? (
              <span className="mode-container link">
                <label>Light</label>
                <LightModeIcon />
              </span>
            ) : (
              <span className="mode-container link">
                <label>Dark</label>
                <NightlightIcon />
              </span>
            )}
          </span>
        </div>
      </Drawer>
    </div>
  );
}
