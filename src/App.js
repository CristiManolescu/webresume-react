import { useState, createContext } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import * as Icons from "react-icons/ai";
import AboutMe from "./Components/AboutMe";
import "./Style/mainPage.css";
import lightModeIco from "./Images/moon.png";
import darkModeIco from "./Images/sun.png";
import { Outlet, Link } from "react-router-dom";

export const ThemeContext = createContext(null);

const App = () => {
  //Set Light/Dark mode
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("setDarkMode") === null) {
      return "light";
    } else {
      return localStorage.getItem("setDarkMode");
    }
  });

  //Set the icon for Light/Dark mode
  const [icon, setIcon] = useState(() => {
    if (
      localStorage.getItem("setDarkMode") === null ||
      localStorage.getItem("setDarkMode") === "light"
    ) {
      return lightModeIco;
    } else {
      return darkModeIco;
    }
  });

  //Set the Light/Dark Mode into Cookies
  localStorage.setItem("setDarkMode", theme);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    setIcon((curr) => (curr === lightModeIco ? darkModeIco : lightModeIco));
    if (theme === "light") {
      localStorage.setItem("setDarkMode", "light");
    } else {
      localStorage.setItem("setDarkMode", "dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="content">
          {/********* Header ********/}
          <AboutMe />
          {/********* Dark Mode Switch ********/}
          <div className="switch">
            <Link to="/">
              <Button variant="outline-secondary">Home</Button>
            </Link>
            <Link to="/portfolio">
              {" "}
              <Button variant="outline-secondary">Portfolio</Button>
            </Link>
            <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  Turn to {theme === "light" ? "dark" : "light"} mode
                </Tooltip>
              }
            >
              <Button
                className="main-button"
                variant="outline-secondary"
                onClick={toggleTheme}
              >
                <img
                  className="darkModeIco"
                  src={icon}
                  alt={theme + " mode button"}
                />
              </Button>
            </OverlayTrigger>
            {/********* End Dark Mode Switch ********/}
          </div>
          <Outlet />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
