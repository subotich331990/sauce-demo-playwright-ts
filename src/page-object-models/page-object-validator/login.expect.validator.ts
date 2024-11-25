import { expect, Page, Locator } from "@playwright/test";
import { LoginPage } from "../login.page";

export class LoginPageValidator extends LoginPage {

    readonly usernameInputLocator: Locator
    readonly passwordStateLocator: Locator
    readonly loginButtonLocator  : Locator;
    
    /**
     * Initializes the `usernameInputLocator`, `passwordStateLocator`, and `loginButtonLocator` 
     * properties with the corresponding locators of the login form fields.
     * @param {Page} page - The page to interact with.
     */
    constructor(page: Page) { 
        super(page);
        this.usernameInputLocator = this.page.locator(this.username);
        this.passwordStateLocator = this.page.locator(this.password);
        this.loginButtonLocator   = this.page.locator(this.loginButton);
    }

    /**
     * Validates the initial status of the login form by checking the visibility, emptiness, 
     * and placeholder attributes of the username and password fields,
     * as well as the attributes and text of the login button.
     * 
     * @param objectParams - An object containing expected placeholder and button text values.
     * @param objectParams.placeholderUsernameValue - The expected placeholder for the username input.
     * @param objectParams.placeholderPasswordValue - The expected placeholder for the password input.
     * @param objectParams.loginButtonValue - The expected text for the login button.
     * @returns A Promise that resolves when all expectations have been met.
     * 
     * @example
     * const validCredentials = {
     *   placeholderUsernameValue: 'Username',
     *   placeholderPasswordValue: 'Password',
     *   loginButtonValue: 'Login'
     * };
     * await loginPageValidator.initialStatusLoginForm(objectParams);
     */
    initialStatusLoginForm = async (objectParams: { placeholderUsernameValue: string, placeholderPasswordValue: string, loginButtonValue: string }): Promise<void> => {
        await expect(this.usernameInputLocator).toBeVisible();
        await expect(this.usernameInputLocator).toBeEmpty();
        await expect(this.usernameInputLocator).toHaveAttribute('placeholder', objectParams.placeholderUsernameValue);

        await expect(this.passwordStateLocator).toBeVisible();
        await expect(this.passwordStateLocator).toBeEmpty();
        await expect(this.passwordStateLocator).toHaveAttribute('placeholder', objectParams.placeholderPasswordValue);

        await expect(this.loginButtonLocator).toBeVisible();
        await expect(this.loginButtonLocator).toHaveAttribute('type', 'submit');
        await expect(this.loginButtonLocator).toHaveAccessibleName('Login');
        await expect(this.loginButtonLocator).toHaveText(objectParams.loginButtonValue);
    };

};
