import './Card.css'
import { themeContext } from "../../Context";
import { useContext, useState } from "react";

const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span style={{ color: darkMode ? "#EEEDEB" : "" }}>{detail}</span>
        <button className="c-button">KNOW MORE</button>
    </div>
  )
}

export default Card