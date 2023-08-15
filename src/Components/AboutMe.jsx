import * as Icons from "react-icons/ai";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import "./../Style/aboutMe.css";
import ProfilePic from "./../Images/pictograma.jpg";
import { fullName, git, linkedIn, email } from "../Utils/constants";

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="profile-container">
        <div className="profile-pic-container">
          <img className="profile-pic" src={ProfilePic} alt={fullName} />
        </div>
        <div className="name-link">
          <div className="profile-name">
            <h4>{fullName}</h4>
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
                onClick={() => (window.location = git)}
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
                onClick={() => (window.location = linkedIn)}
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
                onClick={() => (window.location = email)}
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
