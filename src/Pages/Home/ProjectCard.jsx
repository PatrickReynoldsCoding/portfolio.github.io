import React from "react";
import "./projects.css";

export default function ProjectCard(props) {
  return (
    <img
      src="./project_card_images/PokemonMatch.gif"
      alt="test 1"
      className="project-card"
      style={{
        ":hover": {
          transition: "filter 0.3s",
          filter: "grayscale(100%) brightness(70%)",
        },
      }}
    />
  );
}
