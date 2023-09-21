import "./../Style/experience.css";

const Experience = ({ experience }) => {
  let experienceNoLine = experience.description;
  let experienceNewLine = experienceNoLine.split("!").map((exp) => (
    <ul className="description-points">
      <li> {exp}</li>
    </ul>
  ));

  return (
    <div className="experience">
      <div className="experience-company">
        <h5 className="work-heading">{experience.name}</h5>
        <p className="description-points">
          {experience.startDate} - {experience.endDate}{" "}
        </p>
      </div>
      <div className="experience-position">
        <h5 className="work-heading">{experience.position}</h5>
        {experienceNewLine}
      </div>
    </div>
  );
};

export default Experience;
