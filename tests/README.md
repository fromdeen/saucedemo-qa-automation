Saucedemo QA Take-Home Test

This repository contains the deliverables for the QA Engineer Take-Home Test. It covers both manual testing (test plan, test cases, bug reporting, exploratory notes, test report) and automation testing using Playwright.

Project Structure
project/
├── tests/
│   ├── login.spec.js       # Login flow
│   ├── cart.spec.js        # Add and remove items from cart
│   ├── checkout.spec.js    # Checkout flow
│   └── logout.spec.js      # Logout flow
├── playwright.config.js    # Playwright configuration
├── package.json
├── README.md
└── playwright-report/      # Generated test report (after execution)

Setup
Prerequisites

Node.js (version 16.x or later recommended)

npm (comes with Node.js)

Installation

From the project root directory, run:

npm install
npx playwright install

Running Tests

Run all tests across Chromium, Firefox, and WebKit:

npx playwright test


Run a specific test file:

npx playwright test tests/login.spec.js


Run tests in headed mode (with browser visible):

npx playwright test --headed

Reports

Generate and open the HTML test report:

npx playwright show-report


The report will be available at http://localhost:9323 by default.

Automated Test Coverage

Login with valid credentials

Add item to cart and verify badge

Remove item from cart

Complete checkout flow (name, address, finish order)

Logout

All tests are executed across Chromium, Firefox, and WebKit.

Manual Deliverables

Test Plan – describes approach, scope, risks, and effort estimation

Test Cases – 45 structured scenarios, including both positive and negative

Bug Reporting – documented based on failed/rejected cases with severity

Exploratory Notes – observations on login, product listing, cart, checkout, and logout

Test Report – execution summary: 45 total, 42 passed, 3 rejected

Additional Features

Screenshots and video recording on failure

Trace viewer for debugging

Parallel execution enabled

Configurable for CI/CD pipelines (e.g., GitHub Actions)