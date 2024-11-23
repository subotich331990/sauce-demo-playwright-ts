import {  Page } from '@playwright/test';
import { Actions } from './astracts-classes/actions.class';

export class LoginPage extends Actions {

    readonly page         : Page
    readonly username     : string;
    readonly password     : string;
    readonly loginButton  : string;


    constructor(page: Page) {
        super(page);
        this.page          = page;
        this.username      = '#user-name';
        this.password      = '#password';
        this.loginButton   = '#login-button';
    };

    /**
     * Navigate to the login page
     * @param baseURL - The base URL of the Sauce Demo app
     * @example
     * await loginPage.goToPage('https://www.saucedemo.com/');
     */
    goToPage = async (baseURL: string): Promise<void> => {
        await this.page.goto(baseURL);
    };

    /**
     * Login to the application
     * @param ObjectParams - An object with username and password
     * @example
     * const ObjectParams = {
     *   username: 'standard_user',
     *   password: 'secret_sauce'
     * }
     * await loginPage.login(ObjectParams);
     */
    login = async ( ObjectParams : { username: string, password: string } ): Promise<void> => {
        await this.typeText(this.username, ObjectParams.username);
        await this.typeText(this.password, ObjectParams.password);
        await this.clickOnElement(this.loginButton);
    };
};