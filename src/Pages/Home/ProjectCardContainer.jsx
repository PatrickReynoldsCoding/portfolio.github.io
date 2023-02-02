import React from "react";
import "./projects.css";

// components
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer() {
  const projects = [
    {
      name: "testing 1",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
    {
      name: "testing 2",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
    {
      name: "testing 3",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
    {
      name: "testing 4",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
    {
      name: "testing 5",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
    {
      name: "testing 6",
      src: "../../public/project_card_images/PokemonMatch.gif",
    },
  ];
  return (
    <div className="project-container">
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.name} />;
      })}
    </div>
  );
}
