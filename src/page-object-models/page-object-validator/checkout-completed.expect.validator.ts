import { Locator, Page, expect } from "@playwright/test";
import { CheckoutCompletedPage } from "../checkout-completed.page";

export class CheckoutCompletedPageValidator extends CheckoutCompletedPage{

    readonly completedHeaderLocator   : Locator
    readonly completedSubtitleLocator : Locator
    readonly backHomeButtonLocator    : Locator

    constructor(page: Page) {
        super(page);
        this.completedHeaderLocator   = this.page.getByTestId(this.completedHeader)
        this.completedSubtitleLocator = this.page.getByTestId(this.completedSubtitle)
        this.backHomeButtonLocator    = this.page.getByTestId(this.backHomeButton)
    }

    checkoutCompletedMessage = async ( validCheckoutCompletedMessage : { completedHeader: string, completedSubtitle: string, backHomeButton: string } ): Promise<void> => {
        await expect(this.completedHeaderLocator).toBeVisible();
        await expect(this.completedHeaderLocator).toHaveText(validCheckoutCompletedMessage.completedHeader);
    
        await expect(this.completedSubtitleLocator).toBeVisible();
        await expect(this.completedSubtitleLocator).toHaveText(validCheckoutCompletedMessage.completedSubtitle);
    
        await expect(this.backHomeButtonLocator).toBeVisible();
        await expect(this.backHomeButtonLocator).toHaveText(validCheckoutCompletedMessage.backHomeButton);
    
    }

}