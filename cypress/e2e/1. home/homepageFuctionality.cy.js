describe("Website", () => {
  it("has a functional scroll and loads all elements", () => {
    cy.visit("/");
    cy.scrollTo("bottom");
    cy.contains("Find me in these places");
  });

  it("takes the user to the project page and shows project cards", () => {
    cy.visit("/");
    cy.get(".top-toggle-container").contains("Projects").click();
    cy.get(".project-card").should("be.visible");
  });

  // it("works correctly on different viewport sizes", () => {
  //   cy.viewport("iphone-6");
  //   cy.visit("/");
  //   // add assertions for elements on the page

  //   cy.viewport("macbook-15");
  //   cy.visit("/");
  //   // add assertions for elements on the page
  // });
});
