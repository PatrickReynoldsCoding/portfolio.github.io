import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

export default function ProjectCard(props) {
  return (
    <div className="project-card">
      <img
        className="project-card-img"
        src={props.project.media.gif}
        type="image/gif"
      />
      <div className="project-card-text">
        <h3>{props.project.key}</h3>
      </div>
    </div>
  );
}
