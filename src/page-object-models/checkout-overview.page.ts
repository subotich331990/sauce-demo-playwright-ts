import { Page } from "@playwright/test";
import { Actions } from "./astracts-classes/actions.class";

export class CheckoutOverviewPage extends Actions {
    
    readonly paymentInformationLabel  : string
    readonly shippingInformationLabel : string
    readonly priceTotalLabel          : string
    readonly subtotalLabel            : string
    readonly taxLabel                 : string
    readonly totalLabel               : string
    readonly finishButton             : string
    readonly cancelButton             : string
    

    constructor(page: Page) {
        super(page);
        this.paymentInformationLabel  = 'payment-info-label' 
        this.shippingInformationLabel = 'shipping-info-label' 
        this.priceTotalLabel          = 'total-info-label' 
        this.subtotalLabel            = 'subtotal-label' 
        this.taxLabel                 = 'tax-label' 
        this.totalLabel               = 'total-label'
        this.finishButton             = 'finish' 
        this.cancelButton             = 'cancel'

    };

    finishCheckout = async (): Promise<void> => {
        await this.clickOnElementByDataTest(this.finishButton);
    }

    cancelCheckout = async (): Promise<void> => {
        await this.clickOnElementByDataTest(this.cancelButton);
    }

};