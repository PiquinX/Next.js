import { test, expect } from '@playwright/test'

test('should render a list of movies', async ({ page }) => {
  // Starting the app in the Home
  await page.goto('http://localhost:3000/')

  // Find an element with an id 'movies-list'
  const moviesList = page.getByTestId('movies-list')

  // Count the amount of children of the element
  const childElementCount = await moviesList.evaluate(node => node.childElementCount)
  // The element should have al at least one children
  expect(childElementCount).toBeGreaterThan(0)
})

test('should search movies', async ({ page }) => {
  // Starting the app in the Home
  await page.goto('http://localhost:3000/')

  // Find an element with the placeHolder 'Search movies' and fill it with The Lord
  await page.getByPlaceholder('Search movies').fill('The Lord')

  // The new URL should be "/search?search=The+Lord&page=1"
  await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=1')

  // Find an element with an id 'movies-list'
  const moviesList = page.getByTestId('movies-list')

  // Count the amount of children of the element
  const childElementCount = await moviesList.evaluate(node => node.childElementCount)
  // The element should have al at least one children
  expect(childElementCount).toBeGreaterThan(0)
})

test('should render the info of a movie', async ({ page }) => {
  // Starting the app in the Home
  await page.goto('http://localhost:3000/info/tt0167260')

  // Find an element with an the title of the movie 'The Lord of the Rings: The Return of the King'.
  const movie = page.getByText('The Lord of the Rings: The Return of the King')

  expect(movie).toBeDefined()
})

test('should go to info', async ({ page }) => {
  // Starting the app in the Home
  await page.goto('http://localhost:3000/')

  await page.getByText('The Lord of the Rings: The Fellowship of the Ring').click()

  await expect(page).toHaveURL('http://localhost:3000/info/tt0120737')
})

test('should change the movies page', async ({ page }) => {
  // Starting the app in the Home
  await page.goto('http://localhost:3000/search?search=The+Lord&page=1')

  // Find an element with the text 'Next' and click it
  await page.getByText('Next', { exact: true }).click()

  // The new URL should be 'http://localhost:3000/search?search=The+Lord&page=2'
  await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=2')

  // Find an element with the text 'Previous' and click it
  await page.getByText('Previous', { exact: true }).click()

  // The new URL should be 'http://localhost:3000/search?search=The+Lord&page=1'
  await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=1')

  // Find an element with the text '41' and click it
  await page.getByText('41', { exact: true }).click()

  // The new URL should be 'http://localhost:3000/search?search=The+Lord&page=41'
  await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=41')

  // Find an element with the text '1' and click it
  await page.getByText('1', { exact: true }).click()

  // The new URL should be 'http://localhost:3000/search?search=The+Lord&page=1'
  await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=1')
})

// test('should change the movies page', async ({ page }) => {
//   // Starting the app in the Home
//   await page.goto('http://localhost:3000/search?search=The+Lord&page=1')
//   // Find an element with the text '>' and click it
//   await page.getByText('Next').click()
//   // The new URL should be "/search?search=The+Lord&page=2"
//   await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=2')

//   // Find an element with an id 'movies-list'
//   const moviesList = page.getByTestId('movies-list')

//   // Count the amount of children of the element
//   const childElementCount = await moviesList.evaluate(node => node.childElementCount)
//   // The element should have al at least one children
//   expect(childElementCount).toBeGreaterThan(0)
// })
