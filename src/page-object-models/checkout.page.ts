import { Page } from "@playwright/test";
import { Actions } from "./astracts-classes/actions.class";

export class CheckoutPage extends Actions {
    
    readonly firstNameInput      : string
    readonly lastNameInput       : string
    readonly postalCodeInput     : string
    readonly continueButton      : string
    readonly cancelButton        : string

    constructor(page: Page) {
        super(page);
        this.firstNameInput      = 'firstName';
        this.lastNameInput       = 'lastName';
        this.postalCodeInput     = 'postalCode';
        this.continueButton      = 'continue';
        this.cancelButton        = 'cancel';
    };

    /**
     * Fills out the checkout form with the provided data.
     * 
     * @param {Object} validCheckoutDataForm - The form data to fill.
     * @param {string} validCheckoutDataForm.firstName - The first name.
     * @param {string} validCheckoutDataForm.lastName - The last name.
     * @param {string} validCheckoutDataForm.postalCode - The postal code.
     * 
     * @example
     * await checkoutPage.fillOutForm({
     *   firstName: 'John',
     *   lastName: 'Doe',
     *   postalCode: '12345'
     * });
     */
    fillOutForm = async (validCheckoutDataForm: { firstName: string, lastName: string, postalCode: string }): Promise<void> => {
        await this.typeTextByDataTest(this.firstNameInput, validCheckoutDataForm.firstName);
        await this.typeTextByDataTest(this.lastNameInput, validCheckoutDataForm.lastName);
        await this.typeTextByDataTest(this.postalCodeInput, validCheckoutDataForm.postalCode);
    };

    /**
     * Resumes the checkout process.
     * 
     * @example
     * await checkoutPage.gotoResumeCheckout();
     */
    gotoResumeCheckout = async (): Promise<void> => {
        await this.clickOnElementByDataTest(this.continueButton);
    };


};