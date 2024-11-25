import { Page ,expect } from "@playwright/test";
import { MenuPage } from "../menu.page";

export class MenuPageValidator extends MenuPage {

    readonly menuContainerLocator  : any
    readonly allItemsOptionLocator : any
    readonly aboutOptionLocator    : any
    readonly logoutOptionLocator   : any
    readonly resetAppStateOptionLocator :any
    /**
     * Initializes the `menuContainerLocator`, `allItemsOptionLocator`, `aboutOptionLocator`, and `logoutOptionLocator` 
     * properties with the corresponding locators of the menu container and its options.
     * @param {Page} page - The page to interact with.
     */
    constructor(page: Page) { 
        super(page);
        this.menuContainerLocator       = this.page.locator(this.menuContainer);
        this.allItemsOptionLocator      = this.page.locator(this.allItemsOption);
        this.aboutOptionLocator         = this.page.locator(this.aboutOption);
        this.logoutOptionLocator        = this.page.locator(this.logoutOption);
        this.resetAppStateOptionLocator = this.page.locator(this.resetAppStateOption);
    }

    menuContainerOptionTexts = async (objectParams: { allItemsOptionText: string, aboutOptionText: string, logoutOptionText: string, resetAppStateOptionText: string }): Promise<void> => {
        await expect(this.menuContainerLocator).toBeVisible();
        await expect(this.allItemsOptionLocator).toBeVisible();
        await expect(this.aboutOptionLocator).toBeVisible();
        await expect(this.logoutOptionLocator).toBeVisible();
        await expect(this.resetAppStateOptionLocator).toBeVisible();

        await expect(this.allItemsOptionLocator).toHaveText(objectParams.allItemsOptionText);
        await expect(this.aboutOptionLocator).toHaveText(objectParams.aboutOptionText);
        await expect(this.logoutOptionLocator).toHaveText(objectParams.logoutOptionText);
        await expect(this.resetAppStateOptionLocator).toHaveText(objectParams.resetAppStateOptionText);
    }

}