Saucedemo QA Take-Home Test

This repository contains the deliverables for the QA Engineer Take-Home Test. It covers both manual testing (test plan, test cases, bug reporting, exploratory notes, test report) and automation testing using Playwright.

Project Structure
project/
tests/
login.spec.js       # Login flow
cart.spec.js        # Add and remove items from cart
checkout.spec.js    # Checkout flow
logout.spec.js      # Logout flow
tests/pages/
login.page.js       # Page Object Model for login
playwright.config.js    # Playwright configuration
package.json
.gitignore
README.md

Setup
Prerequisites
Node.js (>=16.x recommended)
npm (comes with Node.js)
Installation

From the project root:
npm install
npx playwright install

Running Tests
Run all tests across Chromium, Firefox, and WebKit:
npx playwright test

Run a specific test file:
npx playwright test tests/login.spec.js

Run tests in headed mode (see the browser):
npx playwright test --headed

Reports
Generate and open the HTML test report:
npx playwright show-report
The report will be served locally (default: http://localhost:9323).

Automated Test Coverage
Login with valid credentials
Add item to cart and verify badge
Remove item from cart
Complete checkout flow (name, address, finish order)
Logout

All tests are executed across Chromium, Firefox, and WebKit.
Login is implemented using the Page Object Model (POM).

Manual Deliverables
Test Plan – approach, scope, risks, and effort estimation
Test Cases – 45 structured scenarios (positive and negative)
Bug Reporting – based on rejected cases with severity
Exploratory Notes – usability and edge case findings
Test Report – execution summary (42 passed, 3 rejected)

Continuous Integration
This repository includes a GitHub Actions workflow (.github/workflows/playwright.yml) that runs Playwright tests on each push and pull request.
The workflow uploads the HTML test report as an artifact.

Add build status badge to your README:
![Playwright Tests](https://github.com/fromdeen/saucedemo-qa-automation/actions/workflows/playwright.yml/badge.svg)

Additional Features
Screenshots and video recording on failure
Trace viewer for debugging
Parallel execution enabled
Ready for CI/CD integration
