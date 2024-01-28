import './Experience.css'
import { themeContext } from "../../Context";
import { useContext } from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className={darkMode?'darkCircle': 'circle'}>2+</div>
            <span>years </span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className={darkMode?'darkCircle': 'circle'}>5+</div>
            <span>completed </span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className={darkMode?'darkCircle': 'circle'}>2+</div>
            <span>companies </span>
            <span>Work </span>
        </div>
    </div>
  )
}

export default Experience