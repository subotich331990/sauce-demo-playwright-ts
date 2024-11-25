import { Page } from "@playwright/test";
import { Actions } from "./astracts-classes/actions.class";
export class CartPage extends Actions {

    readonly quantityLabel     : string
    readonly descriptionLabel  : string
    readonly cartListContainer : string
    readonly secondaryShoppingCartButton : string 
    readonly primaryCheckoutCartButton : string

    constructor(page: Page) {
        super(page);
        this.quantityLabel               = 'cart-quantity-label';
        this.descriptionLabel            = 'cart_description_label';
        this.cartListContainer           = 'cart_list';
        this.primaryCheckoutCartButton   = 'checkout' 
        this.secondaryShoppingCartButton = 'continue-shopping';
    }

    goToCheckoutPage = async (): Promise<void> => {
        await this.clickOnElementByDataTest(this.primaryCheckoutCartButton);
    }
    removeSingleItemFromCart = async (): Promise<void> => {
        
    }

}