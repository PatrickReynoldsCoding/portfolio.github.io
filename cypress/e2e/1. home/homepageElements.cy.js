import viewports from "../../fixtures/viewports.json";

describe("Homepage element check", () => {
  viewports.forEach((viewport) => {
    describe(`on ${viewport} viewport`, () => {
      beforeEach(() => {
        cy.viewport(viewport);
        cy.visit("/");
      });

      it("renders the logo correctly", () => {
        cy.get(".logo").should("be.visible");
      });

      it("renders the top toggle correctly", () => {
        cy.get(".top-toggle-container").should("be.visible");
      });
    });
  });
});
