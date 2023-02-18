describe("Website", () => {
  it("renders the logo correctly", () => {
    cy.visit("/");
    cy.get(".logo").should("be.visible");
  });

  it("renders the top toggle correctly", () => {
    cy.visit("/");
    cy.get(".top-toggle-container").should("be.visible");
  });
});
