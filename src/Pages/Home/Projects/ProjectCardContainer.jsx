import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./projects.css";

// data
import projects from "../../../data/projects/projects";
// components
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer() {
  return (
    <div className="project-container">
      {projects.map((project) => {
        return (
          <Link
            to={{
              pathname: `/project/${project.key}`,
            }}
            state={{ project: project }}
            key={project.key}
          >
            <ProjectCard project={project} key={project.key} />;
          </Link>
        );
      })}
    </div>
  );
}

// with params:

//   return (
//     <div className="project-container">
//       {projects.map((project) => {
//         // return console.log(project.name);
//         <Link
//           to={{
//             pathname: `/project/${project.name}`,
//             state: { project },
//           }}
//           key={project.key}
//         >
//           <ProjectCard project={project} key={project.key} />;
//         </Link>;
//       })}
//     </div>
//   );
// }
