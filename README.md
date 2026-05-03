# 🚀 Playwright E2E Automation - Sauce Demo

An End-to-End (E2E) test automation project for the [Sauce Demo Shopify](https://sauce-demo.myshopify.com/) website. This project is built using **Playwright** and implements an **Object-Oriented Programming (OOP)** architecture alongside the **Page Object Model (POM)** design pattern to ensure scalable, maintainable, and robust test scripts.

## ✨ Key Features

- **Page Object Model (POM) & OOP:** Separation of page elements and interactions from test scripts using class-based objects.
- **Custom Fixtures:** Clean and encapsulated setup/teardown mechanisms using native Playwright fixtures.
- **Custom Utilities:** A collection of reusable helper functions to handle repetitive tasks and logic.
- **Parallel & Headless Execution:** Supports multi-worker parallel testing and headless mode to optimize CI/CD execution time.
- **Custom CLI & Tagging:** Run specific test suites dynamically via custom CLI flags/grep.
- **Jenkins CI/CD Integration:** Automated test execution pipeline with parameterized builds.
- **Slack Integration:**
  - 📊 Detailed test report notifications (Passed, Failed, Skipped, Duration, and HTML Report Link).
  - 🤖 **Interactive Slash Commands:** Trigger Jenkins pipelines remotely directly from your Slack workspace.

---

## 📂 Project Structure

```text
├── pages/                  # Page Object classes (OOP implementation)
├── fixtures/               # Custom Playwright fixtures configurations
├── tests/                  # Main test script files (*.spec.ts / *.spec.js)
├── utils/                  # Custom reusable helper/utility functions
├── test-results/           # Output directory for test logs and results.json
├── playwright-report/      # Output directory for Playwright HTML reports
├── Jenkinsfile             # Declarative Jenkins pipeline configuration
├── playwright.config.ts    # Main Playwright configuration file
└── README.md               # Project documentation
```

## 🛠️ Prerequisites & Local Setup

Ensure you have the following installed on your local machine:

- **Node.js** (Version 18 or newer is recommended)
- **Git**

### Installation Steps

1. Clone this repository:

```bash
git clone https://github.com/Eimdy/playwright.git
cd playwright
```

2. Install project dependencies:

```bash
npm install
```

3. Install Playwright browsers and OS dependencies:

```bash
npx playwright install chromium
```

---

## 💻 Test Execution (Local CLI)

This project utilizes Playwright's native CLI along with custom configurations. You can run the following commands in your terminal:

**Run all tests** (Default: Headless & Parallel):

```bash
npx playwright test
```

**Run specific tests using Tags/Grep** (e.g., Smoke Test):

```bash
npx playwright test --grep @SMOKE
```

**Run tests in parallel** with a custom number of workers (e.g., 2 workers):

```bash
npx playwright test --workers=2
```

**Combine parameters** (Tagging & Workers):

```bash
npx playwright test --grep @REGRESSION --workers=4
```

**View the HTML Report** (after test completion):

```bash
npx playwright show-report
```

---

## ⚙️ Jenkins CI/CD Integration

This project includes a `Jenkinsfile` utilizing the **Declarative Pipeline** syntax. It supports automated and on-demand runs via **Build with Parameters**:

| Parameter     | Description                                              | Default |
|---------------|----------------------------------------------------------|---------|
| `BRANCH_NAME` | The Git branch to checkout and test                      | `main`  |
| `TYPE`        | Test suite filter (`All`, `@SMOKE`, `@REGRESSION`)       | `All`   |
| `WORKERS`     | Number of parallel workers to allocate                   | `1`     |

### Pipeline Flow

1. **Setup:** Downloads and configures Node.js & project dependencies.
2. **Checkout:** Pulls the specified branch from the repository.
3. **Execution:** Runs the tests based on the selected CLI parameters.
4. **Artifacts:** Archives build artifacts (Playwright HTML Report & `results.json`).
5. **Post-Build:** Triggers notifications and status updates via Slack.

---

## 💬 Slack Integration & Slash Commands

### 📊 Automated Notifications

Upon pipeline completion (whether successful or failed), Jenkins reads the `results.json` file and pushes a visually formatted summary to the designated Slack channel. The notification includes:

- Build Status (Color-coded: 🟢 Green for Pass, 🔴 Red for Fail)
- Total Test, Passed, Failed, and Skipped counts
- Execution Duration
- A direct hyperlink to the Jenkins-hosted full HTML Report

### 🤖 Interactive Slash Commands

You can remotely trigger Jenkins builds directly from Slack without accessing the Jenkins dashboard using custom Slash Commands.

| Command          | Description                                          |
|------------------|------------------------------------------------------|
| `/run-smoke`     | Triggers a build executing only tests tagged `@SMOKE` |
| `/run-regression`| Triggers a build executing tests tagged `@REGRESSION` |
| `/run-all`       | Triggers a build executing the entire test suite      |

> **Note:** These commands are securely routed to Jenkins using the **Build Authorization Token Root** plugin endpoint.
