import "./../Style/experience.css";

const Experience = ({ experience }) => {
  const { description, name, startDate, endDate, position } = experience;

  let experienceNoLine = description;
  let experienceNewLine = experienceNoLine.split("!").map((exp) => (
    <ul className="description-points">
      <li> {exp}</li>
    </ul>
  ));

  return (
    <div className="experience">
      <div className="experience-company">
        <h5 className="work-heading">{name}</h5>
        <p className="description-points">
          {startDate} - {endDate}{" "}
        </p>
      </div>
      <div className="experience-position">
        <h5 className="work-heading">{position}</h5>
        {experienceNewLine}
      </div>
    </div>
  );
};

export default Experience;
