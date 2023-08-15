import { useState, useEffect, createContext } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
// import * as Icons from "react-icons/ai";
import { getDocs } from "@firebase/firestore";
import {
  experienceCollectionRef,
  schoolsCollectionRef,
} from "./Utils/constants";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import AboutMe from "./Components/AboutMe";
import "./Style/mainPage.css";
import lightModeIco from "./Images/moon.png";
import darkModeIco from "./Images/sun.png";

export const ThemeContext = createContext(null);

const App = () => {
  //Experience useState; useEffect
  const [experiences, setExperiences] = useState([]);
  const [schools, setSchools] = useState([]);

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

  useEffect(() => {
    const getExperience = async () => {
      const data = await getDocs(experienceCollectionRef);
      setExperiences(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const getSchools = async () => {
      const data = await getDocs(schoolsCollectionRef);
      setSchools(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getExperience();
    getSchools();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <div className="content">
          {/********* Header ********/}
          <AboutMe />
          {/********* Dark Mode Switch ********/}
          <div className="switch">
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
                <img className="darkModeIco" src={icon} alt="Change the mode" />
              </Button>
            </OverlayTrigger>
            {/********* End Dark Mode Switch ********/}
          </div>
          {
            <>
              {/********** Content **********/}
              <div className="experience-container">
                <h3>Work experience</h3>
                {experiences.map((experience) => (
                  <Experience key={experience.id} experience={experience} />
                ))}
              </div>

              <div className="education-container">
                <h3>Education</h3>
                {schools.map((school) => (
                  <Education school={school} />
                ))}
              </div>
            </>
          }
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
