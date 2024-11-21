import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Page, Browser, expect } from '@playwright/test';

setDefaultTimeout(30000)
let browser: Browser;
let page: Page;

  Given('User navigates to the application', async function () {
    browser=await chromium.launch();
    page=await browser.newPage();
    await page.goto('https://letcode.in/');
   


  });



  Given('User click on the login link', async function () {
    await page.locator("text=Sign up").click();

  });



  Given('User enter the name as {string}', async function (name) {
   await page.locator('input[placeholder="Enter your name"]').fill(name);
      
  });



  Given('User enter the email as {string}', async function (email) {
    await page.locator('input[placeholder="Enter valid email address"]').fill(email);
  });



  Given('User enter the password as {string}', async function (password) {
    await page.locator('input[placeholder="Enter valid email address"]').fill(password);
    const checkbox = page.locator("id=agree"); // Locate the checkbox
    await checkbox.check(); // Check the checkbox
    // const isChecked = await checkbox.isChecked(); // Verify if the checkbox is checked
    // console.log('Checkbox is checked:', isChecked);

  });



  When('User click on the login button', async function () {
    await page.locator('button:text("SIGN UP")').click();
  });


  Then('Login should be success',{timeout:9000}, async function () {
    await page.locator("text=SIGN UP").nth(1).click();
    
  });
