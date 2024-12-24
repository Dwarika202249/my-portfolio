import "./Footer.css";
import Wave from "../../img/wave.png";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="mailto:dwarika.kumar9060@gmail.com">dwarika.kumar9060@gmail.com</a>
        <div className="f-icons">
          <a href="https://www.linkedin.com/in/dwarika-kumar-2266861a5/" target="_blank" rel="noopener noreferrer">
            <Linkedin color="white" size="3rem" />
          </a>
          <a href="https://github.com/Dwarika202249" target="_blank" rel="noopener noreferrer">
            <Github color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
