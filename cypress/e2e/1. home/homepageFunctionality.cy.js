const viewports = [
  "iphone-6",
  "iphone-6+",
  "iphone-7",
  "iphone-8",
  "iphone-x",
  "iphone-xr",
  "iphone-se2",
  "macbook-11",
  "macbook-13",
  "macbook-15",
  "macbook-16",
  "samsung-note9",
  "samsung-s10",
];

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
