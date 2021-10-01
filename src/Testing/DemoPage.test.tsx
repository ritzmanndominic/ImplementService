import { mount } from "@cypress/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import DemoPage from "../DemoPage";

beforeEach(() => {
    mount(<BrowserRouter>
        <DemoPage />
    </BrowserRouter>);
});

it("renders 'Hello world!' correctly", () => {
    // Contains
    cy.get("h4").contains("Hello world!");

    // Should
    cy.get("h4").should("contain.text", "Hello world!");
});

it("displays entered name", () => {
    // Go to next page
    cy.get("button").click();

    // Type name
    cy.get("input[type='text']").type("Max Mustermann");

    // Click button
    cy.get("button:first-child").click();

    // Check display
    cy.get("h2").contains("Max Mustermann");
});

it("displays API data correctly", () => {
    // Set data
    const popes = [
        {
            id: 1,
            name: "FRANCISCVS",
            personalName: "Jorge Mario Bergoglio",
            birthYear: 2013
        },
        {
            id: 2,
            name: "BENEDICTVS",
            personalName: "Joseph Aloisius Ratzinger",
            birthYear: 2005
        },
        {
            id: 3,
            name: "IOANNES PAVLVS",
            personalName: "Karol Józef Wojtyła",
            birthYear: 1978
        },
        {
            id: 4,
            name: "IOANNES PAVLVS",
            personalName: "Albino Luciani",
            birthYear: 1978
        },
        {
            id: 5,
            name: "PAVLVS",
            personalName: "Giovanni Battista Enrico Antonio Maria Montini",
            birthYear: 1963
        }
    ];

    // Intercept API call
    cy.intercept("http://example.api/popes", popes).as("popeList");

    // Go to page 3
    cy.get("button").click();
    cy.get("[data-testid='nextButton']").click();

    // Wait for API call
    cy.wait("@popeList").then(() => {
        for (let i = 0; i < popes.length; i++) {
            cy.get(`[data-rowindex='${i}']`).first().contains(popes[i].name);
            cy.get(`[data-rowindex='${i}']:nth-child(2)`).contains(popes[i].personalName);
            cy.get(`[data-rowindex='${i}']`).last().contains(popes[i].birthYear);
        }
    });
});