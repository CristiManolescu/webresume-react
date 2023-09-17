import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import * as Icons from "react-icons/ai";
import Experience from "./Experience";
import Education from "./Education";
import "./../Style/mainPage.css";
import useExperiences from "./../Utils/useExperiences";
import useSchools from "./../Utils/useSchools";

const Body = () => {
  const experiences = useExperiences();
  const schools = useSchools();

  return (
    <div>
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
    </div>
  );
};

export default Body;
