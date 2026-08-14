import { defineConfig, devices } from '@playwright/test';

/** Kept off 4321 so a running `npm run dev` does not collide with a test run. */
const PORT = 4325;

/** Point the suite at an already-running server, e.g. `npm run dev`. */
const externalBaseURL = process.env.E2E_BASE_URL;

/**
 * Dev mode runs against `astro dev`, where React ships its development build
 * and reports hydration mismatches as console errors. The production build
 * silently patches those over, so mismatch bugs are only visible here.
 */
const isDevMode = process.env.E2E_DEV === '1';
const DEV_PORT = 4326;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',

  use: {
    baseURL: externalBaseURL ?? `http://localhost:${isDevMode ? DEV_PORT : PORT}`,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      // System Chrome, so CI and local runs need no browser download.
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
  ],

  // Tests run against the real production build, not the dev server, so they
  // catch anything that only breaks once the output is bundled.
  webServer: externalBaseURL
    ? undefined
    : isDevMode
      ? {
          command: `npm run dev -- --port ${DEV_PORT}`,
          url: `http://localhost:${DEV_PORT}`,
          reuseExistingServer: !process.env.CI,
          timeout: 120_000,
        }
      : {
          command: `npm run build && npm run preview -- --port ${PORT}`,
          url: `http://localhost:${PORT}`,
          reuseExistingServer: !process.env.CI,
          timeout: 120_000,
        },
});
