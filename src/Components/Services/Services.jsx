import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { themeContext } from "../../Context";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2 };

  const [card1InView, setCard1InView] = useState(false);
  const [card2InView, setCard2InView] = useState(false);
  const [card3InView, setCard3InView] = useState(false);

  useEffect(() => {
    // Reset all cards' states whenever the component mounts or updates
    setCard1InView(false);
    setCard2InView(false);
    setCard3InView(false);
  }, []);

  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  useEffect(() => {
    if (inView1) {
      setCard1InView(true);
    }
    if (inView2) {
      setCard2InView(true);
    }
    if (inView3) {
      setCard3InView(true);
    }
  }, [inView1, inView2, inView3]);

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>Elevating Brands</span>
        <span>through my services</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Transforming ideas into immersive web experiences, one line of code at
          a time,
          <br />
          to make your digital vision a reality.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="cards">
        <motion.div
          ref={ref1}
          animate={{ x: card1InView ? 0 : "-100px"}}
        //   initial={{ x: "-100vw" }}
          style={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Adobe Photoshop"}
          />
        </motion.div>
        <motion.div
          ref={ref2}
          animate={{ y: card2InView ? 0 : "100px" }}
        //   initial={{ y: "100vh" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, MERN"}
          />
        </motion.div>
        <motion.div
          ref={ref3}
          animate={{ x: card3InView ? 0 : "100px" }}
        //   initial={{ x: "100vw" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Elevating user satisfaction through visually appealing and user-friendly UI/UX solutions."
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;



