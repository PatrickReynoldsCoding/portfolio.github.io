import React, { useEffect, useRef } from "react";
import "./about.css";

export default function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    // Set up the IntersectionObserver in the effect hook
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
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
      if (observerRef.current) {
        // Check if the observerRef.current is not null before calling its methods
        observerRef.current.disconnect();
      }
    };
  }, []);
  return (
    <div>
      <article className="about-container">
        <div ref={observerRef} className="scroll-area">
          <section className="hidden">
            <h2 className="underline-sweep hidden"> Hi. I am Patrick</h2>
            <p>
              I am a fullstack developer living in london with a passion for
              building apps and experimenting with cool tech. I love hiking,
              boardgames and making bad music.
              {/* <br />
              <br />
              Tech Skills: JavaScript, React.js, Node.js, Express, Jest,
              Cypress, HTML, SCSS, CSS, Ruby, Sinatra, RSpec */}
            </p>
          </section>
        </div>
        <div ref={observerRef} className="scroll-area">
          <section className="hidden left">
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
          <section className="hidden">
            <h2>If you want to get in touch find me in these places</h2>
            <p>
              Email:{" "}
              <a href="https://mail.google.com/mail/u/0/?fs=1&to=PatrickReynolds@gmail.com&su=Hi%20Paddy&body=&tf=cm">
                PatrickReynolds@gmail.com
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/reynolds-patrick/">
                https://www.linkedin.com/in/reynolds-patrick/
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a href="https://github.com/PatrickReynoldsCoding/">
                https://github.com/PatrickReynoldsCoding/
              </a>
            </p>
            <p>
              YouTube:{" "}
              <a href="https://www.youtube.com/@ReynoldsPatrick">
                https://www.youtube.com/@ReynoldsPatrick
              </a>
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
