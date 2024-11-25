import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../page-object-models/login.page';
import { HeaderPage } from '../page-object-models/header.page';
import { InventoryPage } from '../page-object-models/inventory.page';
import { CartPage } from '../page-object-models/cart.page';
import { MenuPage } from '../page-object-models/menu.page';
import { CheckoutPage } from '../page-object-models/checkout.page';
import { CheckoutOverviewPage } from '../page-object-models/checkout-overview.page';
import { CheckoutCompletedPage } from '../page-object-models/checkout-completed.page';

type pageObjects = {
    loginPage: LoginPage
    headerPage: HeaderPage
    inventoryPage: InventoryPage
    cartPage: CartPage
    menuPage: MenuPage
    checkoutPage: CheckoutPage
    checkoutOverviewPage:CheckoutOverviewPage
    checkoutCompletedPage:CheckoutCompletedPage
}

export const test = base.extend<pageObjects>({
    loginPage: async ({ page }, use) => {
        use(new LoginPage(page));
    },
    headerPage: async ({ page }, use) => {
        use(new HeaderPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        use(new InventoryPage(page));
    },
    cartPage: async ({ page }, use) => {
        use(new CartPage(page));
    },
    menuPage: async ({ page }, use) => {
        use(new MenuPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        use(new CheckoutPage(page));
    },
    checkoutOverviewPage: async ({ page }, use) => {
        use(new CheckoutOverviewPage(page));
    },
    checkoutCompletedPage: async ({ page }, use) => {
        use(new CheckoutCompletedPage(page));
    },

});

export { 
    base,
    expect, 
    pageObjects }