import { expect, test } from '@playwright/test';

// Temporary M0 setup check; remove before M1 begins.
test('M0 setup-only: Playwright can execute TypeScript tests', () => {
  expect(1).toBe(1);
});