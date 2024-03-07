Questions:
1 - Should I use React.FC<Props> to type components or should I type them as a normal function?
2 - How should I improve the code to take the most advantage possible of Next.JS?
3 - I'm using TS correctly?
4 - How should I do this (if (page === null) params.set(SEARCH_PARAMS.PAGE, '1')) when the page isn't defined in the params? (search page)
5 - What should I test? I mean should I test components that are doing API calls or not? At least I don't know how to tests something that changes the URL (I looked into the Vitest documentation and didn't find anything).
6 - Why the 'should search movies' is throwing an error on the 'await expect(page).toHaveURL('http://localhost:3000/search?search=The+Lord&page=1')' only in webkit ?