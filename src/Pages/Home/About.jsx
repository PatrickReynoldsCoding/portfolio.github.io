import React, { useEffect, useRef } from "react";
import "./about.css";

export default function About(props) {
  const observerRef = useRef(null);

  useEffect(() => {
    // Set up the IntersectionObserver in the effect hook
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          // snap to position
          // window.scrollTo({
          //   top: entry.target.offsetTop - window.innerHeight / 2,
          //   left: 0,
          //   behavior: "smooth",
          // });
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    // Observe hidden elements in the DOM
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observerRef.current.observe(el));

    // Return a cleanup function to disconnect the IntersectionObserver when the component is unmounted
    return () => {
      // Check if the observerRef.current is not null before calling its methods
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <article className="about-container">
        <div ref={observerRef} className="scroll-area">
          <section className="about-page-section hidden">
            <h2 className="underline-sweep hidden">About</h2>
            <p>
              I am a fullstack developer with a passion for building apps,
              websites and experimenting with fun stuff. <br />
              <br />
              Tech Skills: JavaScript, React.js, Node.js, Express, Jest,
              Cypress, HTML, SCSS, CSS, Ruby, Sinatra, RSpec
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="about-page-section hidden left">
            <h2>Experience</h2>
            <h3>Makers Academy • Full stack developer bootcamp</h3>

            <ol>
              <p>Graduate of a 16-week intensive bootcamp</p>
              <p>
                Adept at utilizing Agile principles in a team setting, including
                iterative software development, small feature implementation,
                and 1-3 week sprints for efficient delivery of value to
                customers/business. Skilled in daily standups, retrospectives,
                breaking work into smaller tasks and sprint planning using a
                Kanban framework for continuous improvement and customer
                feedback
              </p>
              <p>Pair programming on a daily basis</p>
              <p>
                Getting feedback on my coding process via code reviews with
                coaches/fellow students
              </p>
              <p>Understanding the fundamentals of object-oriented languages</p>
              <p>Ability to write clear, simple, test-driven code</p>
              <p>
                Interpreting project briefs, creating user stories, defining
                MVPs
              </p>
              <p>Using GitHub for version control on group projects</p>
              <p>
                Participated in group projects, honing my ability to work
                effectively in a team and effectively present my work to others
              </p>
            </ol>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="about-page-section hidden">
            <h2>Skills</h2>
            <h3>Software</h3>
            <ul>
              <li>JavaScript, React.js, Node.js, Express, Jest, Cypress</li>
              <li>Ruby, Sinatra, RSpec</li>
              <li>HTML, SCSS, CSS</li>
              <li>Tailwind, Bootstrap</li>
              <li>SQL, Postgres Excel</li>
            </ul>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="about-page-section hidden left">
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
          <section className="about-page-section hidden left">
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
