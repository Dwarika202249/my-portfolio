import ddfoods from "./images/ddfoods.png";
import weatherApp from "./images/weatherapp.png";
import filmystaan from "./images/filmystaan.png";
import saanpsidhi from "./images/saanpsidhi.png";
import carrace from "./images/carrace.png";
import mockmate from "./images/mockmate.png";
import aeroplus from "./images/aeroplus.png";

const data = [
  {
    category: "PERSONAL_PROJECTS",
    projects: [
      
      {
        name: "MockMate AI",
        image: mockmate,
        liveUrl: "https://mockmateio.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/MockMate",
        desc: "An AI-driven mock interview platform designed to help users prepare for interviews by providing real-time feedback, practice sessions, and more.",
      },
      {
        name: "FILMYSTAAN",
        image: filmystaan,
        liveUrl: "https://filmystaan.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/Filmystaan",
        desc: "We can see trending movies and series and can search movies and tv series and also we have genres for filtration.",
      },
      {
        name: "WEATHER FOREACASTING",
        image: weatherApp,
        liveUrl: "https://weather-future.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/weather-forecasting",
        desc: "Weather forcasting app, we can search any location and will get forecasting of weathers",
      },
      {
        name: "AeroPlus",
        image: aeroplus,
        liveUrl: "https://aeroplus.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/flight-status",
        desc: "The project aims to streamline communication between the airline and passengers, ensuring they are informed about changes to their flight statuses and gate numbers in real-time.",
      },
    ],
  },
  {
    category: "FREELANCE",
    projects: [
      {
        name: "DD FOODS",
        image: ddfoods,
        liveUrl: "https://ddfoods.netlify.app",
        githubUrl: "https://github.com/Dwarika202249/ddfoodstesting",
        desc: "Local food shop website to show food items and can order via whatsapp shop.",
      },
    ],
  },
  {
    category: "GAMES",
    projects: [
      {
        name: "CAR RACE",
        image: carrace,
        liveUrl: "https://speedmycar.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/carrace",
        desc: "We can play simple car race which is made using HTML, CSS and pure JS.",
      },
      {
        name: "SAANP SIDHI",
        image: saanpsidhi,
        liveUrl: "https://saanpsidhi-v2.netlify.app/",
        githubUrl: "https://github.com/Dwarika202249/Snake-and-Ladder",
        desc: "We can play snakes and ladders game here. This is single player game and working on multiplayer's features.",
      },
    ],
  },
  
];

export { data };
