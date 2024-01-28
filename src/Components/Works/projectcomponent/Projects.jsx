import "./project.css";

import Github from "@iconscout/react-unicons/icons/uil-github";
import Eye from "@iconscout/react-unicons/icons/uil-eye";

const Projects = ({ category, data }) => {
  const filteredProjects = data.find((item) => item.category === category);

  // console.log(filteredProjects);

  return (
    <div className="projectsContainer">
      {filteredProjects && (
        <div className="projectApp">
          {filteredProjects.projects.map((project, index) => (
            <div className="AppContainer" key={index}>
              <img
                className="projectImg"
                src={project.image}
                alt={project.name}
              />
              <span className="projectName">{project.name}</span>
              <div className="socialMediaContainer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="icon" color="#fff" size="2rem" />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Eye className="icon" color="#fff" size="2rem" />
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {!filteredProjects && <p>No projects found for this category</p>}
    </div>
  );
};

export default Projects;
