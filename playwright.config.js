
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',          
  timeout: 30 * 1000,          
  retries: 1,                  
  use: {
    headless: true,            
    screenshot: 'only-on-failure', 
    video: 'retain-on-failure',    
    trace: 'on-first-retry',       
  },
  reporter: [
    ['list'],                                   
    ['html', { outputFolder: 'playwright-report' }] 
  ],
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'Firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'WebKit',
      use: { browserName: 'webkit' },
    },
  ],
});
