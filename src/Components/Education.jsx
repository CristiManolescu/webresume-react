import "./../Style/education.css";

const Education = ({ school }) => {
  let schoolNoLine = school.description;
  let schoolNewLine = schoolNoLine.split("!").map((schoolDesc) => (
    <ul className="description-points">
      <li> {schoolDesc}</li>
    </ul>
  ));

  return (
    <div className="education">
      <div className="education-school">
        <h5 className="school-heading">{school.degree}</h5>
        <p className="description-points">
          {school.startYear} - {school.endYear}
        </p>
      </div>
      <div className="education-description">
        <h5 className="school-heading">{school.school}</h5>
        {schoolNewLine}
      </div>
    </div>
  );
};

export default Education;
