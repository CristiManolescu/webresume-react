import * as Icons from "react-icons/ai";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import "./../Style/aboutMe.css";
import ProfilePic from "./../Images/pictograma.jpg";

const AboutMe = () => {
  const name = "Cristian Manolescu";
  const Git = "https://github.com/CristiManolescu";
  const LinkedIn = "https://www.linkedin.com/in/cristianmanolescu/";
  const Email = "mailto:cristianm.manolescu96@gmail.com";

  return (
    <div className="about-container">
      <div className="profile-container">
        <div className="profile-pic-container">
          <img
            className="profile-pic"
            src={ProfilePic}
            alt="Cristian Manolescu"
          />
        </div>
        <div className="name-link">
          <div className="profile-name">
            <h4>{name}</h4>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Welcome to my webdoye")
                  .pauseFor(200)
                  .deleteChars(4)
                  .pauseFor(200)
                  .typeString("site👋")
                  .start();
              }}
            />
          </div>
          <div className="profile-links">
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{"Github"}</Tooltip>}
            >
              <Button
                variant="outline-secondary"
                className="profile-link"
                onClick={() => (window.location = Git)}
              >
                <Icons.AiFillGithub />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{"LinkedIn"}</Tooltip>}
            >
              <Button
                variant="outline-secondary"
                className="profile-link"
                onClick={() => (window.location = LinkedIn)}
              >
                <Icons.AiFillLinkedin />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{"Email"}</Tooltip>}
            >
              <Button
                variant="outline-secondary"
                className="profile-link"
                onClick={() => (window.location = Email)}
              >
                <Icons.AiOutlineMail />
              </Button>
            </OverlayTrigger>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip>{"Download Full Resume"}</Tooltip>}
            >
              <Button variant="outline-secondary" className="profile-link">
                <Icons.AiOutlineDownload />
              </Button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
