import  { Page } from '@playwright/test';
export class HeaderPage { 
    readonly page        : Page;
    readonly mainLogo    : string;
    readonly cartButton  : string;
    readonly burgerButton: string;
    readonly titleSection: string;
    readonly shoppingCart: string;

    constructor(page: Page) {
        this.page         = page;
        this.mainLogo     = '.app_logo';
        this.cartButton   = '#shopping_cart_container';
        this.burgerButton = '#react-burger-menu-btn';
        this.titleSection = 'span[class="title"]';
        this.shoppingCart = '[data-test="shopping-cart-link"]';
    }

    openMenu = async (): Promise<void> => {
        
    } 


};