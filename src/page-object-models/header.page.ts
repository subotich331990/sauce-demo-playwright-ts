import  { Page } from '@playwright/test';
import { Actions } from './astracts-classes/actions.class';

export class HeaderPage extends Actions { 
    readonly page        : Page;
    readonly mainLogo    : string;
    readonly cartButton  : string;
    readonly burgerButton: string;
    readonly titleSection: string;
    readonly shoppingCart: string;

    constructor(page: Page) {
        super(page);
        this.page         = page;
        this.mainLogo     = '.app_logo';
        this.cartButton   = '#shopping_cart_container';
        this.burgerButton = '#react-burger-menu-btn';
        this.titleSection = 'span[class="title"]';
        this.shoppingCart = '[data-test="shopping-cart-link"]';
    }

    openMenu = async (): Promise<void> => {
        await this.clickOnElement(this.burgerButton);
    } 


};