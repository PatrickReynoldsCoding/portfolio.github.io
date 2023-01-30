import React, { useEffect, useRef } from "react";
import "./about.css";

// Components
import TopToggle from "./TopToggle";
import { HomeAnimation } from "./HomeAnimation";

export default function About() {
  const observerRef = useRef(null);

  // useEffect(() => {
  //   observerRef.current = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //         window.scrollTo({
  //           top: entry.target.offsetTop - window.innerHeight / 2,
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });
  //   const hiddenElements = document.querySelectorAll(".hidden");
  //   hiddenElements.forEach((el) => observerRef.current.observe(el));
  //   return () => observerRef.current.disconnect();
  // }, []);
  return (
    <div>
      <article className="about-container">
        <div ref={observerRef} className="scroll-area">
          <section className="hidden">
            <h2>About</h2>
            <p>
              I am a dedicated developer with a passion for building apps and
              websites. <br />
              <br />
              Recently completing a 16-week coding Bootcamp at Makers.com I am
              now seeking employment opportunities to further advance my skills
              and portfolio. I am particularly focused on expanding my knowledge
              of design principles and exploring new and exciting areas of
              development.
              <br />
              <br />
              Tech Skills: JavaScript, React.js, Node.js, Express, Jest,
              Cypress, HTML, SCSS, CSS, Ruby, Sinatra, RSpec
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="hidden left">
            <h2>Yo sup my doodes</h2>
            <p>
              Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum
              nobis! In dolor ipsa blanditiis perspiciatis! Eius aliquid rem
              exercitationem nihil. Ipsa accusantium hic laborum vero. Porro
              tempore voluptates explicabo quis? Quidem iste maiores
              exercitationem odit? Dolorem accusamus et consequatur tempora?
              Dolore, debitis! Vero, ratione minus. Iusto saepe odit nam sint?
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="hidden">
            <h2>Yo sup my doodes</h2>
            <p>
              Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum
              nobis! In dolor ipsa blanditiis perspiciatis! Eius aliquid rem
              exercitationem nihil. Ipsa accusantium hic laborum vero. Porro
              tempore voluptates explicabo quis? Quidem iste maiores
              exercitationem odit? Dolorem accusamus et consequatur tempora?
              Dolore, debitis! Vero, ratione minus. Iusto saepe odit nam sint?
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="hidden left">
            <h2>Yo sup my doodes</h2>
            <p>
              Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum
              nobis! In dolor ipsa blanditiis perspiciatis! Eius aliquid rem
              exercitationem nihil. Ipsa accusantium hic laborum vero. Porro
              tempore voluptates explicabo quis? Quidem iste maiores
              exercitationem odit? Dolorem accusamus et consequatur tempora?
              Dolore, debitis! Vero, ratione minus. Iusto saepe odit nam sint?
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="hidden left">
            <h2>Yo sup my doodes</h2>
            <p>
              Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum
              nobis! In dolor ipsa blanditiis perspiciatis! Eius aliquid rem
              exercitationem nihil. Ipsa accusantium hic laborum vero. Porro
              tempore voluptates explicabo quis? Quidem iste maiores
              exercitationem odit? Dolorem accusamus et consequatur tempora?
              Dolore, debitis! Vero, ratione minus. Iusto saepe odit nam sint?
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
