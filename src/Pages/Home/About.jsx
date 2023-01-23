import React from "react";
import styled from "styled-components";

const AboutMeBoxContainer = styled.div`
  display: flex;
`;

const AboutMeBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0px;
  height: 60px;
  width: 100vw;
  background-color: #333;
  color: #fff;
`;

export default function About() {
  return (
    <div>
      <AboutMeBoxContainer>
        <AboutMeBox>
          Lorem ipsum dolor sit amet. Maiores exercitationem harum rerum nobis!
          In dolor ipsa blanditiis perspiciatis! Eius aliquid rem exercitationem
          nihil. Ipsa accusantium hic laborum vero. Porro tempore voluptates
          explicabo quis? Quidem iste maiores exercitationem odit? Dolorem
          accusamus et consequatur tempora? Dolore, debitis! Vero, ratione
          minus. Iusto saepe odit nam sint?
        </AboutMeBox>
      </AboutMeBoxContainer>
    </div>
  );
}
