import{Before,} from '@cucumber/cucumber'
import{Page,Browser,chromium, expect} from '@playwright/test'
import { pageFixture } from './pageFixture';

let page :Page;
let browser:Browser;

Before(async function(){
    browser=await chromium.launch({
    headless:false
    });
    page=await browser.newPage();
    pageFixture.page=page;

})

