import { useState } from "react";
import "./Works.css";
import Projects from "./projectcomponent/Projects";
import {data} from './projectcomponent/projectData.js';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("PERSONAL_PROJECTS");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

//   console.log(data);

  return (
    <div className="works" id="Works">
        <div className="w-blur w-blur1" style={{background: '#ABF1FF94'}}></div>
    <div className="btnContainer">
      <button
        className={activeCategory === "PERSONAL_PROJECTS" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("PERSONAL_PROJECTS")}
      >
        PERSONAL PROJECTS
      </button>
      <button
        className={activeCategory === "FREELANCE" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("FREELANCE")}
      >
        FREELANCE PROJECTS
      </button>
      <button
        className={activeCategory === "GAMES" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("GAMES")}
      >
        GAMES
      </button>
    </div>
    <div className="componentContainer">
      <Projects data={data} category={activeCategory} />
    </div>
    <div className="w-blur w-blur2" style={{background: 'var(--purple)'}}></div>
  </div>
  );
};

export default Works;
