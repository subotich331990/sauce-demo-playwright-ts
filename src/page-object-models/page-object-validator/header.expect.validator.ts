import { expect, Page } from "@playwright/test";
import { HeaderPage } from "../header.page";
import { HelperUtils } from "../../utils/helper-utils";

export class HeaderPageValidator extends HeaderPage {

    helperUtils = new HelperUtils(this.page);

    readonly mainLogoLocator    : any;
    readonly titleSectionLocator: any;
    readonly burgerButtonLocator: any;
    readonly shoppingCartLocator: any;
    
    constructor(page: Page) { 
        super(page);
        this.mainLogoLocator     = this.helperUtils.getPageLocator(this.mainLogo);
        this.titleSectionLocator = this.helperUtils.getPageLocator(this.titleSection);
        this.burgerButtonLocator = this.helperUtils.getPageLocator(this.burgerButton);
        this.shoppingCartLocator = this.helperUtils.getPageLocator(this.shoppingCart);
    }

    /**
     * Validate the header page
     * @param {string} appLogo - The App Logo text
     * @param {string} title - The title text
     * @example
     * const { page } = await test.step('Visit the login page', async () => {
     *   await page.goto('https://www.saucedemo.com');
     * });
     * const headerPage = new HeaderPage(page);
     * await headerPage.primaryHeader('Swag Labs', 'Products');
     */
    primaryHeader = async (validHeaderText: { appLogoText: string, titleSectionText: string } ): Promise<void> => {
        await expect(await this.mainLogoLocator).toBeVisible();
        await expect(await this.mainLogoLocator).toHaveText(validHeaderText.appLogoText);

        await expect(await this.titleSectionLocator).toBeVisible();
        await expect(await this.titleSectionLocator).toHaveText(validHeaderText.titleSectionText);

        await expect(await this.burgerButtonLocator).toBeVisible();
        await expect(await this.shoppingCartLocator).toBeVisible();

    };




}
