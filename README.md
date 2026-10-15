# Playwright POM Project

## Run this project

Install dependencies and the Chromium browser:

```bash
npm install
npx playwright install chromium
```

Run the tests:

```bash
npx playwright test
```

The tests run against `https://playwright.dev` and launch Chromium in headed mode.

## Set up Playwright in a new project

```bash
npm init -y
npm install -D @playwright/test
npx playwright install chromium
```
