import React from "react";
import { useLocation } from "react-router";

import "./projectPage.css";
export default function ProjectPage() {
  const location = useLocation();
  const { project } = location.state;

  // const setMainImages = (imgs) => {
  //   // Get the expanded image
  //   let expandImg = document.getElementById("expandedImg");
  //   // Use the same src in the expanded image as the image being clicked on from the grid
  //   expandImg.src = imgs.src;
  //   // Use the value of the alt attribute of the clickable image as text inside the expanded image
  //   imgText.innerHTML = imgs.alt;
  //   // Show the container element (hidden with CSS)
  //   expandImg.parentElement.style.display = "block";
  // };

  return (
    <div className="project-page-wrapper">
      <div className="project page image">
        <div className="project-page-main-image">
          <img id="expandedImg" src={project.media.gif} type="image/gif" />
        </div>
        {/* <div className="project-page-all-images">
          {project.media.projectImages.map((image) => {
            return <img src={image} />;
          })}
        </div> */}
      </div>
      <div className="project-page-container">
        <div className="project-page-title-container">
          <div className="project-page-title">
            <h1>{project.title}</h1>
          </div>
          <div className="project-page-subtitle">
            {" "}
            <h2>{project.subtitle}</h2>
          </div>
        </div>
        <div className="project-page-details">
          <div className="project-page-paragraphs">
            <p>{project.details.paragraphs}</p>
          </div>
          <div className="project-page-link">
            <p>
              Visit the site:{" "}
              <a href="https://samuel-hinkinson-portfolio.vercel.app/">
                https://samuel-hinkinson-portfolio.vercel.app/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
