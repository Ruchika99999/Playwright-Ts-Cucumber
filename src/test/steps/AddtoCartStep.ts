import{When,Given,Then,setDefaultTimeout} from '@cucumber/cucumber'
import{expect} from '@playwright/test'
import { pageFixture } from "../../hooks/pageFixture";
setDefaultTimeout(30000)

  When('User search for a {string}', async function (book) {
     await pageFixture.page.locator('input[placeholder="Search books or authors"]').fill(book);
    await pageFixture.page.locator('mat-option.mat-mdc-option mdc-list-item ng-star-inserted span').click();
  });
  When('user add the book to the cart', async function () {
    await pageFixture.page.locator('span.mdc-button__label:has-text("Add to Cart")').click();   
  });
  Then('the cart badge should get updated', async function () {
    const value=await pageFixture.page.locator('#mat-badge-content-0').textContent();
    expect(Number(value)).toBeGreaterThan(0);
    await pageFixture.page.close();
   
  });
