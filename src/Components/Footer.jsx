import { fullName } from "../Utils/constants";
import "./../Style/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <div className="footer">&copy; {currentYear + " " + fullName}</div>;
};

export default Footer;
