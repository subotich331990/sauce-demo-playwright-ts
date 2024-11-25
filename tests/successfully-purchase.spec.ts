import { test } from '../src/fixtures/merge-fixtures/index.fixtures';
import * as objectsParams from '../src/data/objects-params/texts-objects-params.data';

test('successfull Purchase',
    async ({ navigateTo, loginPage, inventoryPage, headerPage, headerPageValidator, cartPageValidator, cartPage, checkoutPage, checkoutPageValidator, checkoutOverviewPageValidator, checkoutCompletedPage, checkoutCompletedPageValidator }) => {

        await test.step('Login to the aplication', async () => {
            await loginPage.login(objectsParams.validCredentials);
        });

        await test.step('Add to a cart one item', async () => {
            await inventoryPage.addRandomItemToCart();
            await headerPageValidator.cartBadge();
        });

        await test.step('Navigate to cart page', async () => {
            await headerPage.goToCart();
            await headerPageValidator.primaryHeader(objectsParams.validCartHeaderText);
            await cartPageValidator.cartButtons(objectsParams.validCartButtonTexts);
        });

        await test.step('Go to Checkout page', async () => {
            await cartPage.goToCheckoutPage();
            await headerPageValidator.primaryHeader(objectsParams.validCheckoutMainHeaderText);
            await checkoutPageValidator.formCheckout(objectsParams.validaCheckoutPlaceHolderTexts);
            await checkoutPageValidator.formCheckoutButtons(objectsParams.validCheckoutButtonTexts);
        });

        await test.step('Fill checkout form', async () => {
            await checkoutPage.fillOutForm(objectsParams.validCheckoutDataForm);
        });

        await test.step('Resume checkout form', async () => {
            await checkoutPage.gotoResumeCheckout();
            await headerPageValidator.primaryHeader(objectsParams.validCheckourHeaderOverviewTexts);
            await checkoutOverviewPageValidator.checkoutOverviewForm(objectsParams.validCheckoutOverviewTexts);
        });

        await test.step('Finish checkout', async () => {
            await checkoutOverviewPageValidator.finishCheckout();
            await headerPageValidator.primaryHeader(objectsParams.validCheckoutCompletedHeaderTexts);
        });

        await test.step('Validate checkout message', async () => {
            await checkoutCompletedPageValidator.checkoutCompletedMessage(objectsParams.ValidCheckoutCompletedMessageTexts);
        });

    });