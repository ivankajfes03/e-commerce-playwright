# Task 1 Instructions

### Instructions:
- Please refer to the `task_1.txt` file located in this directory for detailed information regarding Task 1.
- Inside `task_1.txt`, you will find a description that includes:
  - **1.1. Test Scenarios**: A section dedicated to identifying and detailing the five critical scenarios.
  - **1.2. Test Cases/Acceptance Criteria**: A comprehensive guide on writing detailed test cases/acceptance criteria for the identified scenarios.

# Task 2.1 Instructions

### Browser Driven Functional Testing

### Instructions:
Follow these steps to get the project up and running on your local machine.

#### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) (which includes npm) installed on your system.

1. Clone the Project, pull the project from GitHub to your local machine:
`git clone https://github.com/ivankajfes03/e-commerce-playwright.git`

2. Navigate into the project directory and install the required npm packages, including Playwright, by running:
`npm install`

3. Running Tests using Chromium browser:
- To execute all tests, use the following command:  
`npx playwright test --project chromium --headed`

- To execute single tests, use the following command:  
`npx playwright test tests/web/guest/scenario1/test_scenario1.spec.js --project chromium --headed`  
`npx playwright test tests/web/guest/scenario2/test_scenario2.spec.js --project chromium --headed`  
`npx playwright test tests/web/guest/scenario2/test_scenario2.spec.js --project chromium --headed`

# Task 2.2 Instructions

### Instructions:

1. Running all Api Tests:  
`npx playwright test tests/api`
