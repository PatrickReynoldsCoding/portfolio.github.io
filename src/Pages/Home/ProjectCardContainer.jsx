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
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
        projectImage: "",
      },
    },
    {
      key: "SweepStakes 2022",
      subtitle:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
      details: "",
      links: {
        website: {
          url: "https://chowie.uk/",
          deployed: false,
        },
        github: "https://github.com/chowieuk/sweepstakes-app",
      },
      images: {
        gif: "./project_card_images/project-gifs/sweepstakes-high.gif",
        projectImage: "",
      },
    },
    {
      key: "PairUp",
      subtitle:
        "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
      details: "",
      links: {
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
        projectImage: "",
      },
    },
    {
      key: "The Facebook",
      subtitle:
        "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
      details: "",
      links: {
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
        projectImage: "",
      },
    },
    {
      key: "MakersAirBNB",
      subtitle:
        "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
      details: "",
      links: {
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
        projectImage: "",
      },
    },
    {
      key: "React Todo app",
      subtitle:
        "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
      details: "",
      links: {
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
      images: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
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
}
