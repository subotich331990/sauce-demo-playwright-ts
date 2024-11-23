import { Page } from '@playwright/test';

export abstract class Actions {

    readonly page: Page

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Clicks on an element specified by the selector.
     * 
     * @param selector -  A valid ID, CSS, XPATH selector for the element to be clicked.
     * @param forceTrue - Optional boolean to force the click action. If true, 
     *                    the click will be forced even if the element is not 
     *                    visible or interactable. Defaults to null.
     * 
     * @example
     * // Clicks on an element with the ID 'my-element'
     * await clickOnElement('#my-element');
     * 
     * @example
     * // Clicks on an element with the ID 'my-element' and forces the click
     * await clickOnElement('#my-element', true);
     */
    clickOnElement = async (selector: string, forceTrue: boolean | null = null): Promise<void> => {
        forceTrue ? await this.page.locator(selector).click({ force: forceTrue }) : await this.page.locator(selector).click()
    };

    /**
     * Types the text in an element specified by the selector.
     * 
     * @param selector -  A valid ID, CSS, XPATH selector for the element to be typed.
     * @param text - The text to be typed in the element.
     * 
     * @example
     * // Types the text in an element with the ID 'my-element'
     * await typeText('#my-element', 'Hello World');
     */
    typeText = async (selector: string, text: string): Promise<void> => {
        await this.page.locator(selector).fill(text)
    };

    /**
     * Clears the text in an element specified by the selector.
     * 
     * @param selector -  A valid ID, CSS, XPATH selector for the element to be cleared.
     */
    clearText = async (selector: string): Promise<void> => {
        await this.page.locator(selector).clear()
    };

    /**
     * Uploads a file to an input element specified by the selector.
     * 
     * @param selector - A valid ID, CSS, XPATH selector for the input element.
     * @param filePath - The path to the file to be uploaded.
     * 
     * @example
     * // Uploads a file to an input element with the ID 'file-input'
     * await uploadValidFile('#file-input', '/path/to/file.png');
     */
    uploadValidFile = async (selector: string, filePath: string): Promise<void> => {
        await this.page.locator(selector).setInputFiles(filePath);
    };


};