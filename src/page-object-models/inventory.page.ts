import { Page } from '@playwright/test';
import { Actions } from './astracts-classes/actions.class';

export class InventoryPage extends Actions {

    readonly inventory       : string
    readonly inventoryItem   : string
    readonly addToCartButton : string
    
    constructor(page: Page) {
        super(page);
        this.inventory       = '#inventory_container';
        this.inventoryItem   = 'inventory-item';
        this.addToCartButton = 'Add to cart';
    }

    /**
     * Adds a random item from the inventory to the cart.
     * @example
     * test('successfull Purchase',
     *     async ({ navigateTo, loginPage, inventoryPage, headerPage, headerTextsValidator }) => {
     *
     *         await test.step('Login to the aplication', async () => {
     *             await loginPage.login(objectsParams.validCredentials);
     *         });
     *
     *         await test.step('Add to a cart one item', async () => {
     *             await inventoryPage.addRandomItemToCart();
     *         });
     *
     *         await test.step('Navigate to cart page', async () => {
     *             await headerPage.goToCart();
     *             await headerTextsValidator.primaryHeader(objectsParams.validHeaderText);
     *         });
     *
     *     });
     */
    addRandomItemToCart = async (): Promise<void> => {
        await this.clickOnElementByRoleButton(this.addToCartButton)
    }

}