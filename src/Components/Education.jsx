import "./../Style/education.css";

const Education = ({ school }) => {
  console.log(school);
  let schoolNoLine = school.description;
  let schoolNewLine = schoolNoLine.split("!").map((schoolDesc) => (
    <ul>
      <li> {schoolDesc}</li>
    </ul>
  ));

  return (
    <div className="education">
      <div className="education-school">
        <h5>{school.degree}</h5>
        <p>
          {school.startYear} - {school.endYear}
        </p>
      </div>
      <div className="education-description">
        <h5>{school.school}</h5>
        {schoolNewLine}
      </div>
    </div>
  );
};

export default Education;
