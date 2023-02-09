import axios from "axios";

const getImageFiles = async () => {
  let fileNames = [];
  let response = await axios.get(
    "../../public/project-images/samuel-hinkinson-ux-portfolio/project-page/pinball.png"
  );
  let files = response.data;

  for (let file of files) {
    if (file.match(/\.(jpg|jpeg|png|gif)$/)) {
      fileNames.push(file);
    }
  }

  return fileNames;
};

// projectImages: function () {
//       return `../../public/project-images/${this.key}/project-page/pinball.png`;
//     },

const projects = [
  {
    title: "Samuel Hinkinson UX Portfolio",
    inDevelopment: true,
    key: "samuel-hinkinson-ux-portfolio",
    subtitle: "A portfolio site for UX designer Samuel Hinkinson",
    details: {
      paragraphs: [],
      links: {
        website: {
          url: "https://samuel-hinkinson-portfolio.vercel.app/",
          deployed: true,
        },
        github:
          "https://github.com/PatrickReynoldsCoding/samuel-hinkinson-portfolio",
      },
    },

    media: {
      gif: "./project-images/project-gifs/samuel-hinkinson-dot-com.gif",
      // projectImages: getImageFiles(),
    },
  },
  {
    title: "Pokemon Match",
    inDevelopment: true,
    key: "pokemon-match",
    subtitle:
      "A Pokemon memory match game. Match all 6 pokemon to set 3 stars. But, Watch out for Team Rocket",
    details: {
      paragraphs: [],
      links: {
        website: {
          url: "https://vercel.com/patrickreynoldscoding/pokemon-match",
          deployed: true,
        },
        github: "https://github.com/PatrickReynoldsCoding/pokemon-match",
      },
    },

    media: {
      gif: "./project-images/project-gifs/PokemonMatch-high.gif",
      projectImages: "",
    },
  },
  {
    title: "Sweepstakes 2022",
    inDevelopment: false,
    key: "sweepstakes-2022",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, consequatur!",
    details: {
      paragraphs: [],
      links: {
        website: {
          url: "https://chowie.uk/",
          deployed: false,
        },
        github: "https://github.com/chowieuk/sweepstakes-app",
      },
    },
    media: {
      gif: "./project-images/project-gifs/sweepstakes-high.gif",
      projectImages: "",
    },
  },
  {
    title: "PairUp",
    inDevelopment: false,
    key: "pair-up",
    subtitle: "Connect, Collaborate & Create.",
    details: {
      paragraphs: [
        "PairUp: Connect, Collaborate & Create. Boost your skills through pair programming and share knowledge. Post your projects, join others, and build a network of skilled coders. Join the community now!",
        "The Ultimate Platform for Coders. Are you tired of working on coding projects alone? Are you looking for an opportunity to collaborate with other coders and enhance your skills? Look no further than PairUp! Our platform is designed to connect coders from all over the world, allowing them to work together on projects, engage in pair programming sessions, and share knowledge with each other.",
        "With PairUp, you can create projects, post them on the platform, and find users to join you. Our user-friendly interface makes it easy to connect with other coders who live near you, and who share similar interests and skills. Or connect with coders long distance using our proprietary video chat software for a seamless collaboration experience. Whether you're a beginner or a seasoned pro, PairUp has something to offer everyone. Join our community today and start building meaningful connections with like-minded coders!",
        "Born from a 5-person team project during the Makers Academy Bootcamp, this platform is designed to enhance your coding skills through collaboration. The front-end is built with React, navigated with React-router-dom, and styled with Material UI React. The database is powered by MongoDB and Mongoose, with user authorization handled through Passport JWT and JSON WEB TOKENS. The video chat is powered by socket.io and simple-peer. Rigorously tested with Jest and Cypress, and integrated through GitHub CI, this platform offers a seamless experience for coders to connect and work together.",
      ],
      links: {
        website: {
          url: null,
          deployed: false,
        },
        github: "https://github.com/PatrickReynoldsCoding/pair-up-live/",
      },
    },
    media: {
      gif: "./project-images/project-gifs/pair-up-high.gif",
      projectImages: "",
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
    title: "MERN Todo app",
    inDevelopment: false,
    key: "mern-todo-app",
    subtitle: "",
    details: "",
    links: {
      website: {
        url: null,
        deployed: false,
      },
      github: "https://github.com/PatrickReynoldsCoding/react_todo_app",
    },
    media: {
      gif: "./project-images/mern-todo-app/MERN-Todo-app.png",
      projectImages: "",
    },
  },
  {
    title: "Acebook",
    inDevelopment: false,
    key: "acebook",
    subtitle: "A Facebook clone focusing on backend technologies",
    details: {
      paragraphs: [
        "Welcome to Acebook! We took everything that people liked about Facebook and made our own version without invading your privacy...or are we mining your data? You'll never know, without diving into the source code above.",
        "This Makers Academy Bootcamp project, Acebook, is a simplified version of a social media platform built with a focus on its backend technology stack.",
        "The project utilized Express, a popular web framework for Node.js, to handle server-side routing and operations. Nodemon was used to automatically reload the server during development, while Handlebars was utilized to render view templates. Mongoose was employed to model data objects in MongoDB, ensuring efficient and organized data management. ESLint was utilized for linting and Jest was employed for testing to ensure code quality. End-to-end testing was performed using Cypress, and the project was integrated with Github for Continuous Integration (CI).",
        "This one-week project focused on mastery of key backend technologies and best practices.",
      ],
      links: {
        website: {
          url: "",
          deployed: false,
        },
        github: "https://github.com/PatrickReynoldsCoding/the-fakebook",
      },
    },
    media: {
      gif: "./project-images/project-gifs/acebook-project-image.png",
      projectImages: "",
    },
  },
  {
    title: "MakersBNB",
    inDevelopment: false,
    key: "makers-bnb",
    subtitle:
      "A web application that allows users to list spaces they have available, and to hire spaces for the night.",
    details: "",
    links: {
      website: {
        url: null,
        deployed: false,
      },
      github: "https://github.com/raphaella-rose/makersbnb",
    },
    media: {
      gif: "./project-images/makers-bnb/makerbnb-add-property.png",
      projectImages: "",
    },
  },
];

export default projects;
