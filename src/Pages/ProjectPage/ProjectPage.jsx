import React from "react";
import { useLocation } from "react-router";

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
      <h1>{project.title}</h1>
      {console.log(project.media.projectImages)}
      {project.media.projectImages.map((image) => {
        return <img src={image} key={image} />;
      })}
      {/* <div className="project page image">
        <div className="project-page-main-image">
          <img id="expandedImg" />
        </div>
        <div className="project-page-all-images">
          {project.media.projectImages.map((image) => {
            return <img src={image} />;
          })}
        </div>
      </div>
      <div className="project-page-container">
        <div className="project-page-title-container">
          <div className="project-page-title"></div>
          <div className="project-page-subtitle"></div>
        </div>
      </div>
      <div className="project-page-details">
        <div className="project-page-paragraphs"></div>
        <div className="project-page-link"></div>
      </div> */}
    </div>
  );
}
