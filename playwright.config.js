const {defineConfig} = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use:({
    baseURL: 'https://playwright.dev',
    headless: false,
  })
    
})