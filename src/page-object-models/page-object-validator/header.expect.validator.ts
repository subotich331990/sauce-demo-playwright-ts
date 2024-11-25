import { expect, Locator, Page } from "@playwright/test";
import { HeaderPage } from "../header.page";

export class HeaderPageValidator extends HeaderPage {

    readonly mainLogoLocator: Locator;
    readonly titleSectionLocator: Locator;
    readonly burgerButtonLocator: Locator;
    readonly shoppingCartLocator: Locator;
    readonly cartBadgeLocator: Locator;

    constructor(page: Page) {
        super(page);
        this.mainLogoLocator = this.page.locator(this.mainLogo);
        this.titleSectionLocator = this.page.locator(this.titleSection);
        this.burgerButtonLocator = this.page.locator(this.burgerButton);
        this.shoppingCartLocator = this.page.locator(this.shoppingCart);
        this.cartBadgeLocator = this.page.getByTestId(this.shoppingCartBage);
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
    primaryHeader = async (validHeaderText: { appLogoText: string | undefined, titleSectionText: string | undefined }): Promise<void> => {
        if( validHeaderText.appLogoText != undefined ) {
            await expect(this.mainLogoLocator).toBeVisible();
            await expect(this.mainLogoLocator).toHaveText(validHeaderText.appLogoText);
        }

        if( validHeaderText.titleSectionText != undefined ) {
        await expect(this.titleSectionLocator).toBeVisible();
        await expect(this.titleSectionLocator).toHaveText(validHeaderText.titleSectionText);
        }

        await expect(this.burgerButtonLocator).toBeVisible();
        await expect(this.shoppingCartLocator).toBeVisible();
    };

    cartBadge = async (): Promise<void> => {
        await expect(this.cartBadgeLocator).toBeVisible();
    }


}
