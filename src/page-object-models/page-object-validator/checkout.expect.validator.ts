import { expect, Page, Locator } from "@playwright/test";
import { CheckoutPage } from "../checkout.page";

export class CheckoutPageValidator extends CheckoutPage {
    
    readonly firstNameInputLocator : Locator;
    readonly lastNameInputLocator  : Locator;
    readonly postalCodeInputLocator: Locator;
    readonly continueButtonLocator : Locator;
    readonly cancelButtonLocator   : Locator;

    constructor(page: Page) {
        super(page);
        this.firstNameInputLocator = this.page.getByTestId(this.firstNameInput);
        this.lastNameInputLocator  = this.page.getByTestId(this.lastNameInput);
        this.postalCodeInputLocator= this.page.getByTestId(this.postalCodeInput);
        this.continueButtonLocator = this.page.getByTestId(this.continueButton);
        this.cancelButtonLocator   = this.page.getByTestId(this.cancelButton);  
    }


    formCheckout = async ( validCheckoutDataForm : { firstNamePlaceholderText: string, lastNamePlaceholderText: string, postalCodePlaceholderText: string } ): Promise<void> => {
        await expect(this.firstNameInputLocator).toBeVisible();
        await expect(this.firstNameInputLocator).toHaveAttribute('placeholder', validCheckoutDataForm.firstNamePlaceholderText);
        await expect(this.lastNameInputLocator).toBeVisible();
        await expect(this.lastNameInputLocator).toHaveAttribute('placeholder', validCheckoutDataForm.lastNamePlaceholderText);
        await expect(this.postalCodeInputLocator).toBeVisible();
        await expect(this.postalCodeInputLocator).toHaveAttribute('placeholder', validCheckoutDataForm.postalCodePlaceholderText);
    }

    formCheckoutButtons = async ( validCheckoutDataForm : { primaryButton: string, secondaryButton: string } ): Promise<void> => {
        await expect(this.continueButtonLocator).toBeVisible();
        await expect(this.continueButtonLocator).toHaveText(validCheckoutDataForm.primaryButton);
        await expect(this.cancelButtonLocator).toBeVisible();
        await expect(this.cancelButtonLocator).toHaveText(validCheckoutDataForm.secondaryButton);
    }

}