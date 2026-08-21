# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoform.spec.js >> demoform.spec.js
- Location: test\demoform.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/automation-practice-form", waiting until "load"

```

# Test source

```ts
  1  | 
  2  | import {test,expect} from'@playwright/test'
  3  | test("demoform.spec.js", async({page})=>{
> 4  |     page.goto("https://demoqa.com/automation-practice-form");
     |          ^ Error: page.goto: Test timeout of 30000ms exceeded.
  5  |     await page.locator("#firstName").fill("Ini");
  6  |     await page.locator("#lastName").fill("Antony");
  7  |     await page.locator("#userEmail").fill("Inithantony90@gmail.com");
  8  |     await page.locator("input[value='Female']").check();
  9  |     await page.locator("#userNumber").fill("12345");
  10 |     await page.locator("#submit").click();
  11 | 
  12 |     
  13 |     
  14 | 
  15 | })
```