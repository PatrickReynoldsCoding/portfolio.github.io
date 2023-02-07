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
      media: {
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
      media: {
        gif: "./project_card_images/project-gifs/sweepstakes-high.gif",
        projectImage: "",
      },
    },
    {
      key: "PairUp",
      subtitle: "Connect, Collaborate & Create.",
      details: {
        paragraphs: [
          "PairUp: Connect, Collaborate & Create. Boost your skills through pair programming and share knowledge. Post your projects, join others, and build a network of skilled coders. Join the community now!",
          "The Ultimate Platform for Coders. Are you tired of working on coding projects alone? Are you looking for an opportunity to collaborate with other coders and enhance your skills? Look no further than PairUp! Our platform is designed to connect coders from all over the world, allowing them to work together on projects, engage in pair programming sessions, and share knowledge with each other.",
          "With PairUp, you can create projects, post them on the platform, and find users to join you. Our user-friendly interface makes it easy to connect with other coders who live near you, or who share similar interests and skills. Whether you're a beginner or a seasoned pro, PairUp has something to offer everyone. Join our community today and start building meaningful connections with like-minded coders!",
          "Born from a 5-person team project during the Makers Academy Bootcamp, this cutting-edge platform is perfect for coders looking to collaborate and enhance their skills. The front end is built with React, navigated with React-router-dom, and styled with Material UI React. The database is powered by MongoDB and Mongoose, with user authorization handled through Passport JWT and JSON WEB TOKENS.",
          "Rigorously tested with Jest and Cypress, and integrated through GitHub CI.",
        ],
        links: {
          website: {
            url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
            deployed: true,
          },
          github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
        },
      },
      media: {
        gif: "./project_card_images/project-gifs/PokemonMatch-high.gif",
        projectImage: "",
        youtube: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Tnpo-pIIVx0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ),
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
      media: {
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
      media: {
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
      media: {
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
