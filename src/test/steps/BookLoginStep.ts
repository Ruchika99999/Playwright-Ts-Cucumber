import { Given,When,Then,setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(60000);

  Given('Going to the application', async function () {
    pageFixture.page.goto('https://bookcart.azurewebsites.net')
  });
  Given('Click on the login link', async function () {
    await pageFixture.page.locator('span.mdc-button__label:has-text("Login")').click();
  });
  
  Given('Enter the username as {string}',async function (username) {
    await pageFixture.page.locator('input[placeholder="Username"]').type(username);
      });
  

  Given('Enter the password as {string}',{ timeout: 60000}, async function (password) {
    console.log(" Third Assertion ");
    await pageFixture.page.locator('input[placeholder="Password"]').type(password);
  });
  When('Click on the login button', async function () {
    const value3=await pageFixture.page.locator('span.mdc-button__label:has-text("Login")').nth(1);
    console.log(" Fourth Assertion ");
    value3.click();
    
  });
  Then('Successfully Login', async function () {
    const value4 = await pageFixture.page.locator('span:has-text("Ruchika20")').nth(0).textContent(); 
    console.log("Fifth Assertion"+value4);
    expect(value4).toBe(' Ruchika20')
  });
  When('Not Successfully Login', async function () {
  const value5=await pageFixture.page.locator('#mat-mdc-error-0').textContent();
  await expect(value5).toBe('Username or Password is incorrect.')
 
  });
