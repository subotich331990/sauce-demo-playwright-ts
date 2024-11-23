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
     * Validates the primary header section of the page.
     * 
     * @param {Object} validHeaderText - An object that contains the expected text of the app logo and the title section.
     * @param {string} validHeaderText.appLogoText - The expected text of the app logo.
     * @param {string} validHeaderText.titleSectionText - The expected text of the title section.
     * 
     * @example
     * Example of how to use it:
     * test('Validate primary header', async ({ page, headerTextsValidator }) => {
     *     await headerTextsValidator.primaryHeader({
     *         appLogoText: 'Swag Labs',
     *         titleSectionText: 'Products'
     *     });
     * });
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
