import { expect, Page } from "@playwright/test";
import { LoginPage } from "../login.page";
import { HelperUtils } from "../../utils/helper-utils";

export class LoginPageValidator extends LoginPage {

    helperUtils = new HelperUtils(this.page);

    readonly usernameInputLocator: any
    readonly passwordStateLocator: any
    readonly loginButtonLocator: any;
    
    constructor(page: Page) { 
        super(page);
        this.usernameInputLocator = this.helperUtils.getPageLocator(this.usernameInput);
        this.passwordStateLocator = this.helperUtils.getPageLocator(this.passwordInput);
        this.loginButtonLocator   = this.helperUtils.getPageLocator(this.loginButton);
    }

    initialStatusLoginForm = async (placeholderUsernameValue: string, placeholderPasswordValue: string ): Promise<void> => {
        console.log(this.usernameInputLocator);
        console.log(this.passwordStateLocator);
        await expect(await this.usernameInputLocator).toBeVisible();
        await expect(await this.usernameInputLocator).toBeEmpty();
        await expect(await this.usernameInputLocator).toHaveAttribute('placeholder', placeholderUsernameValue);

        await expect(await this.passwordStateLocator).toBeVisible();
        await expect(await this.passwordStateLocator).toBeEmpty();
        await expect(await this.passwordStateLocator).toHaveAttribute('placeholder', placeholderPasswordValue);

    };



}