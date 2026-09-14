// @ts-check
import { defineConfig } from "@playwright/test";

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: "./tests",
  timeout: 40 * 1000,
  expect: {
    timeout: 40 * 1000,
  },
  reporter: "html",
  use: {
    browserName: "chromium",
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
});
