import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Dwarika.</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              smooth={true}
              to="Navbar"
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Services"
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              to="Experience"
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link spy={true} smooth={true} to="Works" activeClass="activeClass">
              <li>Projects</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} smooth={true} to="Contact" activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
