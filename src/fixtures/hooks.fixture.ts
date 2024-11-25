import { base, pageObjects } from '../fixtures/page-object.fixture';
import { pageObjectsValidator } from '../fixtures/page-object-validator.fixture';
import * as objectsParams from '../../src/data/objects-params/texts-objects-params.data'

type Hooks = {
    navigateTo: () => void,
    loginSuccessfully: () => void
    clearCookies: () => void
}

export const test = base.extend<pageObjects & pageObjectsValidator & Hooks>({
    navigateTo: async ({ page, loginPage }, use) => {
        await page.context().clearCookies();
        await loginPage.goToPage('https://www.saucedemo.com/')
        await use(() => {loginPage});
    },
    loginSuccessfully: async ({  navigateTo, loginPage }, use) => {
        await loginPage.login(objectsParams.validCredentials);
    }

})