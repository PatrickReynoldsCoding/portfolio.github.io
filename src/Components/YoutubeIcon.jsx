import React from "react";
import icon from "../../src/assets/latest-sphere-logo.png";
export default function YoutubeIcon() {
  return (
    <div>
      <a href="https://www.youtube.com/@ReynoldsPatrick">
        <img
          src={icon}
          alt="YouTube Channel"
          style={{ width: "auto", height: "60px" }}
        />
      </a>
    </div>
  );
}
