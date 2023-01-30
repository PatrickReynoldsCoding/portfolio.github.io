import React from "react";

export default function BugFix(props) {
  const handleClick = () => {
    props.switchPage("hello");
  };
  return (
    <button style={{ paddingTop: "100px" }} onClick={handleClick}></button>
  );
}
