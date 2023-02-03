import React from "react";
import "./projects.css";

export default function ProjectCard(props) {
  const gif = "../../public/project_card_images/PokemonMatch.gif";
  return (
    <div className="project-card">
      <img className="project-card-img" src={gif} />
      <div className="project-card-text">
        <h3>Project Text</h3>
      </div>
    </div>
  );
}
