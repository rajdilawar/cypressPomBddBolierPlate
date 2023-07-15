import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
    import { LoginPage } from "../../pages/LoginPageClass";
    const loginPage = new LoginPage();

  Given("A web browser is at the saucelabs login page", () => {
    cy.visit("/");
  });
  
  When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
    loginPage.submitLogin(username,password)
  });
  
  When("A user enters incorrect credentials, and clicks the login button", (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password)
    });
  });
  Then("the url will contains the inventory", () => {
    cy.url().should("contains", "/inventory.html");
  });
  Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
  });