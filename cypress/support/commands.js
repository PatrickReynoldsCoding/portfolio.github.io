// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("runTestsThroughViewports", () => {
  const viewports = [
    "ipad-2",
    "ipad-mini",
    "iphone-3",
    "iphone-4",
    "iphone-5",
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

  viewports.forEach((viewport) => {
    cy.viewport(viewport);
    describe(`Running tests on ${viewport} viewport`, () => {
      beforeEach(() => {
        cy.log(`Running test on ${viewport} viewport`);
      });

      // Run all the tests here
      // ...
    });
  });
});
