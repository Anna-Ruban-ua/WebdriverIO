# Telnyx Autotest WebdriverIO TypeScript

## Summary of Repo

This repository contains automated UI tests for the Telnyx website, implemented using WebdriverIO and TypeScript. The project uses the Page Object Model (POM) structure and is configured to run tests in Chrome, Firefox, and Docker environments. Allure Report is integrated for test reporting, and CI/CD is handled via GitHub Actions.

## Test Cases

Detailed test cases are documented in [this spreadsheet](https://docs.google.com/spreadsheets/d/1kseA19mz9KTTrFpkDTaiH6Goj3PPxELe0FnmTtAIUak/edit?gid=1842555063#gid=1842555063).

## Requirements

- Node.js (latest LTS version recommended)
- TypeScript
- WebdriverIO
- Allure Commandline
- Docker (for containerized test execution)
- GitHub (for version control and CI/CD integration)
- GitHub Actions (for automated pipeline)

## Install

1. Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/WebdriverIO
   ```
2. Navigate to the project directory:
   ```sh
   cd WebdriverIO
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Run tests

### Run all tests:
```sh
npm run test
```

### Run tests with specific browser:
```sh
npm run test:chrome
npm run test:firefox
```

### Run tests in headless mode:
```sh
npm run test:chrome:headless
npm run test:firefox:headless
```

### Run tests with browser-specific config:
```sh
npm run test:chrome:config
npm run test:firefox:config
```

## Allure Report

### Generate and open report locally:
```sh
npm run allure:run:report
```

## Docker

### Build Docker image:
```sh
npm run docker:build
```

### Run tests inside Docker:
```sh
npm run docker:run
```

## CI and Allure Report

CI/CD is configured through GitHub Actions. On every push to the `main` branch:
- Docker builds the test environment
- WebdriverIO tests are run inside the container
- Allure report is generated
- The report is deployed to GitHub Pages

Allure Report provides rich analytics, test history, and visual insights into test runs.


