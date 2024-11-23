import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../page-object-models/login.page';
import { HeaderPage } from '../page-object-models/header.page';

type pageObjects = {
    loginPage: LoginPage
    headerPage: HeaderPage
}

export const test = base.extend<pageObjects>({
    loginPage: async ({ page }, use) => {
        use(new LoginPage(page));
    },
    headerPage: async ({ page }, use) => {
        use(new HeaderPage(page));
    },

});

export { 
    base,
    expect, 
    pageObjects }