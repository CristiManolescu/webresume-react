import "./../Style/education.css";

const Education = ({ school }) => {
  const { description, degree, startYear, endYear, name, image } = school;

  let schoolNoLine = description;
  let schoolNewLine = schoolNoLine.split("!").map((schoolDesc) => (
    <ul className="description-points">
      <li> {schoolDesc}</li>
    </ul>
  ));

  return (
    <div className="education">
      <div className="education-school">
        <div className="education-main">
          <div>
            <img src={image} className="school-logo" alt="logo" />
          </div>
          <div>
            <h5 className="school-heading">{degree}</h5>
            <p className="description-points">
              {startYear} - {endYear}
            </p>
          </div>
        </div>
      </div>
      <div className="education-description">
        <h5 className="school-heading">{name}</h5>
        {schoolNewLine}
      </div>
    </div>
  );
};

export default Education;
