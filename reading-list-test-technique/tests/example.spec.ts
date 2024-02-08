import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:3000/'

test('Verify Books available title', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const books = page.locator('[data-testid="available-title"]')

  // await page.waitForTimeout(2000)

  await expect(books.first()).toBeVisible()
  expect(books.textContent.length).toBeGreaterThan(0)
})
