import {  Page } from '@playwright/test';
import { Actions } from './astracts-classes/actions.class';

export class LoginPage extends Actions {

    readonly page         : Page
    readonly usernameInput: string;
    readonly passwordInput: string;
    readonly loginButton  : string;

    constructor(page: Page) {
        super(page);
        this.page          = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton   = '#login-button';
    };

    goToPage = async (baseURL: string): Promise<void> => {
        await this.page.goto(baseURL);
    };

    login = async (username: string, password: string) : Promise<void> => {
        await this.typeText(this.usernameInput, username);
        await this.typeText(this.passwordInput, password);
        await this.clickOnElement(this.loginButton);
    };    
};