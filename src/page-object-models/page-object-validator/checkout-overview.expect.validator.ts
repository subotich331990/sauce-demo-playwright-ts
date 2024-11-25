import { expect, Page, Locator } from "@playwright/test";
import { CheckoutOverviewPage } from "../checkout-overview.page";

export class CheckoutOverviewPageValidator extends CheckoutOverviewPage {
    
    readonly paymentInformationLabelLocator  : Locator
    readonly shippingInformationLabelLocator : Locator
    readonly priceTotalLabelLocator          : Locator
    readonly itemTotalLabelLocator            : Locator
    readonly taxLabelLocator                 : Locator
    readonly totalLabelLocator               : Locator
    readonly cancelButtonLocator             : Locator
    readonly finishButtonLocator             : Locator

    constructor(page: Page) {
        super(page);
        this.paymentInformationLabelLocator  = this.page.getByTestId(this.paymentInformationLabel)
        this.shippingInformationLabelLocator = this.page.getByTestId(this.shippingInformationLabel)
        this.priceTotalLabelLocator          = this.page.getByTestId(this.priceTotalLabel)
        this.itemTotalLabelLocator            = this.page.getByTestId(this.subtotalLabel)
        this.taxLabelLocator                 = this.page.getByTestId(this.taxLabel)
        this.totalLabelLocator               = this.page.getByTestId(this.totalLabel)
        this.cancelButtonLocator             = this.page.getByTestId(this.cancelButton) 
        this.finishButtonLocator             = this.page.getByTestId(this.finishButton)
    }


    checkoutOverviewForm = async ( validCheckoutOverviewDataForm : { paymentInformationLabel: string, shippingInformationLabel: string, priceTotalLabel: string, itemTotalLabel: string, taxLabel: string, totalLabel: string } ): Promise<void> => {
        await expect(this.paymentInformationLabelLocator).toBeVisible();
        await expect(this.paymentInformationLabelLocator).toHaveText(validCheckoutOverviewDataForm.paymentInformationLabel);

        await expect(this.shippingInformationLabelLocator).toBeVisible();
        await expect(this.shippingInformationLabelLocator).toHaveText(validCheckoutOverviewDataForm.shippingInformationLabel);

        await expect(this.priceTotalLabelLocator).toBeVisible();
        await expect(this.priceTotalLabelLocator).toHaveText(validCheckoutOverviewDataForm.priceTotalLabel);

        await expect(this.itemTotalLabelLocator).toBeVisible();
        await expect(this.itemTotalLabelLocator).toContainText(validCheckoutOverviewDataForm.itemTotalLabel);

        await expect(this.taxLabelLocator).toBeVisible();
        await expect(this.taxLabelLocator).toContainText(validCheckoutOverviewDataForm.taxLabel);

        await expect(this.totalLabelLocator).toBeVisible();
        await expect(this.totalLabelLocator).toContainText(validCheckoutOverviewDataForm.totalLabel);

    }

    checkoutOverviewButtons = async ( validCheckoutOverview : { primaryButton: string, secondaryButton: string } ): Promise<void> => {
        await expect(this.finishButtonLocator).toBeVisible();
        await expect(this.finishButtonLocator).toHaveText(validCheckoutOverview.primaryButton);
        await expect(this.cancelButtonLocator).toBeVisible();
        await expect(this.cancelButtonLocator).toHaveText(validCheckoutOverview.secondaryButton);
    }

}