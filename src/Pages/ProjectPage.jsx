import React from "react";
import { useLocation } from "react-router";

export default function ProjectPage() {
  const location = useLocation();
  const { project } = location.state;
  return (
    <h1 style={{ color: "white", zIndex: "2", paddingTop: "100px" }}>
      {project.name}
    </h1>
  );
}
