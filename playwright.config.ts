import { defineConfig } from "@playwright/test";

const externalBaseUrl = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "playwright-report" }]
  ],
  use: {
    baseURL: externalBaseUrl || "http://127.0.0.1:4322",
    colorScheme: "light",
    locale: "en-CA",
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  },
  webServer: externalBaseUrl
    ? undefined
    : {
        command: "node ./node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 4322",
        url: "http://127.0.0.1:4322/",
        reuseExistingServer: !process.env.CI,
        timeout: 120_000
      },
  projects: [
    {
      name: "desktop-1440",
      use: { viewport: { width: 1440, height: 1000 } }
    },
    {
      name: "large-desktop-1728",
      use: { viewport: { width: 1728, height: 1000 } }
    },
    {
      name: "tablet-768",
      use: { viewport: { width: 768, height: 1024 }, hasTouch: true }
    },
    {
      name: "tablet-1024",
      use: { viewport: { width: 1024, height: 768 }, hasTouch: true }
    },
    {
      name: "iphone-430",
      use: {
        viewport: { width: 430, height: 932 },
        deviceScaleFactor: 3,
        hasTouch: true,
        isMobile: true
      }
    },
    {
      name: "iphone-390",
      use: {
        viewport: { width: 390, height: 844 },
        deviceScaleFactor: 3,
        hasTouch: true,
        isMobile: true
      }
    },
    {
      name: "iphone-375",
      use: {
        viewport: { width: 375, height: 812 },
        deviceScaleFactor: 3,
        hasTouch: true,
        isMobile: true
      }
    },
    {
      name: "narrow-320",
      use: {
        viewport: { width: 320, height: 700 },
        deviceScaleFactor: 2,
        hasTouch: true,
        isMobile: true
      }
    }
  ]
});
