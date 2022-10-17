import React from "react";
import './../Style/experience.css';


const Experience = ({experience}) => {
    let experienceNoLine = experience.description;
    let experienceNewLine = experienceNoLine.split('!').map(exp => <ul><li> {exp}</li></ul>);

    return(
        <div className="experience">
            <div className="experience-company">
                <h5>{experience.name}</h5>
                <p>{experience.startDate} - {experience.endDate} </p>
                <p><i>{experience.location}</i> </p>
            </div>

            <div className="experience-position">
                <h5>{experience.position}</h5>
                {experienceNewLine}
            </div>
            {/* <div className="position-data">
                {experience.startDate} - {experience.endDate} - {experience.location}
            </div>
            <div className="position">
                <h5>{experience.position} - {experience.name}</h5>
            </div>
            <div className="position-description">
                {experienceNewLine}
            </div> */}
        </div>
    )
}

export default Experience;