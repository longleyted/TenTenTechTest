import { defineConfig, devices } from "playwright/test";
import testprops from './config.json'

export default defineConfig({
  timeout: 5000,
  testDir: './tests',
  fullyParallel: true,
  reporter: 'html',
  use: {
    baseURL: testprops.baseUrl,
    trace: 'on-first-retry',
  },

  projects: [
    { name: 'config', testMatch: /.*\.config.ts/ },
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],  
      },
      dependencies: ['config'],
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'], 
      },
      dependencies: ['config'],
    },

    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
       },
      dependencies: ['config'],
    },
  ]})