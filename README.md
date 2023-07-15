# Cypress POM Bdd

Cypress Page Object Model with BDD - Login Scenario Boiler plate code by Rajdilawar Singh Chandehok

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Test Results](#test-results)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates the usage of Cypress, a JavaScript-based end-to-end testing framework, in combination with the Page Object Model (POM) design pattern and Behavior-Driven Development (BDD) approach. It focuses on testing the login scenario with both correct and wrong login data.

## Setup

To set up and run the tests in this project, follow these steps:

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install project dependencies:

```bash
cd <project-folder>
npm install
```

3. Start the Cypress Test Runner:

```bash
npm run cy:open
```

## Project Structure

The project follows a modular structure based on the Page Object Model design pattern. Here's an overview of the important files and folders:

- `cypress/e2e/features`: Contains the feature files written in the Gherkin syntax. Each feature file represents a high-level test scenario.
- `cypress/pages`: Contains the page objects that encapsulate the interaction with web elements on specific pages.
- `cypress/support/step_definitions`: Contains step definition.
- `cypress/fixtures`: Contains sample test data used during test execution.

## Writing Tests

The tests in this project are written using Cypress along with Cucumber and Gherkin syntax for BDD. Each test scenario is defined in a feature file under the `cypress/e2e/features` folder. The feature files contain a set of steps that are bound to step definitions located in the `cypress/support/step_definitions` folder.

The login scenario is described in the feature file `cypress/e2e/features/login.feature`. It includes two test cases: one for a correct login and another for an incorrect login.

## Running Tests

To execute the tests, follow these steps:

1. Start the Cypress Test Runner:

```bash
npx cypress open
```

2. In the Cypress Test Runner, click on the desired feature file (`login.feature`) to run the tests.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request.
