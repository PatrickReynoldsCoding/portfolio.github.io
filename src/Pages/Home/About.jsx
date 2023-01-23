import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import "./about.css";

export default function About() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current.disconnect();
  }, []);
  return (
    <div>
      <section ref={observerRef} className="hidden">
        <h2>Yo sup my doodes</h2>
        <p>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </p>
      </section>
      <section ref={observerRef} className="hidden">
        <h2>Yo sup my doodes</h2>
        <p>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </p>
      </section>
      <section ref={observerRef} className="hidden">
        <h2>Yo sup my doodes</h2>
        <p>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </p>
      </section>
      <section ref={observerRef} className="hidden">
        <h2>Yo sup my doodes</h2>
        <p>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </p>
      </section>
      <section ref={observerRef} className="hidden">
        <h2>Yo sup my doodes</h2>
        <p>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </p>
      </section>
    </div>
  );
}
