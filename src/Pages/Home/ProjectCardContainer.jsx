import React from "react";
import "./projects.css";

// components
import ProjectCard from "./ProjectCard";

export default function ProjectCardContainer() {
  const projects = [
    {
      key: "Pokemon Match",
      subtitle:
        "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
    {
      key: "SweepStakes 2022",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
    {
      key: "PairUp",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
    {
      key: "The Facebook",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
    {
      key: "MakersAirBnB",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
    {
      key: "React ToDo app",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: "https://vercel.com/patrickreynoldscoding/pokemon-match",
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "../../public/project_card_images/PokemonMatch(low).gif",
        projectImage: "",
      },
    },
  ];
  return (
    <div className="project-container">
      {projects.map((project) => {
        return <ProjectCard project={project} key={project.key} />;
      })}
    </div>
  );
} //asdasdads
