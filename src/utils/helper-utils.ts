import { Locator, Page } from '@playwright/test';
export class HelperUtils {

    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    /**
    * Returns the page locator for the given selector.
    * 
    * @param selector - A valid ID, CSS, XPATH selector for the element.
    * @returns The page locator for the given selector.
    * 
    * @example
    * const loginButton = await getPageLocator('#login-button');
    * await loginButton.click();
    */
    getPageLocator = async (selector: string): Promise<Locator> => {
        return this.page.locator(selector);
    };
}