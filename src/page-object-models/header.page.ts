import  { Page } from '@playwright/test';
import { Actions } from './astracts-classes/actions.class';

export class HeaderPage extends Actions { 
    readonly page        : Page;
    readonly mainLogo    : string;
    readonly cartButton  : string;
    readonly burgerButton: string;
    readonly titleSection: string;
    readonly shoppingCart: string;
    readonly shoppingCartBage: string;

    constructor(page: Page) {
        super(page);
        this.page         = page;
        this.mainLogo     = '.app_logo';
        this.cartButton   = '#shopping_cart_container';
        this.burgerButton = '#react-burger-menu-btn';
        this.titleSection = 'span[data-test="title"]';
        this.shoppingCart = '[data-test="shopping-cart-link"]';
        this.shoppingCartBage = 'shopping-cart-badge';
    }

    openMenu = async (): Promise<void> => {
        await this.clickOnElement(this.burgerButton);
    }
    
    /**
     * Opens the shopping cart page.
     * @example
     *  await headerPage.goToCart();
     */
    goToCart = async (): Promise<void> => {
        await this.clickOnElement(this.cartButton);
    }

};