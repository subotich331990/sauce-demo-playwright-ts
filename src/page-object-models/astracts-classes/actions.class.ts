import { Page } from '@playwright/test';
import * as number from '../../utils/generateRandomIntNumber';

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
     * Clicks on an element with the given name role.
     * If more than one element is found, a random element is selected.
     * If the element is not visible or interactable, the click action is forced.
     * 
     * @param elementName - The name of the element to be clicked.
     * @param forceTrue - Optional boolean to force the click action. If true, the click will be forced even if the element is not visible or interactable. Defaults to null.
     * @throws Error if no elements are found in the page.
     * 
     * @example
     * // Clicks on an element with the name role 'Add to cart'
     * await clickOnElementByRoleButton('Add to cart');
     * 
     * @example
     * // Clicks on an element with the name role 'Add to cart' and forces the click
     * await clickOnElementByRoleButton('Add to cart', true);
     */
    clickOnElementByRoleButton = async (elementName: string, forceTrue: boolean | null = null): Promise<void> => {
        let element = this.page.getByRole('button', { name: elementName })
        let elementQuantity = await element.count()
        console.log(`elementos en la pagina: ${elementQuantity}`);
        if (elementQuantity < 1 || elementQuantity > 6) {
            throw new Error('No elements in page');
        }

        if (elementQuantity >= 0) {
            let item = number.generateRandomIntNumber(elementQuantity);
            console.log(`Item seleccionado: ${item}`);
            forceTrue ? await this.page.getByRole('button', { name: elementName }).nth(item).click({ force: forceTrue }) : await this.page.getByRole('button', { name: elementName }).nth(item).click()
        }
    };

    /**
     * Clicks on an element specified by the data-testid or data-test attribute.
     * 
     * @param dataTestAttribute - The data-testid value of the element to be clicked.
     * @param forceTrue - Optional boolean to force the click action. If true, 
     *                    the click will be forced even if the element is not 
     *                    visible or interactable. Defaults to null.
     * 
     * @example
     * // Clicks on an element with the data-testid 'submit-button'
     * await clickOnElementByDataTest('submit-button');
     * 
     * @example
     * // Clicks on an element with the data-testid 'submit-button' and forces the click
     * await clickOnElementByDataTest('submit-button', true);
     */
    clickOnElementByDataTest = async (dataTestAttribute: string, forceTrue: boolean | null = null): Promise<void> => {
        forceTrue ? await this.page.getByTestId(dataTestAttribute).click({ force: forceTrue }) : await this.page.getByTestId(dataTestAttribute).click();
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

    typeTextByDataTest = async (dataTestAttribute: string, text: string): Promise<void> => {
        await this.page.getByTestId(dataTestAttribute).fill(text);
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