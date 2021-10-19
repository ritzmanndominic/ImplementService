/// <reference types="cypress" />

import react from "react";

beforeEach(() => {
  cy.visit("http://localhost:3000/ProductPage");
});

describe("My First Test", () => {
  
  it('clicks the link "type"', () => {
    cy.viewport(1920, 1080);
    cy.get('.mr-2').type("Macbook Pro").should("have.value", "Macbook Pro");
    
  });
});
