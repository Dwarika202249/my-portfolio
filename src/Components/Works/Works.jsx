import { useState } from "react";
import "./Works.css";
import Projects from "./projectcomponent/Projects";
import {data} from './projectcomponent/projectData.js';

const Works = () => {
  const [activeCategory, setActiveCategory] = useState("STATIC_WEBSITES");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

//   console.log(data);

  return (
    <div className="works">
        <div className="w-blur w-blur1" style={{background: '#ABF1FF94'}}></div>
    <div className="btnContainer">
      <button
        className={activeCategory === "STATIC_WEBSITES" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("STATIC_WEBSITES")}
      >
        STATIC WEBSITES
      </button>
      <button
        className={activeCategory === "FULL_STACK" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("FULL_STACK")}
      >
        FULL STACK
      </button>
      <button
        className={activeCategory === "GUI_APPS" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("GUI_APPS")}
      >
        GUI APPS
      </button>
      <button
        className={activeCategory === "GAMES" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("GAMES")}
      >
        GAMES
      </button>
      <button
        className={activeCategory === "UI_UX" ? "activeBtn" : "toggleBtn"}
        onClick={() => handleCategoryChange("UI_UX")}
      >
        UI/UX
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
