import React from "react";
import { useLocation } from "react-router";

export default function ProjectPage() {
  const location = useLocation();
  const { project } = location.state;
  return (
    <div className="project-page-wrapper">
      <div className="project page image">
        <img src="" alt="" />
      </div>
      <div className="project-page-container">
        <div className="project-page-title-container">
          <div className="project-page-title"></div>
          <div className="project-page-subtitle"></div>
        </div>
      </div>
      <div className="project-page-details">
        <div className="project-page-paragraphs"></div>
        <div className="project-page-link">hello</div>
      </div>
    </div>
  );
}
