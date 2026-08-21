
import {test,expect} from'@playwright/test'
test("demoform.spec.js", async({page})=>{
    page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill("Ini");
    await page.locator("#lastName").fill("Antony");
    await page.locator("#userEmail").fill("Inithantony90@gmail.com");
    await page.locator("input[value='Female']").check();
    await page.locator("#userNumber").fill("12345");
    await page.locator("#submit").click();

    
    

})