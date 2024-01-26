import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";

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
                  <FontAwesomeIcon
                    className="icon"
                    icon={faGithub}
                    size="lg"
                    style={{ color: "#fff" }}
                  />
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                  className="icon"
                  icon={faEye}
                  size="lg"
                  style={{ color: "#fff" }}
                />
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
