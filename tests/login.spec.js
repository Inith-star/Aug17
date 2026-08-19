import { test, chromium } from '@playwright/test';

test('Browser launch', async () => {
    const browser = await chromium.launch({ headless: false });

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();
    const page3 = await context.newPage();

    await page1.goto('https://www.flipkart.com');
    await page1.screenshot({ path: './flipkart.png' });

    await page2.goto('https://www.instagram.com');
    await page2.screenshot({ path: './instagram.png' });

    await page3.goto('https://www.amazon.in');
    await page3.screenshot({ path: './amazon.png' });

    await browser.close();
});