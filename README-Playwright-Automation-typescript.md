# Playwright Automation with TypeScript — Learning Journey 🎓

A structured, chapter-by-chapter learning repository for mastering **UI test automation with Playwright and TypeScript** — from writing your first test to handling advanced scenarios like iframes, visual testing, environment configuration, and test reporting.

This isn't a single test suite for one application — it's a **personal playground and course log**, where each chapter builds on the last and captures a new Playwright concept with a hands-on, working example.

## 🎯 Purpose

This repository exists to practice and document Playwright fundamentals in a progressive way:

- Each **chapter** = one learning milestone
- Each **spec file** = one concept, demonstrated with a runnable test
- Real sites (Google, YouTube, GitHub, jQuery UI demos, DemoQA) are used as practice targets so the tests reflect real-world DOM challenges

## 🛠️ Tech Stack

- **[Playwright](https://playwright.dev/)** – Browser automation & test runner
- **TypeScript** – Primary language for tests
- **[Allure Report](https://allurereport.org/)** – Rich HTML test reporting
- **dotenv** – Environment variable management
- **2captcha-nodejs** – CAPTCHA-solving library (introduced for advanced scenarios)

## 🗺️ Learning Roadmap

| Chapter | Focus Area | What's Covered |
|---|---|---|
| **Chapter 01 – Getting Started** | Fundamentals | Writing your first test, using Codegen, recording tests at cursor, basic navigation & assertions |
| **Chapter 02 – Core Interactions** | Locators & Actions | Screenshots (element/page/full-page), locator strategies, hooks (`beforeAll`/`afterEach`), dropdowns, iframes & drag-and-drop, mouse actions, keyboard actions, date pickers, hard vs. soft assertions |
| **Chapter 03 – Test Organization** | Structuring Tests | Annotations, grouping tests with `describe`, tags for selective runs, retries, data-driven/parametrized tests, visual regression testing, custom timeouts |
| **Chapter 04 – Runtime & Reporting** | Browser Context & Debugging | Multiple browser contexts/tabs, rerunning failed tests, handling alerts/popups, HTML test reports, reading text content & attributes, iterating over multiple elements |
| **Chapter 05 – Configuration** | Environment Management | Reading values from a `.env` file with `dotenv` instead of hardcoding URLs/credentials |

Each chapter lives in its own folder under `tests/`, so you can jump straight to the topic you want to review.

## 📁 Project Structure

```
Playwright-Automation-typescript
├── tests/
│   ├── Chapter01/   # First tests, codegen, recording
│   ├── Chapter02/   # Locators, hooks, interactions, assertions
│   ├── Chapter03/   # Annotations, grouping, tags, retries, visual testing
│   ├── Chapter04/   # Browser context, alerts, reports, element iteration
│   ├── Chapter05/   # Reading config from .env
│   └── seed.spec.ts # Empty seed file for scaffolding new tests
├── specs/
│   └── README.md    # Notes for test-plan style specs
├── Screenshots/      # Output from screenshot exercises (Chapter 02)
├── .env.example      # Template for local environment variables
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── .github/workflows/playwright.yml  # CI: runs the suite on push/PR
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/vamsimappetti2001/Playwright-Automation-typescript.git
   cd Playwright-Automation-typescript
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Install Playwright browsers
   ```bash
   npx playwright install
   ```

4. Set up environment variables (used in Chapter 05)
   ```bash
   cp .env.example .env
   # then fill in GOOGLE_URL, USERNAME, PASSWORD as needed
   ```

### Running Tests

Run the entire suite:
```bash
npx playwright test
```

Run a single chapter:
```bash
npx playwright test tests/Chapter02
```

Run a single concept:
```bash
npx playwright test tests/Chapter03/06_VisualTesting_Test.spec.ts
```

### Viewing Reports

Playwright's built-in HTML report:
```bash
npx playwright show-report
```

Allure report (richer, used across the project):
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

## 🧠 Concepts Practiced So Far

- ✅ First test & Codegen
- ✅ Screenshots (element, page, full page)
- ✅ Locator strategies (`getByRole`, `getByLabel`, `getByTestId`, `getByAltText`)
- ✅ Hooks (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`)
- ✅ Dropdowns, iframes, drag-and-drop
- ✅ Mouse & keyboard actions
- ✅ Date pickers
- ✅ Hard vs. soft assertions
- ✅ Annotations, grouping, tags, retries
- ✅ Data-driven (parametrized) tests
- ✅ Visual regression testing (`toHaveScreenshot`)
- ✅ Custom timeouts
- ✅ Browser context & multiple tabs
- ✅ Rerunning failed tests
- ✅ Alerts & popups
- ✅ Test reporting (HTML + Allure)
- ✅ Reading text content & attributes
- ✅ Iterating over matched elements
- ✅ Environment variables via `.env`

## 🔭 What's Next

Future chapters/topics that fit naturally as the next steps in this learning path:
- Page Object Model (POM) design pattern
- API testing with Playwright's request context
- Authentication/storage state reuse across tests
- CAPTCHA handling (the `2captcha-nodejs` dependency is already in `package.json`, ready for this)
- Cross-browser (Firefox/WebKit) and mobile viewport testing

## 📌 Housekeeping Notes

A few small cleanups worth doing as this repo grows:
- `allure-report/` and `allure-results/` are currently committed to the repo — these are generated output and are good candidates to add to `.gitignore` (like `playwright-report/` already is) so the repo doesn't grow unnecessarily with every test run.
- Both `playwright.config.js` and `playwright.config.ts` exist side by side — worth keeping just the `.ts` version to avoid confusion about which one is active.
- The `dashboard` scripts in `package.json` (`dashboard:server`, `dashboard:ui`) reference a `dashboard-server.js` and `dashboard-ui/` folder that aren't in the repo yet — either add them or remove the scripts until that feature is built.

## 👤 Author

**Vamsi Mappetti**
GitHub: [@vamsimappetti2001](https://github.com/vamsimappetti2001)

---
*This repository is a living document of my Playwright + TypeScript learning journey — new chapters get added as new concepts are practiced.*
