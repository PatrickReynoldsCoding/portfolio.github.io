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
