# Playwright TypeScript Automation Framework

![Playwright Tests](https://github.com/dinarastudio/playwright-test-automation-framework/actions/workflows/playwright.yml/badge.svg)

End-to-end web test automation framework built with **Playwright** and **TypeScript**, integrated with **GitHub Actions CI** and designed using scalable, maintainable test architecture.

This project uses **SauceDemo** as the application under test to demonstrate real-world automation scenarios and best practices.

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions (CI/CD)
- Playwright HTML Reporting


---

## ✅ Test Coverage

### 🔹 Smoke Tests
- Valid user login
- Invalid login validation
- Add product to cart
- Complete checkout flow

### 🔹 Regression Tests
- Checkout validation:
  - Missing first name
  - Missing last name
  - Missing postal code

---

## 🧠 Key Features

- Page Object Model (POM) design pattern
- Clean and reusable test structure
- Separation of test data and logic
- Parallel test execution
- Retry strategy for CI stability
- Automatic screenshots, videos, and traces on failure
- GitHub Actions CI integration
- HTML reporting with Playwright

---

## ▶️ Running Tests Locally

### Install dependencies

npm install
npx playwright install –with-deps

### Run all tests

npm test

### Run only smoke tests

npx playwright test –grep @smoke

---

## 🔁 CI/CD (GitHub Actions)

Tests run automatically on:
- Pull Requests
- Push to `main`

Pipeline includes:
- Installing dependencies
- Installing Playwright browsers
- Running tests
- Uploading test artifacts (reports, screenshots, traces)

---

## 📊 Test Reports

To view HTML report locally:

npx playwright show-report

CI artifacts include:
- HTML report
- screenshots on failure
- video recordings
- execution traces

---

## 🔐 Test Data

Default SauceDemo credentials:

Username: standard_user
Password: secret_sauce

---

## 📌 Design Decisions

- SauceDemo chosen for stability and reproducibility
- Page Object Model used for maintainability and scalability
- Tests split into **smoke** and **regression** suites
- Selectors use `data-test` attributes and role-based locators to reduce flakiness
- Validation scenarios included to improve real-world coverage

---

## 🚧 Future Enhancements

- API + UI hybrid testing
- Custom Playwright fixtures for reusable setup
- Cross-browser execution in CI
- Advanced reporting (Allure)
- Accessibility testing (axe)
- Test data enhancement
- Test tagging strategy expansion (@regression, @sanity)

## 📄 License

This project is for demonstration and portfolio purposes only.
