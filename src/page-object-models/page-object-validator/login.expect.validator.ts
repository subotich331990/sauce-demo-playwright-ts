import { expect, Page } from "@playwright/test";
import { LoginPage } from "../login.page";
import { HelperUtils } from "../../utils/helper-utils";

export class LoginPageValidator extends LoginPage {

    helperUtils = new HelperUtils(this.page);

    readonly usernameInputLocator: any
    readonly passwordStateLocator: any
    readonly loginButtonLocator  : any;
    
    /**
     * Initializes the `usernameInputLocator`, `passwordStateLocator`, and `loginButtonLocator` 
     * properties with the corresponding locators of the login form fields.
     * @param {Page} page - The page to interact with.
     */
    constructor(page: Page) { 
        super(page);
        this.usernameInputLocator = this.helperUtils.getPageLocator(this.username);
        this.passwordStateLocator = this.helperUtils.getPageLocator(this.password);
        this.loginButtonLocator   = this.helperUtils.getPageLocator(this.loginButton);
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
        await expect(await this.usernameInputLocator).toBeVisible();
        await expect(await this.usernameInputLocator).toBeEmpty();
        await expect(await this.usernameInputLocator).toHaveAttribute('placeholder', objectParams.placeholderUsernameValue);

        await expect(await this.passwordStateLocator).toBeVisible();
        await expect(await this.passwordStateLocator).toBeEmpty();
        await expect(await this.passwordStateLocator).toHaveAttribute('placeholder', objectParams.placeholderPasswordValue);

        await expect(await this.loginButtonLocator).toBeVisible();
        await expect(await this.loginButtonLocator).toHaveAttribute('type', 'submit');
        await expect(await this.loginButtonLocator).toHaveAccessibleName('Login');
        await expect(await this.loginButtonLocator).toHaveText(objectParams.loginButtonValue);
    };

};
