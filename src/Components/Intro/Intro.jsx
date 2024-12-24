import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 3, type: "spring" };

  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>HY! I Am</span>
          <span>Dwarika Kumar</span>
          <span style={{ color: darkMode ? "white" : "" }}>
            A passionate Software Engineer dedicated to creating elegant and
            functional online solutions, turning concepts into captivating user
            journeys.
          </span>
        </div>
        <Link spy={true} smooth={true} to="Contact" activeClass="activeClass">
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a
            href="https://www.linkedin.com/in/dwarika-kumar-2266861a5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin color="#FCA61F" size="6rem" />
          </a>
          <a
            href="https://github.com/Dwarika202249"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github color="#FCA61F" size="6rem" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          src={glassesimoji}
          alt=""
          animate={{ x: 100 }}
          transition={transition}
        />

        <motion.div
          animate={{ x: -350, y: 385 }}
          transition={transition}
          style={{ top: "-4%", left: "58%" }}
          className="floating-div"
        >
          <FloatingDiv image={Crown} txt1="Elevating" txt2="Ideas" />
        </motion.div>
        <motion.div
          animate={{ x: 380, y: -385 }}
          transition={transition}
          style={{ top: "18rem", left: "1.5rem" }}
          className="floating-div"
        >
          <FloatingDiv image={thumbup} txt1="Executing" txt2="Excellence" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
