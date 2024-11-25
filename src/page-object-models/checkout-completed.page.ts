import { Page } from "@playwright/test";
import { Actions } from "./astracts-classes/actions.class";

export class CheckoutCompletedPage extends Actions {
    
    readonly completedHeader   : string
    readonly completedSubtitle : string
    readonly backHomeButton   : string
    

    constructor(page: Page) {
        super(page);
        this.completedHeader   = 'complete-header' 
        this.completedSubtitle = 'complete-text' 
        this.backHomeButton   = 'back-to-products'

    };

    goToHome = async  (): Promise<void> => {
        await this.clickOnElementByDataTest(this.backHomeButton);
    };

};