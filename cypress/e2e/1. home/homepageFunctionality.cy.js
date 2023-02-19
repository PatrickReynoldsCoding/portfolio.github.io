import viewports from "../../fixtures/viewports.json";

describe("Homepage functionality check", () => {
  viewports.forEach((viewport) => {
    describe(`on ${viewport} viewport`, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        cy.visit("/");
      });

      it("has a functional scroll and loads all elements", () => {
        cy.scrollTo("bottom");
        cy.contains("Find me in these places");
      });

      it("takes the user to the project page and shows project cards", () => {
        cy.get(".top-toggle-container").contains("Projects").click();
        cy.get(".project-card").should("be.visible");
      });
    });
  });
});
