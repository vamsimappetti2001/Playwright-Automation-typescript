<img src="https://capsule-render.vercel.app/api?type=waving&color=0:2EAD33,100:3178C6&height=180&section=header&text=Playwright%20%2B%20TypeScript%20🎓&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=38"/>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1000&color=2EAD33&center=true&vCenter=true&width=650&lines=A+Chapter-by-Chapter+Playwright+Learning+Log+%F0%9F%93%9A;From+First+Test+%E2%86%92+Visual+Regression+%E2%86%92+CI+%E2%9A%A1;Real+Sites.+Real+DOM+Challenges.+Real+Practice.+%F0%9F%A7%AA" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Allure_Report-FF6E42?style=for-the-badge&logo=qameta&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white" />
</p>

<p align="center">
  <img src="https://img.shields.io/github/last-commit/vamsimappetti2001/Playwright-Automation-typescript?style=flat-square&color=2EAD33" />
  <img src="https://img.shields.io/github/languages/top/vamsimappetti2001/Playwright-Automation-typescript?style=flat-square&color=3178C6" />
  <img src="https://img.shields.io/badge/Commits-64%2B-informational?style=flat-square" />
</p>

---

### 🎯 Purpose

This isn't a single test suite for one application — it's a **personal playground and course log** for mastering UI test automation with Playwright and TypeScript, chapter by chapter.

- 📦 Each **chapter** = one learning milestone
- 🧪 Each **spec file** = one concept, demonstrated with a runnable test
- 🌐 Real sites (Google, YouTube, GitHub, jQuery UI demos, DemoQA) are used as practice targets so tests reflect real-world DOM challenges, not toy examples

---

### 🧰 Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=ts,playwright,nodejs,git,github,githubactions&theme=dark" />
</p>

| Tool | Role |
|---|---|
| 🎭 **[Playwright](https://playwright.dev/)** | Browser automation & test runner |
| 🔷 **TypeScript** | Primary test language |
| 📊 **[Allure Report](https://allurereport.org/)** | Rich HTML test reporting |
| 🔐 **dotenv** | Environment variable management |
| 🤖 **2captcha-nodejs** | CAPTCHA-solving (scaffolded for advanced scenarios) |

---

### 🗺️ Learning Roadmap

| Chapter | Focus Area | What's Covered |
|---|---|---|
| **01 · Getting Started** 🌱 | Fundamentals | First test, Codegen, recording at cursor, basic navigation & assertions |
| **02 · Core Interactions** 🖱️ | Locators & Actions | Screenshots (element/page/full-page), locator strategies, hooks, dropdowns, iframes, drag-and-drop, mouse/keyboard actions, date pickers, hard vs. soft assertions |
| **03 · Test Organization** 🗂️ | Structuring Tests | Annotations, `describe` grouping, tags for selective runs, retries, data-driven tests, visual regression, custom timeouts |
| **04 · Runtime & Reporting** 📡 | Browser Context & Debugging | Multiple contexts/tabs, rerunning failed tests, alerts/popups, HTML reports, reading text/attributes, iterating over elements |
| **05 · Configuration** ⚙️ | Environment Management | Reading values from `.env` via `dotenv` instead of hardcoding URLs/credentials |

> 💡 Each chapter lives in its own folder under `tests/` — jump straight to the topic you want to review.

---

### 📁 Project Structure

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

---

### 🚀 Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) (LTS) · npm

```bash
# 1. Clone the repository
git clone https://github.com/vamsimappetti2001/Playwright-Automation-typescript.git
cd Playwright-Automation-typescript

# 2. Install dependencies
npm install

# 3. Install Playwright browsers
npx playwright install

# 4. Set up environment variables (used in Chapter 05)
cp .env.example .env
# then fill in GOOGLE_URL, USERNAME, PASSWORD as needed
```

### ▶️ Running Tests

```bash
# Run the entire suite
npx playwright test

# Run a single chapter
npx playwright test tests/Chapter02

# Run a single concept
npx playwright test tests/Chapter03/06_VisualTesting_Test.spec.ts
```

### 📊 Viewing Reports

```bash
# Playwright's built-in HTML report
npx playwright show-report

# Allure report (richer, used across the project)
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

### 🧠 Concepts Practiced So Far

<table>
<tr>
<td valign="top" width="50%">

**Fundamentals & Interactions**
- ✅ First test & Codegen
- ✅ Screenshots (element, page, full page)
- ✅ Locator strategies (`getByRole`, `getByLabel`, `getByTestId`, `getByAltText`)
- ✅ Hooks (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`)
- ✅ Dropdowns, iframes, drag-and-drop
- ✅ Mouse & keyboard actions
- ✅ Date pickers
- ✅ Hard vs. soft assertions

</td>
<td valign="top" width="50%">

**Structure, Runtime & Config**
- ✅ Annotations, grouping, tags, retries
- ✅ Data-driven (parametrized) tests
- ✅ Visual regression testing (`toHaveScreenshot`)
- ✅ Custom timeouts
- ✅ Browser context & multiple tabs
- ✅ Rerunning failed tests, alerts & popups
- ✅ Test reporting (HTML + Allure)
- ✅ Reading text/attributes, iterating over elements
- ✅ Environment variables via `.env`

</td>
</tr>
</table>

---

### 🔭 What's Next

- 🏗️ Page Object Model (POM) design pattern
- 🔌 API testing with Playwright's request context
- 🔑 Authentication/storage state reuse across tests
- 🧩 CAPTCHA handling (`2captcha-nodejs` already in `package.json`, ready for this)
- 🌍 Cross-browser (Firefox/WebKit) and mobile viewport testing

---

### 📌 Housekeeping Notes

A few small cleanups worth doing as this repo grows:
- `allure-report/` and `allure-results/` are currently committed — good candidates for `.gitignore` (like `playwright-report/` already is) so the repo doesn't bloat with every run
- Both `playwright.config.js` and `playwright.config.ts` exist side by side — worth keeping just the `.ts` version
- The `dashboard` scripts in `package.json` reference a `dashboard-server.js` and `dashboard-ui/` that aren't in the repo yet — add them or remove the scripts until built

---

### 🧪 Why This Repo Matters for a QA Role

This log isn't just "I followed a tutorial" — it's evidence of how I approach test automation as a discipline:

- 📈 **Progressive depth** — 64+ commits building from first-test basics up to visual regression and CI, not a single dump of scripts
- 🧱 **Real-world targets** — practiced against live, unpredictable DOMs (Google, YouTube, GitHub) instead of sanitized sandbox apps only
- 🔍 **Reporting-first habits** — dual HTML + Allure reporting wired in early, because a test suite nobody can read the results of isn't finished
- 🔁 **CI from the start** — GitHub Actions runs the suite on every push/PR, not bolted on as an afterthought
- 🧹 **Self-auditing** — the Housekeeping Notes above are things I caught myself, which is the same instinct I'd bring to reviewing a team's test suite

**Next chapter for me professionally:** taking these fundamentals into a POM-structured framework (see my [`Playwright-automation-Framework-POC`](https://github.com/vamsimappetti2001/Playwright-automation-Framework-POC) repo) and a real product's CI pipeline.

---

### 👤 Author

**Vamsi Mappetti** · QA / Test Automation Engineer
📍 Bengaluru, India &nbsp;|&nbsp; 🔗 [@vamsimappetti2001](https://github.com/vamsimappetti2001)

<p align="center"><i>This repository is a living document of my Playwright + TypeScript learning journey — new chapters get added as new concepts are practiced.</i></p>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:3178C6,100:2EAD33&height=100&section=footer"/>
