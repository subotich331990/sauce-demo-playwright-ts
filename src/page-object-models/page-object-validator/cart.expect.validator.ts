import { expect, Locator, Page } from "@playwright/test";
import { CartPage } from "../cart.page";

export class CartPageValidator extends CartPage {
    
    readonly quantityLabelLocator     : Locator;
    readonly descriptionLabelLocator  : Locator;
    readonly cartListContainerLocator : Locator;
    readonly secondaryShoppingCartButtonLocator : Locator;
    readonly primaryCheckoutCartButtonLocator : Locator;
    

    constructor(page: Page) {
        super(page);
        this.quantityLabelLocator = this.page.locator(this.quantityLabel);
        this.descriptionLabelLocator = this.page.locator(this.descriptionLabel);
        this.cartListContainerLocator = this.page.locator(this.cartListContainer);
        this.secondaryShoppingCartButtonLocator = this.page.getByTestId(this.secondaryShoppingCartButton);
        this.primaryCheckoutCartButtonLocator = this.page.getByTestId(this.primaryCheckoutCartButton);
    };

    cartButtons = async (buttonsTexs : { primaryButton: string, secondaryButton: string }): Promise<void> => {
        await expect(this.primaryCheckoutCartButtonLocator).toBeVisible();
        await expect(this.primaryCheckoutCartButtonLocator).toHaveText(buttonsTexs.primaryButton);
        await expect(this.secondaryShoppingCartButtonLocator).toBeVisible();
        await expect(this.secondaryShoppingCartButtonLocator).toHaveText(buttonsTexs.secondaryButton)
    }

    cartLabels = async (labelsTexts : { quantityLabel: string, descriptionLabel: string }): Promise<void> => {
        await expect(this.quantityLabelLocator).toBeVisible();
        await expect(this.quantityLabelLocator).toHaveText(labelsTexts.quantityLabel);
        await expect(this.descriptionLabelLocator).toBeVisible();
        await expect(this.descriptionLabelLocator).toHaveText(labelsTexts.descriptionLabel);
    }

}