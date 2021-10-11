/// <reference types="cypress" />

import react from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "../../src/App";
import cypress from "cypress";
import { mount } from "@cypress/react";

beforeEach(() => {
  cy.visit("http://localhost:3000/ProductPage");
});

describe("My First Test", () => {
  
  it('clicks the link "type"', () => {
    cy.viewport(1920, 1080);
    cy.get('.mr-2').type("Macbook Pro").should("have.value", "Macbook Pro");
    
  });
});
